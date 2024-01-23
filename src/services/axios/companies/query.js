import { getHttp } from '../base';

export async function getCompaniesQuery(currentPage, perPage){
  const response = await getHttp(`api/v1/admin/companies?page=${currentPage}&per=${perPage}`);
  return response.data;
}

export async function getCompanyQuery(id){
  const response = await getHttp(`api/v1/admin/companies/${id}`)
  return response.data;
}
