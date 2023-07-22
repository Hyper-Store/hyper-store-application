import Axios from 'axios';
import 'dotenv/config';

export const axios = Axios.create({
    baseURL: 'https://api.leinadhosting.app',
    validateStatus: (status) => true,
    withCredentials: true
})