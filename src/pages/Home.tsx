import React from 'react'
import { Link } from 'react-router-dom'
import { Hand, Shield, Zap, Users } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-90 text-orange-400 py-4 shadow-2xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center font-times">
            3D Hand Geometry Using Machine Learning
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-6 shadow-2xl">
              <Hand className="w-16 h-16 text-secondary" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 font-times">
            Welcome to 3D Hand Geometry System
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
            Advanced biometric authentication using cutting-edge machine learning and computer vision technology. 
            Secure, fast, and reliable hand geometry recognition for the modern world.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to="/login" className="btn-primary">
            Login to System
          </Link>
          <Link to="/register" className="btn-secondary">
            Create New Account
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure Authentication</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced biometric security using unique hand geometry patterns that cannot be replicated or stolen.
            </p>
          </div>

          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Real-time Processing</h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast recognition powered by MediaPipe and machine learning algorithms for instant authentication.
            </p>
          </div>

          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Multi-user Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Support for multiple users with individual profiles and personalized hand geometry templates.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 card max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Powered by Advanced Technology</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">Machine Learning</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Random Forest Classification</li>
                <li>• Real-time Hand Landmark Detection</li>
                <li>• Advanced Feature Extraction</li>
                <li>• Continuous Learning Algorithms</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">Computer Vision</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• MediaPipe Hand Tracking</li>
                <li>• 3D Coordinate Analysis</li>
                <li>• Real-time Video Processing</li>
                <li>• Gesture Recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 3D Hand Geometry Recognition System. Advanced Biometric Security Solutions.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home