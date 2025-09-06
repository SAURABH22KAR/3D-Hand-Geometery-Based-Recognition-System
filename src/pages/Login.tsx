import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock, LogIn } from 'lucide-react'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      if (formData.username && formData.password) {
        localStorage.setItem('user', JSON.stringify({ username: formData.username }))
        navigate('/dashboard')
      } else {
        alert('Please enter valid credentials')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gray-800 bg-opacity-90 text-orange-400 py-4">
        <h1 className="text-3xl font-bold text-center font-times">
          User Authentication
        </h1>
      </div>

      <div className="card max-w-md w-full mt-20">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary rounded-full p-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              <User className="inline w-5 h-5 mr-2" />
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              <Lock className="inline w-5 h-5 mr-2" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-secondary font-bold hover:underline">
              Create Account
            </Link>
          </p>
          <Link to="/" className="text-gray-500 hover:text-gray-700 mt-4 inline-block">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login