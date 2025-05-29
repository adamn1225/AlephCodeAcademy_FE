// lib/api/auth.ts
import { apiPost } from './apiClient'
import { setToken } from '@/lib/utils/token'

export type ParentSignupPayload = {
  fullName: string
  email: string
  phoneNumber: string
  password: string
  description?: string
  profilePicture?: string 
  confirmPassword?: string;
};


export async function parentSignup(data: ParentSignupPayload) {
    return apiPost('/api/parent/signup', data)
  }

export type LoginPayload = {
  email: string
  password: string
}

export async function loginUser(data: LoginPayload) {
    const response = await apiPost<{ token: string } | any>('/api/login', data)
    if (response.token) {
      setToken(response.token)
    }
    return response
  }