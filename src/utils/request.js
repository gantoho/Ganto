import axios from 'axios'

const http = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://java.cevno.cn',
  timeout: 5000
})

export const getServerImgHttp = axios.create({
  baseURL: "https://yun.cevno.cn",
  timeout: 5000
})

export default http;
