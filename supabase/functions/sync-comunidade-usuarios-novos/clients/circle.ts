import {PaginatedResponse} from '../../../interfaces/circle.ts'

export class CircleClient  {
  
  static async fetchMembers () :Promise<PaginatedResponse> {
    const path = new URL(import.meta.url).pathname;       // Path para debug

    const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", `Bearer ${Deno.env.get('COMUNIDADE_KEY')}`);
    
    const requestOptions : RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    console.log(`${path}: 🔄 Iniciando a requisição ...`)
    const response = await fetch(
      "https://app.circle.so/api/admin/v2/community_members?page=1&per_page=1000"
      , requestOptions
    );

    if (response.ok){
      console.log(`${path}: ✅ Sucesso na requisição`)
    }
    
    if (!response.ok) {
      console.log(`${path}: ❌ Erro na requisição`)
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const members : PaginatedResponse = await response.json();
    // console.log(members);
    return members;
  }

}
