"use client";

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Send, Users, Clock, MoreVertical, MessageSquare } from 'lucide-react';

// Mock data for a single project (in a real app, you'd fetch this by ID)
const PROJECT_DETAILS = {
    id: '1',
    name: 'Quantum Leap Project',
    description: 'Développement d\'un ordinateur quantique accessible pour les PME. Ce projet vise à démocratiser l\'accès à la puissance de calcul quantique via une interface cloud simplifiée.',
    status: 'In Progress',
    members: [
        { name: 'Alice', avatar: 'https://ui-avatars.com/api/?name=Alice&background=random&color=fff&size=128' },
        { name: 'Bob', avatar: 'https://ui-avatars.com/api/?name=Bob&background=random&color=fff&size=128' },
        { name: 'Charlie', avatar: 'https://ui-avatars.com/api/?name=Charlie&background=random&color=fff&size=128' }
    ],
    messages: [
        { id: 1, user: 'Alice', avatar: 'https://ui-avatars.com/api/?name=Alice&background=random&color=fff&size=128', text: 'Le sprint 2 est terminé. Nous avons intégré l\'API de simulation.', time: '10:00' },
        { id: 2, user: 'Bob', avatar: 'https://ui-avatars.com/api/?name=Bob&background=random&color=fff&size=128', text: 'Super ! Je vais lancer les tests unitaires cet après-midi.', time: '10:15' },
        { id: 3, user: 'Charlie', avatar: 'https://ui-avatars.com/api/?name=Charlie&background=random&color=fff&size=128', text: 'N\'oubliez pas de mettre à jour la documentation.', time: '10:30' },
        { id: 4, user: 'Alice', avatar: 'https://ui-avatars.com/api/?name=Alice&background=random&color=fff&size=128', text: 'C\'est noté. On se voit au daily demain.', time: '11:00' },
    ]
};

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const [messages, setMessages] = useState(PROJECT_DETAILS.messages);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const msg = {
            id: messages.length + 1,
            user: 'Vous',
            avatar: 'https://ui-avatars.com/api/?name=Me&background=random&color=fff&size=128',
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, msg]);
        setNewMessage('');
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#1e1e1e] z-10">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/projects" className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="font-bold text-lg text-white flex items-center gap-2">
                            {PROJECT_DETAILS.name}
                            <span className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded-full font-medium border border-blue-900/50">In Progress</span>
                        </h1>
                        <p className="text-xs text-gray-500 flex items-center gap-2">
                            <Users size={12} /> {PROJECT_DETAILS.members.length} membres
                        </p>
                    </div>
                </div>
                <button className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white">
                    <MoreVertical size={20} />
                </button>
            </div>

            {/* Description Area (Collapsible in real app) */}
            <div className="p-4 bg-[#181818] border-b border-gray-800 text-sm text-gray-400">
                <p>{PROJECT_DETAILS.description}</p>
            </div>

            {/* Messages Area (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#121212]">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.user === 'Vous' ? 'flex-row-reverse' : ''}`}>
                        <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600" />
                        <div className={`max-w-[80%] ${msg.user === 'Vous' ? 'items-end' : 'items-start'} flex flex-col`}>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-xs font-semibold text-gray-300">{msg.user}</span>
                                <span className="text-[10px] text-gray-500">{msg.time}</span>
                            </div>
                            <div className={`p-3 rounded-2xl text-sm ${msg.user === 'Vous'
                                ? 'bg-purple-600 text-white rounded-tr-none'
                                : 'bg-[#1e1e1e] border border-gray-800 text-gray-200 rounded-tl-none shadow-sm'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#1e1e1e] border-t border-gray-800">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <button type="button" className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                        <MoreVertical size={20} className="rotate-90" />
                    </button>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Écrivez un message à l'équipe..."
                        className="flex-1 bg-black/40 border border-gray-700 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500"
                    />
                    <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-purple-900/20"
                    >
                        <Send size={18} className="ml-0.5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
