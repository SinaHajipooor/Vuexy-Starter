import axios from 'axios';
import { getSession } from 'next-auth/react';

export const BASE_URL = 'http://192.168.2.102';
// const BASE_API_URL = 'http://192.168.2.102/api'
const BASE_API_URL = 'http://45.149.77.156:81/api'

const axiosConfig = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});


let authToken = '';

export const setAuthToken = (token: string) => {
    authToken = token;
};

axiosConfig.interceptors.request.use(async (config) => {
    const session: any = await getSession();
    const clientToken = session?.myToken;

    if (authToken || clientToken) {

        config.headers!['Authorization'] = `Bearer ${clientToken ?? authToken}`;
    }


    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosConfig;
