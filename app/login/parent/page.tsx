'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { loginUser, LoginPayload } from '@/lib/api/auth'
import { useState } from 'react'

export default function ParentLoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data: LoginPayload) => {
    setLoading(true)
    try {
      await loginUser(data)
      router.push('/dashboard/parent')
    } catch (err: any) {
      setError(err.message || 'Login failed. Try again.')
    }
    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-md bg-gradient-to-br from-sky-100 via-pink-50 to-indigo-100 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-6">
          <span className="text-5xl mb-2">👨‍👩‍👧</span>
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1">Parent Login</h2>
          <p className="text-blue-900 text-sm text-center">
            Welcome! Log in to track your child’s progress and manage your account.
          </p>
        </div>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register('email', { required: true })}
              placeholder="Email"
              type="email"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
            />
            {errors.email && <span className="text-xs text-red-500">Email is required</span>}
          </div>
          <div>
            <input
              {...register('password', { required: true })}
              placeholder="Password"
              type="password"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="current-password"
            />
            {errors.password && <span className="text-xs text-red-500">Password is required</span>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-pink-400 to-blue-600 hover:from-pink-500 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-blue-700">
          New here? <a href="/signup/parent" className="underline hover:text-pink-600">Create a parent account</a>
        </div>
      </div>
    </div>
  )
}