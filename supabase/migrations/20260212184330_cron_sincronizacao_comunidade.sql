/*
  SCHEMA COM TABELA PARA VARIÁVEIS SENSÍVEIS, ACESSÍVEIS APENAS PELO SERVICE E NÃO-VERSIONADAS
*/
  CREATE SCHEMA IF NOT EXISTS "private";
  ALTER SCHEMA "private" OWNER TO "postgres";
  REVOKE ALL ON SCHEMA private FROM public, anon, authenticated;
  REVOKE ALL ON ALL TABLES IN SCHEMA private FROM public, anon, authenticated;


  CREATE TABLE private.pg_env(
    id int primary key
    -- Identificação do ambiente e url
    , env varchar(3)        -- LOC/DEV/PRD (Usar para lógicas)
    , sb_cloud bool       -- Se for na cloud do supabase, não deve chamar o localhost (pg, kong e edge functions não estarão no mesmo container) 

    -- Anon_key para facilitar autenticações
    , anon_key varchar(255)

    -- Secrets
    , x_cron_secret varchar(255)
  );

-- Domínio (URL após https:// e antes dos /endpoints)
  CREATE TABLE private.hosts (
    id int primary key
    , loc varchar(255)
    , dev varchar(255)
    , prd varchar(255)
  );
  

/*
  FUNÇÕES PARA USO NOS CRONS
*/

-- FUNÇÃO 1: Obter URL do HOST
  create or replace function private.get_host_url()
  returns text
  language plpgsql
  security definer
  set search_path = private, public
  as $$
  declare
    v_env   private.pg_env%rowtype;
    v_hosts private.hosts%rowtype;
  begin
    -- pega configuração de ambiente
    select * into v_env
    from private.pg_env
    limit 1;

    -- pega hosts
    select * into v_hosts
    from private.hosts
    limit 1;

    -- cloud supabase
    if v_env.sb_cloud then
      if v_env.env = 'PRD' then
        return 'https://' || v_hosts.prd;
      else
        return 'https://' || v_hosts.dev;
      end if;

    -- ambiente local/docker/VPS
    else
      return 'http://' || v_hosts.loc;
    end if;

  end;
  $$;


-- FUNÇÃO 2: Obter headers
  create or replace function private.get_headers_sync_comunidade(
    p_job_tipo  integer,
    p_job_teste boolean
  )
  returns jsonb
  language plpgsql
  security definer
  set search_path = private, public, pg_catalog
  as $$
  declare
    v_env        private.pg_env%rowtype;
    v_headers    jsonb;
    v_host_url   text;
    v_host_header text;
  begin
    -- lê ambiente
    select * into v_env
    from private.pg_env
    limit 1;

    if v_env is null then
      raise exception 'private.pg_env não configurada';
    end if;

    -- pega url base (da função que criamos antes)
    v_host_url := private.get_host_url();

    -- remove protocolo para obter apenas o host
    v_host_header :=
      regexp_replace(v_host_url, '^https?://', '');

    -- headers padrão
    v_headers :=
      jsonb_build_object(
        'Content-Type','application/json',
        'Authorization','Bearer ' || v_env.anon_key,
        'api_key', v_env.anon_key,
        'x-cron-secret', v_env.x_cron_secret,
        'jobTipo', p_job_tipo,
        'jobTeste', p_job_teste
      );

    -- Host somente fora da Supabase Cloud
    if not v_env.sb_cloud then
      v_headers := v_headers || jsonb_build_object(
        'Host', v_host_header
      );
    end if;

    return v_headers;
  end;
  $$;




-- Função 3: Montar a requisição considerando as demais anteriores
  create or replace function private.job_sync_comunidade(
    p_job_tipo  integer,
    p_job_teste boolean
  )
  returns void
  language plpgsql
  security definer
  set search_path = private, public
  as $$
  declare
    v_url text;
  begin
    -- monta endpoint
    v_url := private.get_host_url()
            || '/functions/v1/sync-comunidade-usuarios-novos';

    -- chamada HTTP
    perform net.http_post(
      url := v_url,
      headers := private.get_headers_sync_comunidade(p_job_tipo::integer, p_job_teste::boolean),
      body := '{}'::jsonb
    );
  end;
  $$;


/*
  DEFINIÇÃO DOS CRONS

  Deixei comentado pois CRONs precisam de execução diferente, garantindo que rodem apenas em produção
    ... no caso do Circle, o plano que temos não possui ambiente staging e, por isso, não podemos deixar consumindo tokens em PRD
*/

-- -- CRON 1: Rodar atualização dos novos usuários às 12h e 00h
-- select cron.schedule(
--   'sync-comunidade-importar-novos-usuarios',
--   '0 0,12 * * *',
--   $$ select private.job_sync_comunidade(1, false); $$
-- );

-- -- CRON 2: Subir ao circle as permissões e tags devidas de cada usuário, a cada 2 minutos das 12h às 13h e das 00h às 01h
-- select cron.schedule(
--   'sync-comunidade-sincronizar-novos-usuarios',
--   '*/2 0,12 * * *',
--   $$ select private.job_sync_comunidade(2, false); $$
-- );


