// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to MyWEB</h1>
        <p>This is a basic responsive navbar with a hamburger menu.</p>
      </main>
    </div>
  );
};

export default App;
