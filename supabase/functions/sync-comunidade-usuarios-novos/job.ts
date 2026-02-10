/*
    Etapas
        1. Obtém usuários novos da comunidade e seus atributos
        2. Verificar quais não possuem no banco, e adiciona-os
        3. Após salvar, busca perfil/tags com base no e-mail
        4. Prepara o corpo da requisição para atualizar os dados dos usuários
        5. Função que, para cada usuário, irá fazer requisição no Circle
        6. Executa (5) para cada (4)
        7. Recebe a resposta e atualiza nos dados
*/

import {identificarNovosUsuarios} from './tasks/01_identificarNovosUsuarios.ts'
import { identificarPerfis } from "./tasks/02_sincronizarNovosPerfis.ts";
// import {temp} from './tasks/temp.ts'

import {CircleClient} from "../clients/circle.ts";
import {CircleClientInterface} from '../interfaces/circleInterface.ts'

enum JobTipo {
    REGISTRAR_USUARIOS_NOVOS = 1                // Registrar usuários novos na comunidade, não cadastrados no SRX
    , CONFIGURAR_USUARIOS_NOVOS = 2             // Obter um lote de usuários, sem atualização, lockar e atualizar um a um
    // , TEMP = 3                                  // Scripts temporários
}

export async function job (
    jobTipo : JobTipo 
    , client : CircleClientInterface = new CircleClient()        // Default. Caso informado um mock, ele será utilizado
){
    switch (jobTipo) {
        case JobTipo.REGISTRAR_USUARIOS_NOVOS: {
            const novosUsuarios = await identificarNovosUsuarios(client);
            return novosUsuarios;
        }
            
        case JobTipo.CONFIGURAR_USUARIOS_NOVOS: {
            const atualizacoes = await identificarPerfis();
            return atualizacoes;
        }

        // case JobTipo.TEMP: {
        //     const e = await temp();
        //     return e;
        // }
            
        default:
            throw new Error(`Job tipo inválido`);
    }
}