import axiosInstance from "./axiosInstance"
import type { AuthResponse, AdminLoginPayload, AdminRegisterPayload } from "@/types/index"

export interface VerifyResponse {
  message: string
}

export interface RegisterResponse {
  message: string
  token?: string
}

export const registerAdmin = async (payload: AdminRegisterPayload): Promise<RegisterResponse> => {
  const { data } = await axiosInstance.post<RegisterResponse>("/admin/register", payload)
  return data
}

export const verifyAdminEmail = (token: string) =>
  axiosInstance.get<VerifyResponse>("/admin/verify", { params: { token } }).then((res) => res.data)

export const verfiyAdminOtp = (token: string, otp: string) =>
  axiosInstance.post<VerifyResponse>("/admin/verify-otp", { token, otp })

export const loginAdmin = async (payload: AdminLoginPayload): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post<AuthResponse>("/admin/login", payload)
  return data
}

export const forgotAdminPass = (email: string) =>
  axiosInstance.post<VerifyResponse>("/admin/forgot-password", { email }).then((res) => res.data)

export const resetAdminPass = (token: string, newPassword: string) =>
  axiosInstance.post<VerifyResponse>("/admin/reset-password", { token, newPassword })
