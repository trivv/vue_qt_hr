import { postHttp } from '../base';

export async function loginMutation(body){
  const response = await postHttp(`api/v1/admin/sign_in`, body)
  return response;
}

