import { supaService } from "../../clients/supabase.ts";
import { CircleClient } from "../../clients/circle.ts";
import { tbComunidadeUsuario } from '../../interfaces/schemaGeral.ts'

/*
    Deve obter o perfil e tags para cada novo usuário que tenha o co_pessoa
    ... montar payload
    ... lockar
    ... fazer lote de requisições
*/

export async function identificarPerfis() {
  const path = new URL(import.meta.url).pathname;
  // Listar os usuários pendentes de sincronização
  const { data, error } = await supaService
    .schema('geral')
    .from('vw_atualizacoes_usuarios_comunidade_pendente')
    .select(`*`)
    ;

  console.log('VIEW: '+JSON.stringify(data));

  // console.log(data);
  if (error) throw error;

  try {
    // Unlock de todos os usuários que não estão lockados (para os próximos que são cabíveis entrarem na próxima atualização)
    const _unlock = await supaService
      .schema('geral')
      .from('tb_comunidade_usuario')
      .update({
        st_atualizando: null
      })
      .eq('st_atualizando', true)
      

    // Lock de todos os usuários que serão atualizados
    const _lock = await supaService
      .schema('geral')
      .from('tb_comunidade_usuario')
      .update({
        st_atualizando: true
      })
      .in('user_id', data.map(i => i.user_id))

    const resultado = [];

    for (const u of data){
      const resultadoUsuario = await sincronizarUsuario(u);

      resultado.push({
        'usuario': u.user_id
        , 'acoes': resultadoUsuario
      })
    }   

  return resultado;
  
  } catch (error) {
    console.log(`❌ Erro ${path}: ${error}`);
    return error;    
  }
  

}

/*
  Passos para a sincronização de um usuário:
    1. Atualizar tags
    2. Atribuir perfis
    3. Obter retorno das chamadas e salvar no banco (resetar st_atualizando)
*/
async function sincronizarUsuario (usuario : tbComunidadeUsuario){
  console.log(`🔄 Início da sincronização de usuário. user_id: ${usuario.user_id} | email: ${usuario.em_comunidade}`);
  const circle = new CircleClient();
  const resultado = [];
  
  // Atualização das tags
  const atualizacaoTags = await circle.atualizarUsuario(usuario.user_id, usuario.lista_tags ?? [] );    // Não deve ter lista vazia, uma vez que na querie sempre há
  const emailUsuario : string = usuario.em_comunidade ?? usuario.email ?? '';

  resultado.push({
    'atualizacao': 'tags'
    , 'sucesso': atualizacaoTags.ok
  })
  
  
  // Atribuir cada perfil para o usuário
  for (const perfil of usuario.lista_perfis ?? []){
    const atribuirPerfil = await circle.atribuirPerfil(perfil, emailUsuario);
    
    resultado.push({
      'atualizacao': 'tags'
      , 'sucesso': atribuirPerfil.ok
    })
  }

  // Atualizar dados
  const atualizarDadosUsuario = await supaService
    .schema('geral')
    .from('tb_comunidade_usuario')
    .update({
      'st_atualizando': false
      , 'dt_atualizacao': 'now()'
      , 'co_pessoa_fisica': usuario.co_pessoa_fisica
      , 'list_member_tags': usuario.lista_tags
      , 'list_perfis': usuario.lista_perfis
    })
    .eq('user_id', usuario.user_id)
  
    resultado.push({
      'atualizacao': 'db'
      , 'sucesso': atualizarDadosUsuario.data? true : false
    })
  
  return resultado;
}