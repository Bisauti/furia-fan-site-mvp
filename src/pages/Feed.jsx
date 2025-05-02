// src/pages/Feed.jsx
import React from 'react';
// Importe os ícones das redes sociais
import { FaInstagram, FaSquareXTwitter, FaSquareFacebook, FaTwitch, FaYoutube } from 'react-icons/fa6';

// Importe as imagens dos avatares e posts
import FuriaLogo from '../assets/images/Furia_Esports_logo.png';
import FallenAvatar from '../assets/images/fallen-avatar.jpg';
import KsceratoAvatar from '../assets/images/kscerato-avatar.jpg';
import GaulesAvatar from '../assets/images/gaules-avatar.jpg';
import FuriaLolPostImage from '../assets/images/furia-lol-post.jpg';
import KingsLeaguePostImage from '../assets/images/kings-league-post.jpg';
import GaulesPostImage from '../assets/images/gaules-post-image.jpg';
import FuriaCaptainPostImage from '../assets/images/furia-captain-post.jpg'

// Dados estáticos mockados
const mockFeedData = [
    { id: 1, platform: 'twitter', author: '@FURIA', avatar: 'URL_DO_AVATAR_FURIA', content: 'Grande vitória do nosso time de CS2 hoje! #DIADEFURIA', imageUrl: null, timestamp: '2 horas atrás', likes: 1589, comments: 45 },
    {
        id: 2,
        platform: 'instagram',
        author: '@FURIA.lol',
        avatar: 'URL_DO_AVATAR_FURIA',
        content: '📸 Momentos da nossa equipe no treino de hoje. Foco total!',
        imageUrl: FuriaLolPostImage,
        timestamp: '5 horas atrás', likes: 8765, comments: 123
    },
    { id: 3, platform: 'facebook', author: 'FURIA Esports', avatar: 'URL_DO_AVATAR_FURIA', content: 'Confira a entrevista completa com o coach após a partida.', imageUrl: null, timestamp: 'Ontem', likes: 2105, comments: 78 },
    { id: 4, platform: 'twitter', author: '@kscerato', avatar: 'URL_DO_AVATAR_KSCERATO', content: 'GGs! Jogo difícil mas garantimos a nossa. 🔥', imageUrl: null, timestamp: '1 hora atrás', likes: 12345, comments: 356 },
    { id: 5, platform: 'twitch', author: '@Fallen', avatar: 'URL_DO_AVATAR_FALLEN', content: 'AO VIVO AGORA: Começando a stream por aqui! Bora jogar um CS? twitch.tv/gafallen', imageUrl: null, timestamp: 'Agora mesmo', likes: 55890, comments: 1120 },
    {
        id: 6,
        platform: 'youtube',
        author: '@FURIA',
        avatar: 'URL_DO_AVATAR_FURIA',
        content: 'É HOJE! 👑 Assista nossa partida na Kings League ao vivo no YouTube! youtube.com/@Podpah',
        imageUrl: KingsLeaguePostImage,
        timestamp: 'Há 5 minutos', likes: 3210, comments: 88
    },
    { id: 7, platform: 'twitter', author: '@FURIA.valorant', avatar: 'URL_DO_AVATAR_FURIA', content: 'Mais um dia de treino intenso na gaming house!', imageUrl: null, timestamp: '10 horas atrás', likes: 987, comments: 31 },
    {
        id: 8,
        platform: 'instagram',
        author: '@FURIA',
        avatar: 'URL_DO_AVATAR_FURIA',
        content: 'Nosso capitão dando as instruções antes do jogo.',
        imageUrl: FuriaCaptainPostImage,
        timestamp: 'Ontem à noite', likes: 4567, comments: 99
    },
    {
        id: 9,
        platform: 'twitch',
        author: 'Gaules',
        avatar: 'URL_DO_AVATAR_GAUCS',
        content: 'Live ON com o cronograma do PGL Bucharest 2025! Cola pra conferir os próximos jogos. !jogos !pgl',
        imageUrl: GaulesPostImage,
        timestamp: 'Agora mesmo', likes: 78901, comments: 2567
    },
];

// Mapeamento de plataformas para ícones
const platformIcons = {
    twitter: <FaSquareXTwitter className="text-blue-400" />,
    instagram: <FaInstagram className="text-pink-500" />,
    facebook: <FaSquareFacebook className="text-blue-600" />,
    twitch: <FaTwitch className="text-purple-500" />,
    youtube: <FaYoutube className="text-red-600" />,
};

export default function Feed() {
    return (
        <div className="text-gray-100 max-w-lg mx-auto h-full">
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-white text-center">Feed FURIA</h2>

                {/* Container dos posts */}
                <div className="space-y-6">
                    {mockFeedData.map(post => {
                        let avatarSrc;
                        if (post.author.toLowerCase() === '@fallen') {
                            avatarSrc = FallenAvatar;
                        } else if (post.author.toLowerCase() === '@kscerato') {
                            avatarSrc = KsceratoAvatar;
                        } else if (post.author.toLowerCase() === 'gaules' || post.author.toLowerCase() === '@gaules') {
                            avatarSrc = GaulesAvatar;
                        } else if (post.author.toLowerCase().startsWith('@furia') || post.author.toLowerCase() === 'furia esports' || post.author.toLowerCase() === 'furia') {
                            avatarSrc = FuriaLogo;
                        }
                        else {
                            avatarSrc = DEFAULT_AVATAR_URL;
                        }

                        return (
                            <div key={post.id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-full mr-3 bg-gray-700 flex items-center justify-center overflow-hidden">
                                        <img src={avatarSrc} alt={`${post.author}'s avatar`} className="w-8 h-8 rounded-full object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-white">{post.author}</p>
                                        <p className="text-xs text-gray-400">{post.timestamp}</p>
                                    </div>
                                    <div className="text-xl">{platformIcons[post.platform] || null}</div>
                                </div>
                                <p className="mb-3 text-gray-300">{post.content}</p>
                                {post.imageUrl && (
                                    <img src={post.imageUrl} alt="Post image" className="rounded-lg w-full object-cover mt-2" />
                                )}
                                <div className="flex text-sm text-gray-400 mt-3 space-x-4">
                                    <span>Likes: {post.likes}</span>
                                    <span>Comentários: {post.comments}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}