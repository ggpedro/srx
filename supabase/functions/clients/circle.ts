import {CircleClientInterface, PaginatedResponse} from '../interfaces/circleInterface.ts'

export class CircleClient implements CircleClientInterface {
  private path = new URL(import.meta.url).pathname;
  private circleUrl = 'https://app.circle.so/api/admin'

  // Header padrão das chamadas
  private defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Deno.env.get('COMUNIDADE_KEY')}`,
    'Accept': 'application/json',
  }

  async fetchUsuarios (page:number) : Promise<PaginatedResponse> {
    const endpoint = `/v2/community_members?page=${page}&per_page=1000`;
    
    const requestOptions : RequestInit = {
      method: "GET",
      headers: this.defaultHeaders,
      redirect: "follow"
    };
    
    
    console.log(`${this.path}: 🔄 Iniciando a requisição para ${endpoint}`)
    const response = await fetch(
      `${this.circleUrl}${endpoint}`
      , requestOptions
    );
    
    if (response.ok){
      console.log(`${this.path}: ✅ Sucesso na requisição`)
    }
    
    if (!response.ok) {
      console.log(`${this.path}: ❌ Erro na requisição`)
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const members : PaginatedResponse = await response.json();
    // console.log(members);
    return members;
  }
  
  async atualizarUsuario(
    user_id: number
    , user_tags : number[]
  ){
    const endpoint = `/v2/community_members/${user_id}`;

    const bodyReq = {
      'member_tag_ids': user_tags
    }
    
    const requestOptions : RequestInit = {
      method: "PUT",
      headers: this.defaultHeaders,
      body: JSON.stringify(bodyReq),
      redirect: "follow"
    };
    
    
    console.log(`${this.path}: 🔄 Iniciando a requisição para ${this.circleUrl}${endpoint} \n${JSON.stringify(requestOptions)}`)
    const response = await fetch(
      `${this.circleUrl}${endpoint}`
      , requestOptions
    );

    const responseText = await response.text();
  
    if (response.ok){
      console.log(`${this.path}: ✅ Sucesso na requisição\n${responseText.substring(0,200)}`)
    }
    
    if (!response.ok) {
      console.log(`${this.path}: ❌ Erro na requisição\n${responseText.substring(0,200)}`)
      throw new Error(`${response.status}`);
  }

  return response;
  
  }

  async atribuirPerfil (
    user_group: number
    , email : string
  ){
    const endpoint = `/v2/access_groups/${user_group}/community_members`;

    const bodyReq = {
      'email': email
    }
    
    const requestOptions : RequestInit = {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(bodyReq),
      redirect: "follow"
    };
    
    
    console.log(`${this.path}: 🔄 Iniciando a requisição para ${this.circleUrl}${endpoint} \n${JSON.stringify(requestOptions)}`)
    const response = await fetch(
      `${this.circleUrl}${endpoint}`
      , requestOptions
    );
  
    const responseText = await response.text();

    if (response.ok){
      console.log(`${this.path}: ✅ Sucesso na requisição\n${responseText.substring(0,200)}`)
    }
    
    if (!response.ok) {
      console.log(`${this.path}: ❌ Erro na requisição\n${responseText.substring(0,200)}`);
      throw new Error(`${response.status}`);
    }

    return response;
  }

}