import axios from 'axios';
import {getAuthToken} from '../store/authStore';

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        
    }
    
});


axiosInstance.interceptors.request.use(config => {
    const token = getAuthToken();
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},

(error) => Promise.reject(error)
 );

 export default axiosInstance;