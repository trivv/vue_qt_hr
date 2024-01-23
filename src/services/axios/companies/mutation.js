import { deleteHttp, postHttp, patchHttp } from '../base';

export async function deleteCompanyMutation(id){
  const response = await deleteHttp(`api/v1/admin/companies/${id}`)
  return response.data;
}

export async function createCompanyMutation(body){
  const response = await postHttp(`api/v1/admin/companies`, body)
  return response.data;
}

export async function updateCompanyMutation(id, body){
  const response = await patchHttp(`api/v1/admin/companies/${id}`, body)
  return response.data;
}
