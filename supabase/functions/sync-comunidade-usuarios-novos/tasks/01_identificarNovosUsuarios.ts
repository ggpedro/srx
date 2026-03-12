import {CircleClientInterface, UserRecord} from '../../interfaces/circleInterface.ts'
import {supaService} from '../../clients/supabase.ts'
import {tbComunidadeUsuario} from '../../interfaces/schemaGeral.ts'

/*
    Novos usuários são todos aqueles que AINDA NÃO POSSUEM UM PERFIL ATRIBUÍDO. Podem ser últimos usuários ou não
*/
export async function identificarNovosUsuarios (client: CircleClientInterface){
    const path = new URL(import.meta.url).pathname;       // Path para debug
    
    // Requisição para a primeira página
    let page = 1;
    let fetchUsuarios = await client.fetchUsuarios(page);
    const allRecords = fetchUsuarios.records;

    while (fetchUsuarios.has_next_page){
        page++
        fetchUsuarios = await client.fetchUsuarios(page);        
        allRecords.push(...fetchUsuarios.records);
    }

    // const ultimosUsuariosComunidade : UserRecord[] = allRecords;
        const idsUltimosUsuariosComunidade : number[] = allRecords.map (i => i.id);
        
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
        const usuariosNaoSalvos : UserRecord[] = allRecords.filter (u => !usuariosSalvos?.includes(u.id));

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