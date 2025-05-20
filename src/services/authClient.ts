import  axiosInstance  from "./axiosInstance"

import type {AuthResponse, AdminLoginPayload, AdminRegisterPayload} from '@/types/index'


export const registerAdmin = async(payload:AdminRegisterPayload): Promise<AuthResponse> => {
    const {data} = await axiosInstance.post<AuthResponse>('/admin/register', payload);
    return data;
}

export const loginAdmin = async(payload:AdminLoginPayload) => {
    const {data} = await axiosInstance.post<AuthResponse>('/admin/login', payload)
    return data;
}