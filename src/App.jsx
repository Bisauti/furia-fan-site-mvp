// src/App.jsx
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Feed from './pages/Feed';

export default function App() {
    const location = useLocation();
    console.log('Current location perceived by React Router:', location.pathname);


    return (
        <div className="h-screen flex flex-col bg-gray-900 text-gray-100">
            <nav className="p-4 bg-black shadow-lg">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
                    <li><Link to="/feed" className="hover:text-purple-400">Feed</Link></li>
                    <li><Link to="/chat" className="hover:text-purple-400">Chatbot</Link></li>
                    <li><Link to="/perfil" className="hover:text-purple-400">Perfil</Link></li>
                    <li><Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link></li>
                </ul>
            </nav>
            <main className="flex-1 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/chat" element={<Chatbot />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
}