import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hand, Shield, Users, Zap } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-600">
      {/* Header */}
      <div className="bg-gray-600 text-orange-400 py-4 px-4">
        <h1 className="text-4xl font-bold text-center">
          3D Hand Geometry Using Machine Learning
        </h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-start gap-4 p-6">
        <button
          onClick={() => navigate('/login')}
          className="btn-secondary"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="btn-accent"
        >
          Register
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <Hand className="w-24 h-24 mx-auto mb-6 text-orange-400" />
          <h2 className="text-5xl font-bold mb-4">Advanced Biometric Security</h2>
          <p className="text-xl mb-8">Secure authentication using 3D hand geometry recognition</p>
          <button
            onClick={() => navigate('/capture')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
          >
            Start Hand Recognition
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center text-orange-400 mb-12">
          System Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h4 className="text-xl font-bold mb-4">Secure Authentication</h4>
            <p className="text-gray-600">
              Advanced biometric security using unique hand geometry patterns for reliable user identification.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Zap className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-4">Real-time Processing</h4>
            <p className="text-gray-600">
              Fast and accurate hand geometry analysis using machine learning algorithms.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h4 className="text-xl font-bold mb-4">User Management</h4>
            <p className="text-gray-600">
              Complete user registration and management system with secure data storage.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-600 text-primary py-6">
        <p className="text-center text-xl font-bold">
          ......Welcome to 3D Hand Geometry System ......
        </p>
      </div>
    </div>
  );
};

export default Home;