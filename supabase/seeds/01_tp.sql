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


INSERT INTO GERAL.TP_ORGANIZACAO (
    SG_ORGANIZACAO
    , NO_ORGANIZACAO
    , DS_ORGANIZACAO
    , SG_ESFERA_PUBLICA
)

VALUES 
    -- Financiados
    ('IE', 'Embrapii', 'Administração Embrapii', NULL)
    , ('IE_CC', 'Centro de Competência', 'Centro de Competência da Rede Embrapii', NULL)
    , ('IE_UE', 'Unidade Embrapii', 'Unidade da Rede Embrapii', NULL)

    -- Instituições
    , ('ICT', 'Instituição de Ciência e Tecnologia', 'Instituição que realiza o desenvolvimento técnico científico', NULL)
    , ('IES', 'Instituição de Ensino Superior', 'Instituição que realiza a formação de mão de obra superior', NULL)
    
    -- Financiadores
    , ('GOV1_F', 'Governo Federal', 'Governo Federal', 'F')
    , ('GOV2_E', 'Governo Estadual', 'Governo Estadual', 'E')
    , ('GOV3_M', 'Governo Municipal', 'Governo Municipal', 'M')

    , ('MF', 'Ministério Federal', 'Ministérios da Esfera Federal', 'F')
    , ('BP_F', 'Banco Público Federal', 'Banco público federal', 'F')
    , ('BP_E', 'Banco Público Estadual', 'Banco público estadual', 'E')
    
    -- Associados
    , ('E1_MEI', 'Microempreendedor Individual', 'MEI', NULL)
    , ('E2_MI', 'Micro empresa', 'Empresa MICRO', NULL)
    , ('E3_P', 'Pequena empresa', 'Empresa PEQUENA', NULL)
    , ('E4_M', 'Média empresa', 'Empresa MÉDIA', NULL)
    , ('E5_M', 'Grande empresa', 'Empresa GRANDE', NULL)
;

-- INSERT INTO GERAL.TP_ACAO_APP (
--     SG_ACAO_APP
--     , NO_ACAO_APP
--     , DS_ACAO_APP
-- ) VALUES

--     ('C', 'Adicionar', 'Permite adicionar novos dados')
--     , ('R', 'Ler/Visualizar', 'Permite visualizar os dados')
--     , ('U', 'Atualizar', 'Permite atualizar os dados')
--     , ('D', 'Deletar', 'Permite deletar os dados')
--     , ('I', 'Importar', 'Permite importar dados, se tiver a funcionalidade')
--     , ('E', 'Exportar', 'Permite exportar dados, se tiver a funcionalidade')
--     , ('P', 'Imprimir', 'Permite imprimir a página, se tiver a funcionalidade')
-- ;


INSERT INTO GERAL.TP_ORGANIZACAO_EMBRAPII (
    SG_ORGANIZACAO_EMBRAPII
    , NO_ORGANIZACAO_EMBRAPII
) VALUES

    ('CC', 'Centro de Competência')
    , ('UE', 'Unindade Embrapii')
;
