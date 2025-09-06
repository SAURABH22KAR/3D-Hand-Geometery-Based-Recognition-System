import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Camera, LogOut, Activity, Shield, Clock } from 'lucide-react'

const Dashboard = () => {
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      navigate('/login')
    } else {
      setUser(JSON.parse(userData))
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  if (!user) return null

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-90 text-orange-400 py-4 shadow-2xl">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold font-times">
            Hand Geometry Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="card mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-secondary rounded-full p-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome, {user.username}!
              </h2>
              <p className="text-gray-600">Manage your biometric authentication settings</p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <Link to="/capture" className="card hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Camera className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Capture Hand Geometry</h3>
              <p className="text-gray-600 mb-4">
                Register or update your hand geometry template for secure authentication
              </p>
              <div className="btn-primary inline-block">
                Start Capture
              </div>
            </div>
          </Link>

          <div className="card">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">System Status</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Authentication:</span>
                  <span className="text-green-600 font-bold">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hand Template:</span>
                  <span className="text-green-600 font-bold">Registered</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Level:</span>
                  <span className="text-green-600 font-bold">High</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Security Settings</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Update Profile
                </button>
                <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  View Logs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-bold text-gray-800">Successful Authentication</p>
                <p className="text-gray-600 text-sm">Hand geometry verified successfully</p>
              </div>
              <span className="text-green-600 font-bold">Just now</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-bold text-gray-800">Profile Login</p>
                <p className="text-gray-600 text-sm">User logged into the system</p>
              </div>
              <span className="text-blue-600 font-bold">2 minutes ago</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-bold text-gray-800">Hand Template Updated</p>
                <p className="text-gray-600 text-sm">Biometric template refreshed</p>
              </div>
              <span className="text-orange-600 font-bold">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard