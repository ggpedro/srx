// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "@supabase/functions-js/edge-runtime.d.ts"


console.log(`key: ${Deno.env.get('COMUNIDADE_KEY')}`);

Deno.serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `COMUNIDADE_KEY: ${Deno.env.get('COMUNIDADE_KEY')}!`,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/sync-comunidade-usuarios-novos' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/


// import { atualizar_novos_usuarios } from "./job.ts";

// Deno.serve(async () => {
//   try {
//     const result = await atualizar_novos_usuarios();

//     return new Response(
//       JSON.stringify({
//         status: "success",
//         ...result,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         status: "error",
//         message: (error as Error).message,
//       }),
//       { status: 500 }
//     );
//   }
// });
