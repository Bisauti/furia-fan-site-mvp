// src/pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
    // Dados de exemplo
    const tempoNoChatbot = '12h';
    const interacoes = 235;
    const clipesVistos = 18;

    return (
        <div className="p-6 text-gray-100"> {/* Padding e cor de texto base */}
            <h2 className="text-2xl font-semibold mb-6 text-white">Dashboard de Estatísticas</h2>

            {/* Seção de Estatísticas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400">Tempo no Chatbot</p>
                    <p className="text-xl font-bold">{tempoNoChatbot}</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400">Interações</p>
                    <p className="text-xl font-bold">{interacoes}</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400">Clipes Vistos</p>
                    <p className="text-xl font-bold">{clipesVistos}</p>
                </div>
            </div>
        </div>
    );
}