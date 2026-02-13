select net.http_get('http://kong:8000');


drop function private.job_sync_comunidade(integer, boolean);
drop function private.get_headers_sync_comunidade(integer, boolean);
drop function private.get_host_url();

/*
  FUNÇÕES PARA USO NOS CRONS
*/
select private.job_sync_comunidade(1, true)
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
