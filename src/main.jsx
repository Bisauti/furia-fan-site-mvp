// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Envolva o componente App com BrowserRouter */}
        <BrowserRouter> {/* **CLASSE CHAVE AQUI** */}
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);