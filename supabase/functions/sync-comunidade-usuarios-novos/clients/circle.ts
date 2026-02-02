// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2'

Deno.serve(async (_req) => {
  console.log(`URL: ${Deno.env.get('SUPABASE_URL')}`);
    /*
      Etapas
        1. Faz a requisição ao circle
        2. Obtém quais usuários não estão no banco
        3. Salva novos usuários no banco
        4. Busca perfil para usuários que ainda não tenham (não somente os que sejam novos!)
        5. Chama API do circle para salvar
        6. Recebe a resposta e atualiza nos dados
    */

  const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${Deno.env.get('COMUNIDADE_KEY')}`);

  const requestOptions : RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const response = await fetch(
      "https://app.circle.so/api/admin/v2/community_members?page=1&per_page=1000"
      , requestOptions
      );
 
  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  const members = await response.json();

  // ✅ resposta atribuída a uma constante
  console.log(members);
  
  return members;

});


// Deno.serve(async () => {
//   console.log('RODOU ÀS ' + String(Date()));
  
//   // try {
//   //   const supabase = createClient(
//   //     Deno.env.get('SUPABASE_URL')!,
//   //     Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
//   //   )

//   //   // TODO: Change the table_name to your table
//   //   const { data, error } = await supabase.schema('geral').from('tp_organizacao').select('*')

//   //   if (error) {
//   //     console.log('Ocorreu erro: ' + JSON.stringify(error));
//   //     throw error
//   //   }

//   //   return new Response(JSON.stringify({ data }), {
//   //     headers: { 'Content-Type': 'application/json' },
//   //     status: 200,
//   //   })
//   // } catch (err) {
//   //   return new Response(JSON.stringify({ message: err?.message ?? err }), {
//   //     headers: { 'Content-Type': 'application/json' },
//   //     status: 500 
//   //   })
//   // }
// })