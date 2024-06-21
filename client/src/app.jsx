import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './views/Login/LoginPage';
import RegisterPage from './views/Register/RegisterPage';
import ForgotPassword from './views/Password/ForgotPassword';
import ResetPassword from './views/Password/ResetPassword';
import HomePage from './views/Home/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/home" element={<HomePage />} />

    </Routes>
  );
}

export default App;
