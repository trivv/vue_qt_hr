import { getHttp } from '../base';

export async function getTimeCardsQuery(office_id){
  const response = await getHttp(`api/v1/offices/${office_id}/time_cards`);
  return response.data;
}
