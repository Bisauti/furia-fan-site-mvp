// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Importe os ícones para os botões de login
import { FaGoogle, FaDiscord, FaTwitch } from 'react-icons/fa'; // Importando ícones comuns do Font Awesome

// Importação do logo
import FuriaLogo from '../assets/images/Furia_Esports_logo.png';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-white p-6">

            {/* Logo e Título */}
             <div className="flex items-center justify-center mb-6">
                 <img
                     src={FuriaLogo}
                     alt="Logo da FURIA Pantera"
                     className="h-16 mr-4"
                 />
                 <h1 className="text-5xl font-bold">
                     Furia <span className="text-purple-600">Wave</span>
                 </h1>
             </div>

             {/* Texto de Chamada para Ação */}
             <p className="text-xl mb-6 text-center">Conecte-se com o universo da FURIA!</p>

             {/* Contêiner para os Botões de Navegação (Chatbot e Feed) */}
            <div className="flex items-center justify-center space-x-4 mb-6">

                 {/* Botão "Acessar o Chatbot" */}
                <Link
                    to="/chat"
                    className="inline-block px-8 py-3 bg-purple-600 text-white text-xl font-semibold rounded-lg shadow hover:bg-purple-700 transition-colors"
                >
                    Acessar o Chatbot
                </Link>

                 {/* Botão "Acessar Feed" */}
                <Link
                    to="/feed"
                    className="inline-block px-8 py-3 bg-purple-600 text-white text-xl font-semibold rounded-lg shadow hover:bg-purple-700 transition-colors"
                >
                    Acessar Feed
                </Link>

            </div>


            {/* Texto "Bem-vindo de Volta!" */}
            <h2 className="text-2xl font-semibold mb-4 mt-4 border-t border-gray-700 pt-4 w-full max-w-sm text-center">Bem-vindo de Volta!</h2>


            {/* Container para os botões de login */}
            <div className="flex flex-col space-y-4 w-full max-w-sm">

                {/* Botão Entrar com o Google */}
                <button className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition-colors">
                    {/* Ícone do Google */}
                     <FaGoogle className="w-6 h-6 mr-3 text-white" /> {/* Usando o componente de ícone do Google */}
                    <span className="text-lg font-medium">Entrar com o Google</span>
                </button>

                {/* Botão Entrar com o Discord */}
                <button className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition-colors">
                     {/* Ícone do Discord */}
                    <FaDiscord className="w-6 h-6 mr-3 text-white" /> {/* Usando o componente de ícone do Discord */}
                    <span className="text-lg font-medium">Entrar com o Discord</span>
                </button>

                {/* Botão Entrar com o Twitch */}
                <button className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition-colors">
                     {/* Ícone do Twitch */}
                    <FaTwitch className="w-6 h-6 mr-3 text-white" /> {/* Usando o componente de ícone do Twitch */}
                    <span className="text-lg font-medium">Entrar com o Twitch</span>
                </button>

            </div>

        </div>
    );
}