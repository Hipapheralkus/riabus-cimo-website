import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// For accessibility and better user experience, let's add focus outlines for keyboard users only
const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab);

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);