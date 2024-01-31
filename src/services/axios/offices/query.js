import { getHttp } from '../base';

export async function getOfficesQuery(){
  const response = await getHttp(`api/v1/offices`);
  return response.data;
}

export async function getTopInOfficesQuery(office_id){
  const response = await getHttp(`api/v1/offices/${office_id}/top`);
  return response.data;
}
