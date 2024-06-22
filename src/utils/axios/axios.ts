import axios, { AxiosInstance } from 'axios'

const BASE_API_URL = '';
const BASE_URL = '';

const axiosConfig: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers : {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})


export default  axiosConfig;
