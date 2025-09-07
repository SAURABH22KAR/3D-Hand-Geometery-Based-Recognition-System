import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bg-gray-600 text-orange-400 py-4">
        <h1 className="text-4xl font-bold text-center">LOG IN</h1>
      </div>

      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-orange-400 hover:text-orange-300 flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-gray-600" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-3 text-xl font-bold mb-2">
              <User className="w-6 h-6" />
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-orange-400 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 text-xl font-bold mb-2">
              <Lock className="w-6 h-6" />
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-orange-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-orange-400 py-3 rounded-lg text-xl font-bold hover:bg-gray-700 transition-colors border-2 border-gray-700"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="text-orange-500 hover:text-orange-600 font-bold"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;