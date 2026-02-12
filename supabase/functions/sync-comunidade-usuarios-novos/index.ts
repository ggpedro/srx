import "@supabase/functions-js/edge-runtime.d.ts"
import { MockMembers } from "../mocks/circle.mock.ts";
import { job } from "./job.ts"


Deno.serve(async (req) => {
  try {
    const signature = req.headers.get("x-cron-secret");
    const expected = Deno.env.get("CRON_SECRET");

    if (signature !== expected) {
      return new Response("Unauthorized", { status: 401 });
    }  
    
    const headers : Headers = req.headers;
    const headerJobTipo = headers.get('jobTipo');
    const headerJobTeste = headers.get('jobTeste');
  
    const jobTipo : number = headerJobTipo ? parseInt(headerJobTipo) || 0 : 0;
    const usarMock : boolean = headerJobTeste === 'true';


  if (jobTipo < 1 && jobTipo > 2) {
    throw new Error('Job inválido. Informe opção: 1/2');
  }
  
  const resultado = usarMock ? await job(jobTipo, MockMembers) : await job(jobTipo);
    

  return new Response(
    JSON.stringify({ resultado }),
    { status: 200 }
  );

} catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ error: "Job failed" }),
      { status: 500 }
    );
  }
});
