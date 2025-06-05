import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'
import { useAuthStore } from '../store/authStore'
import { loginAdmin, registerAdmin } from '@/services/authClient'
import type { AdminLoginPayload, AdminRegisterPayload } from '../types'

export interface UseAuth {
  token: string | null
  isAuthenticated: boolean
  login: (data: AdminLoginPayload) => Promise<void>
  register: (data: AdminRegisterPayload) => Promise<void>
  logout: () => void
}

const useAuth = (): UseAuth => {
  const token = useAuthStore((s) => s.token)
  const setToken = useAuthStore((s) => s.setToken)
  const clearToken = useAuthStore((s) => s.clearToken)
  const navigate = useNavigate()

  const mapError = (err: unknown): string => {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status
      if (status === 400) return err.response?.data?.message ?? 'Invalid request.'
      if (status === 401) return 'Invalid credentials. Please try again.'
      if (status === 403) return err.response?.data?.message ?? 'Access forbidden.'
      if (status === 500) return 'Server error—please try again later.'
      return err.message
    }
    return 'An unexpected error occurred.'
  }

  const login = useCallback(
    async (payload: AdminLoginPayload) => {
      try {
        const { token } = await loginAdmin(payload)
        setToken(token)
        navigate('/admin')
      } catch (err) {
        throw new Error(mapError(err))
      }
    },
    [setToken, navigate]
  )

  const register = useCallback(
    async (payload: AdminRegisterPayload) => {
      try {
        await registerAdmin(payload)
        navigate('/login')
      } catch (err) {
        throw new Error(mapError(err))
      }
    },
    [navigate]
  )

  const logout = useCallback(() => {
    clearToken()
    navigate('/login')
  }, [clearToken, navigate])

  return {
    token,
    isAuthenticated: !!token,
    login,
    register,
    logout,
  }
}

export default useAuth
