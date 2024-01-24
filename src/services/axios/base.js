import axios from 'axios';


export async function getHttp(uri){
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

  return await axios.get(`${process.env.VUE_APP_BASE_URL}/${uri}`)
}

export async function postHttp(uri, body){
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

  return await axios.post(`${process.env.VUE_APP_BASE_URL}/${uri}`, body)
}

export async function patchHttp(uri, body){
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

  return await axios.patch(`${process.env.VUE_APP_BASE_URL}/${uri}`, body)
}

export async function deleteHttp(uri){
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

  return await axios.delete(`${process.env.VUE_APP_BASE_URL}/${uri}`)
}
