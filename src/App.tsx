import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HandCapture from './pages/HandCapture';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-600">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/capture" element={<HandCapture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;