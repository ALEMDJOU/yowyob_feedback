"use client";

import React from 'react';
import Image from 'next/image';
import { SUGGESTED_FOLLOWS } from '@/data/mocks/feed';
import { Plus, ChevronDown, Info } from 'lucide-react';

export default function RightSidebar() {
    return (
        <aside className="hidden lg:block w-full sticky top-24">
            {/* Trending / News */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-800 p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-white text-sm">Actualités</h3>
                    <Info size={14} className="text-gray-500" />
                </div>
                <ul className="space-y-4">
                    <li className="text-xs group cursor-pointer">
                        <span className="block font-medium text-gray-300 group-hover:text-purple-400 transition-colors truncate mb-0.5">Mise à jour de la plateforme</span>
                        <span className="text-gray-500">Il y a 2h • 1,204 lecteurs</span>
                    </li>
                    <li className="text-xs group cursor-pointer">
                        <span className="block font-medium text-gray-300 group-hover:text-purple-400 transition-colors truncate mb-0.5">Nouveaux outils pour devs</span>
                        <span className="text-gray-500">Il y a 5h • 856 lecteurs</span>
                    </li>
                    <li className="text-xs group cursor-pointer">
                        <span className="block font-medium text-gray-300 group-hover:text-purple-400 transition-colors truncate mb-0.5">Hackathon Yowyob 2025</span>
                        <span className="text-gray-500">Il y a 1j • 3,421 lecteurs</span>
                    </li>
                </ul>
                <button className="mt-4 text-xs text-gray-400 font-medium hover:text-white transition-colors flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full">
                    Voir plus <ChevronDown size={12} />
                </button>
            </div>

            {/* Suggested Follows */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-800 p-4">
                <h3 className="font-bold text-white mb-4 text-sm">À suivre</h3>
                <ul className="space-y-4">
                    {SUGGESTED_FOLLOWS.map(user => (
                        <li key={user.id} className="flex items-center gap-3">
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover border border-gray-700"
                                    sizes="40px"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-200 truncate hover:underline cursor-pointer">{user.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user.type === 'business' ? 'Entreprise' : 'Membre'}</p>
                            </div>
                            <button className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all border border-gray-700">
                                <Plus size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 text-center ">
                <p className="text-[11px] text-gray-600">
                    © 2026 Yowyob Feedback • <a href="#" className="hover:underline">À propos</a> • <a href="#" className="hover:underline">Accessibilité</a>
                </p>
            </div>
        </aside>
    );
}
