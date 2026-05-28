import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/design-system.scss';
import './components/shared/shared.scss';
import './styles/print.scss';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
