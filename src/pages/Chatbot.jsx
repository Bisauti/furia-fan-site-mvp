// src/pages/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PanteraAvatar from '../assets/images/pantera.jpg';

// Dados estáticos mockados
const furiaData = {
    resultados: [
        "CS2 - FURIA 2 vs 1 Team Liquid (Data: Ontem)",
        "Valorant - FURIA 1 vs 2 LOUD (Data: 3 dias atrás)",
        "Rocket League - FURIA 3 vs 0 FaZe Clan (Data: Semana passada)"
    ],
    proximosJogos: [
        "CS2 - FURIA vs Imperial (Data: Amanhã, 19:00 BRT)",
        "Valorant - FURIA vs MIBR (Data: Sexta-feira, 17:00 BRT)"
    ],
    clipesSemana: [
        "Chelo soltou o defuse!: https://x.com/i/status/1911765528999231577",
        "Golaço do Leleti na KG: https://x.com/i/status/1917023835448037589"
    ],
    curiosidadesJogadores: [
        "Sabia que o yuurih adora cozinhar?",
        "O saffee tem uma coleção de tênis incríveis!"
    ]
};


export default function Chatbot() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Olá! Sou a Pantera. Como posso te ajudar hoje?' },
    ]);
    const [showQuickButtons, setShowQuickButtons] = useState(true);
    const messagesEndRef = useRef(null);

    const handleGoBack = () => { navigate('/'); };
    const handleSendMessage = (text, sender = 'user') => { /* ... lógica ... */
        if (text.trim() === '') return;
        const newMessage = { sender, text };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        if (sender === 'user') {
            setShowQuickButtons(false);
            setTimeout(() => {
                let botResponseText = '';
                let relevantData = null;
                if (text === 'Últimos resultados da FURIA') { botResponseText = 'Aqui estão os últimos resultados que encontrei:'; relevantData = furiaData.resultados; }
                else if (text === 'Próximo jogo') { botResponseText = 'Próximos jogos agendados:'; relevantData = furiaData.proximosJogos; }
                else if (text === 'Clipes da semana') { botResponseText = 'Confira os clipes mais quentes da semana:'; relevantData = furiaData.clipesSemana; }
                else if (text === 'Curiosidades dos jogadores') {
                    botResponseText = 'Uma curiosidade sobre nossos jogadores:';
                    if (furiaData.curiosidadesJogadores.length > 0) {
                        const randomIndex = Math.floor(Math.random() * furiaData.curiosidadesJogadores.length);
                        relevantData = [furiaData.curiosidadesJogadores[randomIndex]];
                    } else {
                        relevantData = ["Ainda não tenho curiosidades para compartilhar."];
                    }
                } else {
                    botResponseText = 'Hmm, só posso responder às opções dos botões por enquanto.';
                }
                if (botResponseText) { setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponseText }]); }
                if (relevantData && relevantData.length > 0) {
                    relevantData.forEach((item, index) => {
                        setTimeout(() => {
                            setMessages((prevMsgs) => {
                                const updatedMsgs = [...prevMsgs, { sender: 'bot', text: item }];
                                if (index === relevantData.length - 1) { setShowQuickButtons(true); }
                                return updatedMsgs;
                            });
                        }, 200 * (index + 1));
                    });
                } else { setShowQuickButtons(true); }
            }, 1000);
        }
    };

    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);


    return (
        <div className="flex flex-col h-full bg-gray-900 text-white">
            {/* Cabeçalho - mantido */}
            <div className="flex items-center justify-between py-4 px-6 bg-gray-800 shadow-md">
                <button className="text-white text-2xl focus:outline-none mr-4" onClick={handleGoBack} aria-label="Voltar para a página inicial">←</button>
                <div className="flex items-center flex-grow">
                    <img src={PanteraAvatar} alt="Avatar da Pantera" className="w-16 h-16 rounded-full object-cover mr-3" />
                    <span className="text-xl font-semibold">Pantera</span>
                </div>
                <button className="text-white text-2xl focus:outline-none ml-4">⋮</button>
            </div>

            {/* Área de Mensagens */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">

                {/* Renderiza as mensagens */}
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-start ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {message.sender === 'bot' && (
                            <img src={PanteraAvatar} alt="Avatar do Bot" className="w-8 h-8 rounded-full object-cover mr-2" />
                        )}
                        {/* Balão da mensagem */}
                        <div
                            className={`rounded-lg p-3 max-w-sm ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-100'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}

                {/* Botões Rápidos */}
                {showQuickButtons && (
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                        <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-600 transition-colors" onClick={() => handleSendMessage('Últimos resultados da FURIA', 'user')}>Últimos resultados da FURIA</button>
                        <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-600 transition-colors" onClick={() => handleSendMessage('Próximo jogo', 'user')}>Próximo jogo</button>
                        <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-600 transition-colors" onClick={() => handleSendMessage('Clipes da semana', 'user')}>Clipes da semana</button>
                        <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-600 transition-colors" onClick={() => handleSendMessage('Curiosidades dos jogadores', 'user')}>Curiosidades dos jogadores</button>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}