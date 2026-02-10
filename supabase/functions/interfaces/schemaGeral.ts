/*
    Cometi um erro chato nesta interface, pq tentei aproveitar os nomes da API, porém em determinado momento por limitações das edge funcions era necessário usar o mesmo da base.

    Isto causou a "duplicidade" de alguns atributos, desnecessariamente (nomenclaturas diferentes, mas mesmo significado)
*/
export interface tbComunidadeUsuario {
    user_id : number
    , name : string | null
    , email : string | null
    , em_comunidade?: string | null
    , co_pessoa_fisica?: number
    , list_perfis?: number[]
    , lista_perfis?: number[]
    , list_member_tags?: number[]
    , lista_tags?: number[]
}