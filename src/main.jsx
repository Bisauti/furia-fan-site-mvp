// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const REPO_NAME = '/furia-fan-site-mvp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Adicione a propriedade basename ao BrowserRouter */}
    <BrowserRouter basename={REPO_NAME}> {/* **CLASSE CHAVE AQUI** */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);