/*
    HOSTS - PADRÃO
*/

INSERT INTO private.hosts(
    id
    , loc
    , dev
    , prd
)
VALUES (
    1
    , 'kong:8000'
    , 'vkkyebyiglgqhayxjzkz.supabase.co'
    , 'fkkszldnrgwxqcgnddux.supabase.co'
);

INSERT INTO GERAL.TP_CARGO (
    SG_CARGO
    , SG_CARGO_SUPERIOR
    , NO_CARGO
    , DS_CARGO
)
VALUES 
    ('SADM', NULL, 'Administrador de sistema', 'Administrador de dados da organização')

    -- Nível máximo
    , ('PRES', NULL, 'Presidente/Reitor/CEO', 'Máxima autoridade da organização')

    -- Nível 2
    , ('VPRES', 'PRES', 'Vice-Presidente/Pró-Reitor/COO', 'Auxilia o presidente e o substitui quando necessário')

    -- Nível 3
    , ('DIR', 'VPRES', 'Diretor', 'Responsável pela direção de áreas estratégicas da organização')

    -- Nível 4
    , ('GER', 'DIR', 'Gerente/Chefe Departamental', 'Gerencia equipes e processos institucionais')

    -- Nível 5
    , ('COORD', 'GER', 'Coordenador', 'Coordena equipes operacionais e técnicas')

    -- Nível 6 (mesmo nível)
    , ('PESQ', 'COORD', 'Pesquisador', 'Executa atividades de pesquisa científica e tecnológica')
    , ('DOC', 'COORD', 'Docente', 'Atua em ensino, pesquisa e extensão')
    , ('TEC', 'COORD', 'Técnico', 'Executa atividades técnicas, como administrativas')

    -- INDEFINIDO
    , ('I', NULL, 'Indefinido', 'Cargo não definido - Necessário atualizar')
;


INSERT INTO GERAL.TP_ORGANIZACAO_TIPO (
    SG_ORGANIZACAO_TIPO
    , NO_ORGANIZACAO_TIPO
    , DS_ORGANIZACAO_TIPO
    , SG_ESFERA_PUBLICA
    , CO_COMUNIDADE_TAG
    , CO_COMUNIDADE_PERFIL
)

VALUES 
    -- Financiados
    ('IE', 'Embrapii', 'Administração Embrapii', NULL, 220804, 87911)
    , ('IE_CC', 'Centro de Competência', 'Centro de Competência da Rede Embrapii', NULL, 208105, 76274)
    , ('IE_UE', 'Unidade Embrapii', 'Unidade da Rede Embrapii', NULL, 219763, 76276)

    -- Instituições
    , ('ICT', 'Instituição de Ciência e Tecnologia', 'Instituição que realiza o desenvolvimento técnico científico', NULL, NULL, NULL)
    , ('IES', 'Instituição de Ensino Superior', 'Instituição que realiza a formação de mão de obra superior', NULL, NULL, NULL)
    
    -- Financiadores
    , ('GOV1_F', 'Governo Federal', 'Governo Federal', 'F', NULL, NULL)
    , ('GOV2_E', 'Governo Estadual', 'Governo Estadual', 'E', NULL, NULL)
    , ('GOV3_M', 'Governo Municipal', 'Governo Municipal', 'M', NULL, NULL)

    , ('MF', 'Ministério Federal', 'Ministérios da Esfera Federal', 'F', NULL, NULL)
    , ('BP_F', 'Banco Público Federal', 'Banco público federal', 'F', NULL, NULL)
    , ('BP_E', 'Banco Público Estadual', 'Banco público estadual', 'E', NULL, NULL)
    
    -- Associados
    , ('E1_MEI', 'Microempreendedor Individual', 'MEI', NULL, NULL, NULL)
    , ('E2_MI', 'Micro empresa', 'Empresa MICRO', NULL, NULL, NULL)
    , ('E3_P', 'Pequena empresa', 'Empresa PEQUENA', NULL, NULL, NULL)
    , ('E4_M', 'Média empresa', 'Empresa MÉDIA', NULL, NULL, NULL)
    , ('E5_M', 'Grande empresa', 'Empresa GRANDE', NULL, NULL, NULL)
;

