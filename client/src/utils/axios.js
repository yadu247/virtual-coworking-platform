import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8888' });

export default axiosInstance;
