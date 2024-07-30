// src/Welcome.tsx
import React from 'react';
import ThreeDBackground from './ThreeDBackground';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-page">
      <ThreeDBackground />
      <div className="welcome-container">
        <h2>Welcome!</h2>
      </div>
    </div>
  );
};

export default Welcome;

