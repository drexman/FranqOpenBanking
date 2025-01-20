import axios from 'axios';
import { BASE_URL } from '../config/api'
const Api = axios.create({
    baseURL: BASE_URL,
})

export default Api;