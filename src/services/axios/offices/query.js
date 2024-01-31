import { getHttp } from '../base';

export async function getOfficesQuery(){
  const response = await getHttp(`api/v1/offices`);
  return response.data;
}
