"use client";

import React, { useState } from 'react';
import { Search, MoreVertical, Phone, Video, Image, Paperclip, Send, Mic, Info } from 'lucide-react';

// --- Types & Mocks ---

type Message = {
    id: number;
    sender: string;
    avatar?: string;
    text: string;
    time: string;
    isMe: boolean;
};

type Conversation = {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread: number;
    online?: boolean;
    type: 'direct' | 'project';
    members?: number; // Only for projects
};

const MOCK_CONVERSATIONS: Conversation[] = [
    {
        id: 1,
        name: "Quantum Leap Project",
        avatar: "https://ui-avatars.com/api/?name=QL&background=random&color=fff",
        lastMessage: "Alice: On a validé la PR #42",
        time: "10:30",
        unread: 2,
        type: 'project',
        members: 5
    },
    {
        id: 2,
        name: "Sarah Jones",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Jones&background=random&color=fff",
        lastMessage: "Merci pour ton aide hier !",
        time: "09:15",
        unread: 0,
        online: true,
        type: 'direct'
    },
    {
        id: 3,
        name: "Dev Team Global",
        avatar: "https://ui-avatars.com/api/?name=DT&background=random&color=fff",
        lastMessage: "Rappel: All-hands à 14h",
        time: "Hier",
        unread: 0,
        type: 'project',
        members: 12
    },
    {
        id: 4,
        name: "Marc Dupont",
        avatar: "https://ui-avatars.com/api/?name=Marc+Dupont&background=random&color=fff",
        lastMessage: "Tu as les specs pour le module ?",
        time: "Hier",
        unread: 0,
        online: false,
        type: 'direct'
    },
];

const MOCK_MESSAGES: Record<number, Message[]> = {
    1: [
        { id: 1, sender: "Alice", avatar: "https://ui-avatars.com/api/?name=Alice&background=random&color=fff", text: "Salut l'équipe ! Le sprint se termine bientôt.", time: "10:00", isMe: false },
        { id: 2, sender: "Bob", avatar: "https://ui-avatars.com/api/?name=Bob&background=random&color=fff", text: "Yes, j'ai fini l'intégration de l'API.", time: "10:05", isMe: false },
        { id: 3, sender: "Vous", text: "Super nouvelle ! Je vais pouvoir tester ça.", time: "10:10", isMe: true },
        { id: 4, sender: "Alice", avatar: "https://ui-avatars.com/api/?name=Alice&background=random&color=fff", text: "On a validé la PR #42", time: "10:30", isMe: false },
    ],
    2: [
        { id: 1, sender: "Sarah Jones", avatar: "https://ui-avatars.com/api/?name=Sarah+Jones&background=random&color=fff", text: "Salut Henri, tu as 5 minutes ?", time: "09:00", isMe: false },
        { id: 2, sender: "Vous", text: "Bien sûr, dis-moi.", time: "09:05", isMe: true },
        { id: 3, sender: "Sarah Jones", avatar: "https://ui-avatars.com/api/?name=Sarah+Jones&background=random&color=fff", text: "C'était propos du déploiement d'hier, je ne trouve pas les logs.", time: "09:06", isMe: false },
        { id: 4, sender: "Vous", text: "Regarde dans var/log/app, tout devrait être là.", time: "09:10", isMe: true },
        { id: 5, sender: "Sarah Jones", avatar: "https://ui-avatars.com/api/?name=Sarah+Jones&background=random&color=fff", text: "Merci pour ton aide hier !", time: "09:15", isMe: false },
    ]
};

