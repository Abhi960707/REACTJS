import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api'
import { saveAuthSession } from '../utils/auth'
import AuthLayout from './AuthLayout'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // State for forgot password functionality
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetSecretKeyword, setResetSecretKeyword] = useState('')
  const [isVerified, setIsVerified] = useState(false) // New state to toggle between verification and reset
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Email and password are required')
      setTimeout(() => setError(''), 3000)
      return
    }

    try {
      setLoading(true)
      const res = await API.post('/auth/login', {
        email: email.trim(),
        password,
      })

      saveAuthSession(res.data)
      navigate('/todolist')
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to login')
      setTimeout(() => setError(''), 3000)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPasswordRequest = async (e) => {
    e.preventDefault()
    setError('')
    if (!resetEmail.trim() || !resetSecretKeyword.trim()) {
      setError('Email and secret keyword are required.')
      setTimeout(() => setError(''), 3000)
      return
    }

    try {
      setLoading(true)
      await API.post('/auth/request-password-reset', {
        email: resetEmail.trim(),
        secretKeyword: resetSecretKeyword.trim(),
      })
      
      setIsVerified(true)
      setError('')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or secret keyword.')
      setTimeout(() => setError(''), 3000)
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    setError('')

    if (!newPassword.trim() || !confirmNewPassword.trim()) {
      setError('New password and confirm password are required.')
      setTimeout(() => setError(''), 3000)
      return
    }
    if (newPassword.trim().length < 4) {
      setError('New password must be at least 4 characters.')
      setTimeout(() => setError(''), 3000)
      return
    }
    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm password do not match.')
      setTimeout(() => setError(''), 3000)
      return
    }
    try {
      setLoading(true)
      await API.post('/auth/reset-password', {
        email: resetEmail.trim(),
        secretKeyword: resetSecretKeyword.trim(),
        newPassword
      })
      alert('Reset Password Successfully !')
      setShowForgotPasswordModal(false)
      setIsVerified(false)
      setResetEmail('')
      setResetSecretKeyword('')
      setNewPassword('')
      setConfirmNewPassword('')
      navigate('/login') // Redirect to login page
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password.')
      setTimeout(() => setError(''), 3000)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true)
    setIsVerified(false)
    setResetEmail('')
    setResetSecretKeyword('')
    setNewPassword('')
    setConfirmNewPassword('')
    setError('')
  }

  return (
    <AuthLayout
      eyebrow="Login"
      title="Welcome back"
      description="Sign in from one centered professional layout and continue to your dashboard, team directory, and task workflow without layout breaks."
      footer={
        <p className="mt-6 text-center text-sm text-slate-500">
          Need an account?{' '}
          <Link to="/signup" className="font-semibold text-slate-900 hover:underline">
            Create one here
          </Link>
        </p>
      }
    >
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-400">Login</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Sign in to your account</h2>
        <p className="mt-2 text-sm text-slate-500">Use your email and password to open the dashboard.</p>
      </div>

      {error && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <form className="mt-6 space-y-5" onSubmit={submit} autoComplete="off">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={handleForgotPasswordClick}
            className="text-sm font-semibold text-slate-900 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </form>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div
            className="w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_32px_80px_rgba(15,23,42,0.22)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mt-2 text-center text-lg font-semibold text-slate-900">
              {isVerified ? 'Reset Password' : 'Forgot Password'}
            </h3>
            <p className="mt-2 text-center text-sm text-slate-500">
              {isVerified
                ? 'Enter your new password.'
                : 'Enter your email and security keyword.'}
            </p>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {isVerified ? (
              <form onSubmit={handlePasswordReset} className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">New Password</label>
                  <input
                    type="password"
                    placeholder="Min 4 characters"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" disabled={loading} className="w-full rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleForgotPasswordRequest} className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Security Keyword</label>
                  <input
                    type="text"
                    placeholder="Enter your secret name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                    value={resetSecretKeyword}
                    onChange={(e) => setResetSecretKeyword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" disabled={loading} className="w-full rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setShowForgotPasswordModal(false)}
                className="text-sm font-semibold text-slate-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </AuthLayout>
  )
}

export default Login
