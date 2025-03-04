import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store';

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        // <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
        </Provider>
        // </StrictMode>
    );
}
