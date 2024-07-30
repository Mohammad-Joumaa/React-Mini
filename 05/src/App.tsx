import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        <h1>Welcome to MySite</h1>
        <p>This is a page with a glass effect sidebar.</p>
      </main>
    </div>
  );
};

export default App;
