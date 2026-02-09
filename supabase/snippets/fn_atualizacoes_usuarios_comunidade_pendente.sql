SELECT * FROM geral.vw_atualizacoes_usuarios_comunidade_pendente

-- CREATE OR REPLACE VIEW geral.vw_atualizacoes_usuarios_comunidade_pendente AS
-- SELECT 
--   cu.user_id
--   , p.co_pessoa_fisica
--   , CONCAT('[' , STRING_AGG(DISTINCT ot.co_comunidade_perfil::varchar, ',') , ']') as lista_perfis
--   , CONCAT('[' 
--     , STRING_AGG(ot.co_comunidade_tag::varchar, ',') 
--     , CASE 
--         WHEN STRING_AGG(DISTINCT o.co_comunidade_tag::varchar, ',') IS NOT NULL
--         THEN ',' || STRING_AGG(DISTINCT o.co_comunidade_tag::varchar, ',')
--         ELSE NULL
--         END
--   , ']') as lista_tags

-- FROM geral.tb_pessoa_fisica p

--   LEFT JOIN geral.rl_organizacao_cargo oc
--     USING (co_pessoa_fisica)
--   LEFT JOIN geral.tb_comunidade_usuario cu
--     ON cu.email = p.em_comunidade
  
--   LEFT JOIN geral.tb_organizacao o
--     USING (co_organizacao)
--   LEFT JOIN geral.tp_organizacao_tipo ot
--     USING (sg_organizacao_tipo)

-- WHERE 
--   1=1
--   AND (
--     (
--       greatest(p.dt_atualizacao, oc.dt_atualizacao) >= cu.dt_atualizacao    -- Teve atualização da pessoa ou cargo
--       OR cu.dt_atualizacao IS NULL                                          -- ... ou ainda não teve nenhuma atualizacao
--     )
--     AND cu.st_atualizando IS NOT TRUE                                       -- ... e não está atualizando no momento
--   )

-- GROUP BY 
--   cu.user_id
--   , p.co_pessoa_fisica

-- -- Deve limitar a 50 (execução das chamadas à Circle deve durar 1 min)
-- LIMIT 50
