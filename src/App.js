import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('skills')}>Skills</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>
      {renderContent()}
    </div>
  );
}

export default App;