import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Lock, ArrowLeft } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.username || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-600 py-8">
      <div className="bg-gray-600 text-orange-400 py-4 mb-8">
        <h1 className="text-4xl font-bold text-center">New User Registration</h1>
      </div>

      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-orange-400 hover:text-orange-300 flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                <User className="w-5 h-5" />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                <Mail className="w-5 h-5" />
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                <Phone className="w-5 h-5" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                <Calendar className="w-5 h-5" />
                Age
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                min="1"
                max="120"
              />
            </div>

            <div>
              <label className="text-lg font-bold mb-2 block">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="w-4 h-4"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="w-4 h-4"
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                <User className="w-5 h-5" />
                Username *
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-bold mb-2">
                <Lock className="w-5 h-5" />
                Password *
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                required
                minLength={6}
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-lg font-bold mb-2">
              <Lock className="w-5 h-5" />
              Confirm Password *
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-orange-400 py-4 rounded-lg text-xl font-bold hover:bg-gray-700 transition-colors border-2 border-gray-700"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className="text-orange-500 hover:text-orange-600 font-bold"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;