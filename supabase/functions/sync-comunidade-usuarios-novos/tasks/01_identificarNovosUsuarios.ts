import {CircleClientInterface, UserRecord} from '../../interfaces/circleInterface.ts'
import {supaService} from '../../clients/supabase.ts'
import {tbComunidadeUsuario} from '../../interfaces/schemaGeral.ts'

/*
    Novos usuários são todos aqueles que AINDA NÃO POSSUEM UM PERFIL ATRIBUÍDO. Podem ser últimos usuários ou não
*/
export async function identificarNovosUsuarios (client: CircleClientInterface){
    const path = new URL(import.meta.url).pathname;       // Path para debug
    
    const fetchUsuarios = await client.fetchUsuarios();
    const ultimosUsuariosComunidade : UserRecord[] = fetchUsuarios.records;
        const idsUltimosUsuariosComunidade : number[] = ultimosUsuariosComunidade.map (i => i.id);
        
    const {data, error} = await supaService
        .schema('geral')
        .from('tb_comunidade_usuario')
        .select('user_id')
        .in('user_id', idsUltimosUsuariosComunidade);
        
    if (error){
        console.log(`❌ Erro ${path}: ${JSON.stringify(error)}`);
        return error;       
    }

    try {
        const usuariosSalvos : number[] = data.map( u=> u.user_id);
        const usuariosNaoSalvos : UserRecord[] = ultimosUsuariosComunidade.filter (u => !usuariosSalvos?.includes(u.id));

        const upsertNovosUsuarios : tbComunidadeUsuario[] = [];
            usuariosNaoSalvos.map( u => {
                const usuario = {
                    "user_id": u.id
                    , "name": (u.first_name ?? '') + ' ' + (u.last_name ?? '')
                    , "email": (u.email)
                }
                upsertNovosUsuarios.push(usuario);
            })

        const upsertNovosUsuariosReturn = await supaService
            .schema('geral')
            .from('tb_comunidade_usuario')
            .upsert(upsertNovosUsuarios, {onConflict : 'user_id'})
            // .insert(upsertNovosUsuarios);


        return upsertNovosUsuariosReturn;

    } catch (error) {
        console.log(`❌ Erro ${path}: ${JSON.stringify(error)}`)
        return error;
    }
        
    
}