export default function MessagingPage() {
    const [selectedId, setSelectedId] = useState<number>(1);
    const [inputText, setInputText] = useState("");

    // In a real app check for undefined, here we fallback to empty for safety
    const currentMessages = MOCK_MESSAGES[selectedId] || [];
    const currentConversation = MOCK_CONVERSATIONS.find(c => c.id === selectedId);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        // In a real app we would add the message to the state here
        setInputText("");
    };

    return (
        <div className="h-[calc(100vh-100px)] bg-[#1e1e1e] rounded-xl border border-gray-800 flex overflow-hidden shadow-2xl">
            {/* --- Left Sidebar: Conversation List --- */}
            <div className="w-80 border-r border-gray-800 flex flex-col bg-[#1e1e1e]">
                {/* Header */}
                <div className="p-4 border-b border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Messagerie</h2>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full bg-black/40 border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-sm text-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto">
                    {MOCK_CONVERSATIONS.map(conv => (
                        <div
                            key={conv.id}
                            onClick={() => setSelectedId(conv.id)}
                            className={`p-4 flex gap-3 cursor-pointer transition-colors border-l-4 ${selectedId === conv.id
                                    ? 'bg-white/5 border-purple-500'
                                    : 'border-transparent hover:bg-white/5'
                                }`}
                        >
                            <div className="relative">
                                <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full object-cover" />
                                {conv.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1e1e1e] rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={`font-semibold truncate ${selectedId === conv.id ? 'text-white' : 'text-gray-200'}`}>
                                        {conv.name}
                                    </h3>
                                    <span className="text-xs text-gray-500">{conv.time}</span>
                                </div>
                                <p className={`text-sm truncate ${conv.unread > 0 ? 'text-white font-medium' : 'text-gray-500'}`}>
                                    {conv.lastMessage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Right Main: Chat Area --- */}
            <div className="flex-1 flex flex-col bg-[#121212]">
                {/* Header */}
                <div className="h-[73px] px-6 border-b border-gray-800 flex items-center justify-between bg-[#1e1e1e]">
                    <div className="flex items-center gap-3">
                        <img src={currentConversation?.avatar} alt="Current" className="w-10 h-10 rounded-full" />
                        <div>
                            <h3 className="font-bold text-white flex items-center gap-2">
                                {currentConversation?.name}
                                {currentConversation?.type === 'project' && (
                                    <span className="bg-blue-900/30 text-blue-400 text-[10px] px-2 py-0.5 rounded border border-blue-900/50">PROJET</span>
                                )}
                            </h3>
                            <p className="text-xs text-gray-500">
                                {currentConversation?.online ? 'En ligne' :
                                    currentConversation?.type === 'project' ? `${currentConversation.members} membres` : 'Hors ligne'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <button className="hover:text-purple-400 transition-colors"><Phone size={20} /></button>
                        <button className="hover:text-purple-400 transition-colors"><Video size={20} /></button>
                        <div className="h-6 w-px bg-gray-700"></div>
                        <button className="hover:text-white transition-colors"><Info size={20} /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Timestamp separator example */}
                    <div className="flex justify-center">
                        <span className="text-xs font-medium text-gray-500 bg-[#1e1e1e] px-3 py-1 rounded-full border border-gray-800">
                            Aujourd'hui
                        </span>
                    </div>

                    {currentMessages.map(msg => (
                        <div key={msg.id} className={`flex gap-4 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                            {!msg.isMe && (
                                <img src={msg.avatar} alt={msg.sender} className="w-8 h-8 rounded-full self-end mb-1" />
                            )}
                            <div className={`max-w-[70%] flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                                <div className={`px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.isMe
                                        ? 'bg-purple-600 text-white rounded-tr-none'
                                        : 'bg-[#1e1e1e] text-gray-100 border border-gray-800 rounded-tl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                                <span className="text-[10px] text-gray-600 mt-1 px-1">
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#1e1e1e] border-t border-gray-800">
                    <form onSubmit={handleSend} className="flex items-end gap-2 bg-[#121212] p-2 rounded-xl border border-gray-800 focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/20 transition-all">
                        <div className="flex gap-1 pb-2 pl-2">
                            <button type="button" className="p-2 text-gray-500 hover:text-purple-400 hover:bg-white/5 rounded-full transition-colors">
                                <Image size={20} />
                            </button>
                            <button type="button" className="p-2 text-gray-500 hover:text-purple-400 hover:bg-white/5 rounded-full transition-colors">
                                <Paperclip size={20} />
                            </button>
                        </div>
                        <textarea
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                            placeholder="Écrivez un message..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 resize-none max-h-32 py-3"
                            rows={1}
                        />
                        <div className="pb-2 pr-2">
                            {inputText.trim() ? (
                                <button type="submit" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/20">
                                    <Send size={18} className="ml-0.5" />
                                </button>
                            ) : (
                                <button type="button" className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                                    <Mic size={20} />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
