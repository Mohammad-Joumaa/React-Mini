// src/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDBackground from './ThreeDBackground';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      alert('Successful login');
      navigate('/welcome');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="login-page">
      <ThreeDBackground />
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
