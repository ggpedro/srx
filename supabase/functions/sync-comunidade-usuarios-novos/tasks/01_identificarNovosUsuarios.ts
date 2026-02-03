// import {CircleClient} from '../clients/circle.ts'
import {CircleClientInterface} from '../../../interfaces/circle.ts'

/*
    Novos usuários são todos aqueles que AINDA NÃO POSSUEM UM PERFIL ATRIBUÍDO
*/
export async function identificarNovosUsuarios (client: CircleClientInterface){
    const usuariosComunidade = await client.fetchMembers();
    
    return usuariosComunidade;
}