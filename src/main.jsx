import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import index.css first for Tailwind directives
import './index.css';
// Import App.css for custom overrides
import './App.css';
import { Analytics } from "@vercel/analytics/react"

// For accessibility and better user experience
const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab);

// Render the React application
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}