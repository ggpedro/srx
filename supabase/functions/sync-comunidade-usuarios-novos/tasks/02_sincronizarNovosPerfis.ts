import { supaService } from "../../clients/supabase.ts";

/*
    Deve obter o perfil e tags para cada novo usuário que tenha o co_pessoa
    ... montar payload
    ... lockar
    ... fazer lote de requisições
*/

export async function identificarPerfis() {

  // 1. Buscamos os dados da tb_comunidade_usuario com join na tb_pessoa_fisica 
  // para resolver o co_pessoa_fisica nulo via CPF ou Email
  const { data, error } = await supaService
    .schema('geral')
    .from('tb_comunidade_usuario')
    .select(`
      user_id,
      co_pessoa_fisica,
      email,
      dt_atualizacao,
      tb_pessoa_fisica!left (
        co_pessoa_fisica,
        co_cpf,
        em_comunidade,
        rl_organizacao_cargo (
          dt_atualizacao,
          tb_organizacao (
            co_comunidade_tag,
            tp_organizacao_tipo (
              co_comunidade_perfil,
              co_comunidade_tag
            )
          )
        )
      )
    `)
    .gt('tb_comunidade_usuario.dt_atualizacao')
    ;

console.log(data);

if (error) throw error;

  // 2. Filtro e Transformação
//   const result = users
//     .filter(user => {
//       // Resolvemos qual o co_pessoa_fisica efetivo
//       const co_pessoa_efetivo = user.co_pessoa_fisica || user.tb_pessoa_fisica?.co_pessoa_fisica;
      
//       if (!co_pessoa_efetivo) return false;

//       // Verificamos se há atualização pendente (no user ou em qualquer cargo da pessoa física vinculada)
//       const dataUser = new Date(user.dt_atualizacao);
//       const temCargoNovo = user.tb_pessoa_fisica?.rl_organizacao_cargo?.some(
//         (cargo: any) => new Date(cargo.dt_atualizacao) > dataUser
//       );

//       return temCargoNovo || (user.dt_atualizacao_origem && new Date(user.dt_atualizacao_origem) > dataUser);
//     })
//     .map(user => {
//       const tagsSet = new Set<string>();
//       const profilesSet = new Set<string>();
      
//       // Coletamos os cargos da tb_pessoa_fisica resolvida
//       const cargos = user.tb_pessoa_fisica?.rl_organizacao_cargo || [];

//       cargos.forEach((cargo: any) => {
//         const org = cargo.tb_organizacao;
//         const orgTipo = org?.tp_organizacao_tipo;

//         if (org?.co_comunidade_tag) tagsSet.add(org.co_comunidade_tag.toString());
//         if (orgTipo?.co_comunidade_tag) tagsSet.add(orgTipo.co_comunidade_tag.toString());
//         if (orgTipo?.co_comunidade_perfil) profilesSet.add(orgTipo.co_comunidade_perfil.toString());
//       });

//       return {
//         user_id: user.user_id,
//         co_pessoa_fisica: user.co_pessoa_fisica || user.tb_pessoa_fisica?.co_pessoa_fisica,
//         list_perfis: Array.from(profilesSet).join(','),
//         list_member_tags: Array.from(tagsSet).join(',')
//       };
//     });

  return data;
}