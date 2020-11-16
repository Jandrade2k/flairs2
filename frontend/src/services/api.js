import axios from 'axios';

const api = axios.create({
    baseURL: 'htt-p://localhost:3333',
})

export default api;