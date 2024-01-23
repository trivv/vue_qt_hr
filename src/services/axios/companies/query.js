import { getHttp } from '../base';

export async function getCompaniesQuery(){
  const response = await getHttp('api/v1/admin/companies');
  return response.data;
}

export async function getCompanyQuery(id){
  const response = await getHttp(`api/v1/admin/companies/${id}`)
  return response.data;
}
