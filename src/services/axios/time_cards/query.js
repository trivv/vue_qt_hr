import { getHttp } from '../base';

export async function getTimeCardsQuery(){
  const response = await getHttp(`api/v1/time_cards`);
  return response.data;
}
