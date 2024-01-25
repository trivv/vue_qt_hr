import { postHttp } from '../base';

export async function adminLoginMutation(body){
  const response = await postHttp(`api/v1/admin/sign_in`, body)
  return response;
}

export async function userLoginMutation(body){
  const response = await postHttp(`api/v1/sign_in`, body)
  return response;
}
