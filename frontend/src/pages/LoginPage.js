import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1>Welcome to Intern Portal</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
