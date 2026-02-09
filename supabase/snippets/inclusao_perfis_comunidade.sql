BEGIN transaction;

WITH NOVOS_DADOS AS (
    SELECT * FROM (VALUES 
        ('nasafe7742@badfist.com', '977.739.280-02', 'AKCIT')
        , ('becinax399@besenica.com', '81834446015' , 'CCTA')
        , ('becinax399@besenica.com', '818.344.460-15' , 'CTIM-UFABC')
        , ('kadoli2197@datehype.com', '923.554.360-61' , 'CEINFAR-USP')

    ) AS Dados(em_comunidade, co_cpf, sg_organizacao)
)

, DADOS_PARCIAIS_1 AS (
    SELECT 
        nd.*
        , cu.user_id
        , cu.name
        , 'I' as sg_cargo
        , o.co_organizacao
        
        
    FROM NOVOS_DADOS nd
    LEFT JOIN geral.tb_organizacao o
        ON o.sg_organizacao ilike nd.sg_organizacao

    LEFT JOIN geral.tp_organizacao_tipo ot
        USING (sg_organizacao_tipo)

    LEFT JOIN geral.tb_comunidade_usuario cu
        ON cu.email = nd.em_comunidade
    
)

-- Deve inserir os dados caso não exista e, caso dê conflito (informado +1 vez), não ocorrer nada
, REGISTRAR_NOVOS_USUARIOS AS (
    INSERT INTO geral.tb_pessoa_fisica (em_comunidade, co_cpf, no_pessoa_fisica, dt_atualizacao)
    SELECT 
        lower(dp.em_comunidade)
        , REGEXP_REPLACE(dp.co_cpf, '[^0-9]', '', 'g')
        , COALESCE (
            dp.name
            , INITCAP(REPLACE(SPLIT_PART(em_comunidade, '@', 1), '.', ' '))
        )
        , current_timestamp
   
    FROM DADOS_PARCIAIS_1 dp
    GROUP BY REGEXP_REPLACE(dp.co_cpf, '[^0-9]', '', 'g'), dp.em_comunidade, dp.name
    ON CONFLICT (CO_CPF)           -- Caso o mesmo usuário valha para CC e UE, por ex
    DO UPDATE SET
        dt_atualizacao = current_timestamp
    RETURNING *
)

INSERT INTO geral.rl_organizacao_cargo (co_pessoa_fisica, co_organizacao, sg_cargo, dt_atualizacao)
SELECT 
    rnu.co_pessoa_fisica
    , dp.co_organizacao
    , dp.sg_cargo
    , current_timestamp

FROM DADOS_PARCIAIS_1 dp
INNER JOIN REGISTRAR_NOVOS_USUARIOS rnu
    USING (em_comunidade)

RETURNING *

;
commit;
end transaction;