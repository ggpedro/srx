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
import { CircleClient } from "./clients/circle.ts";
import {CircleClientInterface} from '../../interfaces/circle.ts'

export async function job (
    client : CircleClientInterface = CircleClient        // Default. Caso informado um mock, ele será utilizado
){
    const novosUsuarios = await identificarNovosUsuarios(client);
    return novosUsuarios;
}