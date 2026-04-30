import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { inject } from '@vercel/analytics';

const injectAnalytics = () => inject();
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(injectAnalytics);
} else {
  setTimeout(injectAnalytics, 0);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
