'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { parentSignup, ParentSignupPayload } from '@/lib/api/auth'
import { useState } from 'react'

export default function ParentSignupPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ParentSignupPayload>()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data: ParentSignupPayload) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)
    try {
        await parentSignup(data)
        router.push('/dashboard/parent')
      } catch (err: any) {
        setError(err.message || 'Signup failed. Try again.')
      } finally {
        setLoading(false)
      }
    }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-md bg-gradient-to-br from-sky-100 via-pink-50 to-indigo-100 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-6">
          <span className="text-5xl mb-2">📝</span>
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1">Create Parent Account</h2>
          <p className="text-blue-900 text-sm text-center">
            Sign up to track your child’s progress and manage your family account.
          </p>
        </div>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register('fullName', { required: true })}
              placeholder="Full Name"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.fullName && <span className="text-xs text-red-500">Full name is required</span>}
          </div>
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
              {...register('phoneNumber', { required: true })}
              placeholder="Phone Number"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phoneNumber && <span className="text-xs text-red-500">Phone number is required</span>}
          </div>
          <div>
            <input
              {...register('password', { required: true })}
              placeholder="Password"
              type="password"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            {errors.password && <span className="text-xs text-red-500">Password is required</span>}
          </div>
          <div>
            <input
              {...register('confirmPassword', { required: true })}
              placeholder="Confirm Password"
              type="password"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            {errors.confirmPassword && <span className="text-xs text-red-500">Please confirm your password</span>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-pink-400 to-blue-600 hover:from-pink-500 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-blue-700">
          Already have an account?{' '}
          <a href="/login/parent" className="underline hover:text-pink-600">Log in</a>
        </div>
      </div>
    </div>
  )
}