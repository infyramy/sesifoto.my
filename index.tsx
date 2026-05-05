import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Dismiss the branded loading screen after React hydrates
const dismissLoader = () => {
  const loader = document.getElementById('sf-loader');
  if (!loader) return;

  // Complete the progress bar instantly
  const fill = document.getElementById('sf-loader-bar-fill');
  if (fill) {
    fill.style.transition = 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
    fill.style.width = '100%';
  }

  // Fade out after a brief moment to let the bar complete
  setTimeout(() => {
    loader.classList.add('sf-loader--hide');
    // Remove from DOM after transition
    setTimeout(() => loader.remove(), 500);
  }, 350);
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Dismiss loader once React is painted
requestAnimationFrame(() => {
  requestAnimationFrame(dismissLoader);
});
