import { postHttp } from '../base';

export async function checkInMutation(office_id, body){
  const response = await postHttp(`api/v1/offices/${office_id}/time_cards/check_in`, body)
  return response;
}

export async function checkOutMutation(office_id, body){
  const response = await postHttp(`api/v1/offices/${office_id}/time_cards/check_out`, body)
  return response;
}
export async function breakInMutation(office_id, body){
  const response = await postHttp(`api/v1/offices/${office_id}/time_cards/break_in`, body)
  return response;
}

export async function breakOutMutation(office_id, body){
  const response = await postHttp(`api/v1/offices/${office_id}/time_cards/break_out`, body)
  return response;
}
