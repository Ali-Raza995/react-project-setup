import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        // <StrictMode>
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
        // </StrictMode>
    );
}
