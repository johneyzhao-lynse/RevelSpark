import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './animations.css';
import './typography.css'; // 导入优化的文字风格

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);