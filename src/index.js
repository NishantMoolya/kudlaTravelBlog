import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import navTheme from './styles/theme/navTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ThemeProvider theme={navTheme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
);