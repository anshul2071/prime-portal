import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../store/authStore';

import { loginAdmin, registerAdmin } from "@/services/authClient";

import type {
    AdminLoginPayload,
    AdminRegisterPayload,
} from '../types'


export interface UseAuth {
    token: string | null;
    isAuthenticated: boolean;
    login: (data:AdminLoginPayload) => Promise<void>;
    register: (data: AdminRegisterPayload) => Promise<void>;
    logout: () => void;
}


const useAuth = () : UseAuth => {
    const token = useAuthStore((state)=> state.token);
    const setToken = useAuthStore((state) => state.setToken);
    const clearToken =  useAuthStore((state)=> state.clearToken);
    const navigate = useNavigate();



    const login = useCallback(
        async(payload: AdminLoginPayload) => {
            const {token} = await loginAdmin(payload);
            setToken(token);
            navigate('/admin');
        },
        [setToken, navigate]
    
    );


    const register = useCallback(
        async(payload: AdminRegisterPayload) => {
            const {token} =await registerAdmin(payload);
            setToken(token)
            navigate('/login');


        },  [setToken, navigate]

    );

    const logout = useCallback(() => {
        clearToken();
        navigate('/login');

    }, 
   [clearToken, navigate]
)

return {
    token,
    isAuthenticated: Boolean(token),
    login,
    register,
    logout,

};


}

export default useAuth;