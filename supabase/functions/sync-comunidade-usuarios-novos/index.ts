import "@supabase/functions-js/edge-runtime.d.ts"
import { MockMembers } from "../../mocks/circle.mock.ts";
import { job } from "./job.ts"


Deno.serve(async () => {
  try {
    const resultado = await job(MockMembers);

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
