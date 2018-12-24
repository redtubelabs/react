import axios from 'axios'

export const HTTPClient = axios.create({
  baseURL: 'https://api-redtube-proxy.mybluemix.net/'
})