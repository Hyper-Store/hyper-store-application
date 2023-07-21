import Axios from 'axios';
import 'dotenv/config';

export const axios = Axios.create({
    baseURL: 'http://207.32.218.146:5000',
    validateStatus: (status) => true,
    withCredentials: true
})