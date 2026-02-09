export interface tbComunidadeUsuario {
    user_id : number
    , name : string | null
    , email : string | null
    , co_pessoa?: number
    , list_atribuicoes?: string
    , list_member_tags?: string
}