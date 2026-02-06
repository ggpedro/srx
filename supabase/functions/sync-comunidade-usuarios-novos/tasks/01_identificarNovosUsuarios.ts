// import {CircleClient} from '../clients/circle.ts'
import {CircleClientInterface, UserRecord} from '../../interfaces/circleInterface.ts'
// import { createClient } from 'jsr:@supabase/supabase-js@2'

/*
    Novos usuários são todos aqueles que AINDA NÃO POSSUEM UM PERFIL ATRIBUÍDO
*/
export async function identificarNovosUsuarios (client: CircleClientInterface){
    const fetchUsuarios = await client.fetchUsuarios();
    const listaUsuarios : UserRecord[] = fetchUsuarios.records;

    
    
    // const novosUsuarios : UserRecord[] = listaUsuarios.filter(u => {

    // })
    
    
    return listaUsuarios;
}