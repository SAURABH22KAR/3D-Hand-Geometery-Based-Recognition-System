import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Hand, Settings, LogOut, Activity, Shield } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-600">
      {/* Header */}
      <div className="bg-gray-600 text-orange-400 py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <div className="p-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome, User!</h2>
              <p className="text-gray-600">Manage your biometric profile and system settings</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Security Status</h3>
                <p className="text-green-600 font-semibold">Active</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Hand className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Hand Profiles</h3>
                <p className="text-blue-600 font-semibold">2 Registered</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Last Access</h3>
                <p className="text-purple-600 font-semibold">Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Hand className="w-16 h-16 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Hand Geometry Capture</h3>
            <p className="text-gray-600 mb-6">
              Capture and register your hand geometry for biometric authentication.
            </p>
            <button
              onClick={() => navigate('/capture')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Start Capture
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Settings className="w-16 h-16 text-gray-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Profile Settings</h3>
            <p className="text-gray-600 mb-6">
              Manage your account settings and security preferences.
            </p>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors">
              Manage Profile
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Hand geometry profile updated</span>
              <span className="text-gray-500 text-sm ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Successful authentication</span>
              <span className="text-gray-500 text-sm ml-auto">1 day ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Profile settings modified</span>
              <span className="text-gray-500 text-sm ml-auto">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;