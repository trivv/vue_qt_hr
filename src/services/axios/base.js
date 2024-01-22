import axios from 'axios';

export async function getHttp(uri){
  return await axios.get(`${process.env.VUE_APP_BASE_URL}/${uri}`)
}

export async function postHttp(uri, body){
  return await axios.post(`${process.env.VUE_APP_BASE_URL}/${uri}`, body)
}

export async function patchHttp(uri, body){
  return await axios.patch(`${process.env.VUE_APP_BASE_URL}/${uri}`, body)
}

export async function deleteHttp(uri){
  return await axios.delete(`${process.env.VUE_APP_BASE_URL}/${uri}`)
}
