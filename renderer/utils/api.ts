import Axios from 'axios';
import 'dotenv/config';

export const axios = Axios.create({
    baseURL: 'http://localhost:5000',
    validateStatus: (status) => true
})