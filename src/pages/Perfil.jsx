// src/pages/Perfil.jsx
import React, { useState } from 'react';

// Importe os ícones
import { FaInstagram, FaSquareXTwitter, FaSquareFacebook } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

// Importe a imagem do checkmark roxo
import PurpleCheckIcon from '../assets/images/Purple_check.svg.png';

// Lista de interesses pré-definidos
const availableInterests = [
    'E-sports', 'CS2', 'Valorant', 'Rocket League', 'Kings League',
    'Rainbow Six',
    'Produtos FURIA',
    'League of Legends',
    'Streams', 'Notícias FURIA', 'Eventos', 'Jogadores', 'Campeonatos'
];


export default function Perfil() {
    // Estado para gerenciar os interesses do usuário
    const [userInterests, setUserInterests] = useState(['E-sports', 'CS2', 'Streams', 'League of Legends']);

    const nivelDeFa = 75; // Nível de Fã 

    // Estado para simular a conexão das redes sociais
    const [isConnectedToInstagram, setIsConnectedToInstagram] = useState(false);
    const [isConnectedToTwitter, setIsConnectedToTwitter] = useState(true);
    const [isConnectedToFacebook, setIsConnectedToFacebook] = useState(false);


    // Funções de conexão, remover interesse, adicionar interesse
    const handleConnectClick = (platform) => {
        alert(`Conectar com ${platform} (Funcionalidade em desenvolvimento)`);
        if (platform === 'Instagram') {
            setIsConnectedToInstagram(true);
        } else if (platform === 'Twitter') {
            setIsConnectedToTwitter(true);
        } else if (platform === 'Facebook') {
            setIsConnectedToFacebook(true);
        }
    };

    const handleRemoveInterest = (indexToRemove) => {
        const updatedInterests = userInterests.filter((_, index) => index !== indexToRemove);
        setUserInterests(updatedInterests);
    };

    const handleSelectInterest = (interestToSelect) => {
        if (!userInterests.some(interest => interest.toLowerCase() === interestToSelect.toLowerCase())) {
            setUserInterests([...userInterests, interestToSelect]);
        } else {
            alert(`Você já adicionou "${interestToSelect}" como interesse!`);
        }
    };


    return (
        <div className="p-6 text-gray-100 overflow-y-auto h-full">
            <h2 className="text-2xl font-semibold mb-6 text-white">Meu Perfil</h2>

            {/* Seção de Interesses Gerenciáveis */}
            <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-white">Meus Interesses</h3>
                {/* Exibição dos interesses do usuário com botão de remover */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {userInterests.map((interesse, index) => (
                        <span
                            key={index}
                            // Classes de estilo
                            className="flex items-center justify-between px-3 py-1 bg-purple-700 text-white text-sm rounded-full w-44 h-8 flex-none"
                        >
                            {/* Div para o texto do interesse */}
                            <div className="flex-grow text-center">{interesse}</div>
                            {/* Botão de remover interesse */}
                            <button
                                className="ml-1 text-gray-300 hover:text-white focus:outline-none"
                                onClick={() => handleRemoveInterest(index)}
                                aria-label={`Remover interesse: ${interesse}`}
                            >
                                <IoClose className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                </div>

                {/* Área: Lista de Interesses Disponíveis para Adicionar */}
                <h3 className="text-lg font-semibold mt-6 mb-3 text-white">Adicionar Interesses</h3>

                {/* Renderização dos Interesses Disponíveis */}
                <div className="flex flex-wrap gap-2">
                    {availableInterests
                        .filter(interesseDisponivel =>
                            !userInterests.some(selectedInterest =>
                                selectedInterest.toLowerCase() === interesseDisponivel.toLowerCase()
                            )
                        )
                        .map((interesseDisponivel, index) => (
                            <button
                                key={index}
                                // Classes de estilo
                                className="flex items-center justify-center px-3 py-1 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-600 transition-colors w-44 h-8 flex-none"
                                onClick={() => handleSelectInterest(interesseDisponivel)}
                                aria-label={`Adicionar interesse: ${interesseDisponivel}`}
                            >
                            
                                <span className="">{interesseDisponivel}</span>
                            </button>
                        ))
                    }
                </div>

            </div>

            {/* Seção Nível de Fã */}
            <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-white">Nível de Fã</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${nivelDeFa}%` }}
                    ></div>
                </div>
                <p className="text-right text-sm text-gray-400 mt-1">{nivelDeFa}%</p>
            </div>

            {/* Seção Conexões */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-white">Conexões</h3>
                <div className="flex space-x-4">

                    <button
                        className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors relative"
                        onClick={() => handleConnectClick('Instagram')}
                        aria-label="Conectar com Instagram"
                    >
                        <FaInstagram className="text-xl text-pink-500" />
                        {isConnectedToInstagram && (
                            <img src={PurpleCheckIcon} alt="Conectado" className="absolute bottom-0 right-0 w-4 h-4" />
                        )}
                    </button>

                    <button
                        className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors relative"
                        onClick={() => handleConnectClick('Twitter')}
                        aria-label="Conectar com Twitter (X)"
                    >
                        <FaSquareXTwitter className="text-xl text-white" />
                        {isConnectedToTwitter && (
                            <img src={PurpleCheckIcon} alt="Conectado" className="absolute bottom-0 right-0 w-4 h-4" />
                        )}
                    </button>

                    <button
                        className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors relative"
                        onClick={() => handleConnectClick('Facebook')}
                        aria-label="Conectar com Facebook"
                    >
                        <FaSquareFacebook className="text-xl text-blue-600" />
                        {isConnectedToFacebook && (
                            <img src={PurpleCheckIcon} alt="Conectado" className="absolute bottom-0 right-0 w-4 h-4" />
                        )}
                    </button>

                </div>
            </div>

        </div>
    );
}