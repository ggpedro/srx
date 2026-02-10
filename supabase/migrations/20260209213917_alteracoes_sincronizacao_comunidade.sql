alter table "geral"."rl_organizacao_cargo" add column "dt_atualizacao" timestamp without time zone;

alter table "geral"."rl_permissao_cargo" add column "dt_atualizacao" timestamp without time zone;

alter table "geral"."tb_comunidade_usuario" drop column "co_pessoa";

alter table "geral"."tb_comunidade_usuario" drop column "dt_atribuicoes";

alter table "geral"."tb_comunidade_usuario" drop column "list_atribuicoes";

alter table "geral"."tb_comunidade_usuario" add column "co_pessoa_fisica" bigint;

alter table "geral"."tb_comunidade_usuario" add column "dt_atualizacao" timestamp without time zone;

alter table "geral"."tb_comunidade_usuario" add column "list_perfis" json;

alter table "geral"."tb_comunidade_usuario" add column "st_atualizando" boolean;

alter table "geral"."tb_comunidade_usuario" alter column "list_member_tags" set data type json using "list_member_tags"::json;

alter table "geral"."tb_pessoa_fisica" add column "dt_atualizacao" timestamp without time zone;

CREATE UNIQUE INDEX tb_comunidade_usuario_email_key ON geral.tb_comunidade_usuario USING btree (email);

CREATE UNIQUE INDEX tb_pessoa_fisica_co_cpf_key ON geral.tb_pessoa_fisica USING btree (co_cpf);

alter table "geral"."tb_comunidade_usuario" add constraint "tb_comunidade_usuario_email_key" UNIQUE using index "tb_comunidade_usuario_email_key";   

alter table "geral"."tb_pessoa_fisica" add constraint "tb_pessoa_fisica_co_cpf_key" UNIQUE using index "tb_pessoa_fisica_co_cpf_key";

/*
  DESATIVEI AS SEGUINTES ALTERAÇÕES DEVIDO A MELHOR UTILIZAÇÃO EM VIEW (A JOIN SOMENTE ERA NECESSÁRIA PARA FAZER POR QUERY NO TS)
    alter table "geral"."tb_pessoa_fisica" add constraint "tb_pessoa_fisica_em_comunidade_fkey" FOREIGN KEY (em_comunidade) REFERENCES geral.tb_comunidade_usuario(email) not valid;
    alter table "geral"."tb_pessoa_fisica" validate constraint "tb_pessoa_fisica_em_comunidade_fkey";
*/
create or replace view "geral"."vw_atualizacoes_usuarios_comunidade_pendente" as  
SELECT 
  cu.user_id
  , p.co_pessoa_fisica
  , cu.email as em_comunidade
  , ARRAY_AGG(DISTINCT ot.co_comunidade_perfil) FILTER (WHERE ot.co_comunidade_perfil IS NOT NULL) as lista_perfis
  , ARRAY(
    SELECT DISTINCT unnest(
      ARRAY_CAT(
        ARRAY_AGG(DISTINCT ot.co_comunidade_tag),
        ARRAY_AGG(DISTINCT o.co_comunidade_tag)
      )
    )
    ORDER BY 1
  ) as lista_tags
  
  -- , CONCAT('[' 
  --   , ARRAY_AGG(ot.co_comunidade_tag::varchar, ',') 
  --   , CASE 
  --       WHEN ARRAY_AGG(DISTINCT o.co_comunidade_tag::varchar, ',') IS NOT NULL
  --       THEN ',' || ARRAY_AGG(DISTINCT o.co_comunidade_tag::varchar, ',')
  --       ELSE NULL
  --       END
  -- , ']') as lista_tags

FROM geral.tb_pessoa_fisica p

  LEFT JOIN geral.rl_organizacao_cargo oc
    USING (co_pessoa_fisica)
  LEFT JOIN geral.tb_comunidade_usuario cu
    ON cu.email = p.em_comunidade
  
  LEFT JOIN geral.tb_organizacao o
    USING (co_organizacao)
  LEFT JOIN geral.tp_organizacao_tipo ot
    USING (sg_organizacao_tipo)

WHERE 
  1=1
  AND (
    (
      greatest(p.dt_atualizacao, oc.dt_atualizacao) >= cu.dt_atualizacao    -- Teve atualização da pessoa ou cargo
      OR cu.dt_atualizacao IS NULL                                          -- ... ou ainda não teve nenhuma atualizacao
    )
    AND cu.st_atualizando IS NOT TRUE                                       -- ... e não está atualizando no momento
  )

GROUP BY 
  cu.user_id
  , p.co_pessoa_fisica
  , cu.email

-- Deve limitar a 50 (execução das chamadas à Circle deve durar 1 min)
LIMIT 50
;