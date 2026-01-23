"use client";

import React from 'react';
import { UserPlus, Users, Briefcase } from 'lucide-react';

export default function NetworkPage() {
    return (
        <div className="space-y-6">
            <div className="bg-[#1e1e1e] rounded-xl shadow-sm p-8 text-center border border-gray-800">
                <div className="w-16 h-16 bg-purple-900/20 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <Users size={32} />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Mon Réseau</h1>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">Gérez vos relations et trouvez de nouveaux contacts pour élargir vos opportunités professionnelles.</p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/20 flex items-center gap-2">
                        <UserPlus size={18} /> Inviter des contacts
                    </button>
                    <button className="bg-transparent border border-gray-600 text-gray-300 px-6 py-2.5 rounded-full font-medium hover:border-gray-500 hover:text-white transition-colors">
                        Gérer  mes invitations
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">Relations</span>
                        <Users size={20} className="text-purple-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-3xl font-bold text-white">1,245</span>
                    <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                        +12 cette semaine
                    </p>
                </div>
                <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">Contacts suivis</span>
                        <UserPlus size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-3xl font-bold text-white">85</span>
                    <p className="text-xs text-gray-500 mt-1">
                        Personnalités et influenceurs
                    </p>
                </div>
                <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">Pages Entreprises</span>
                        <Briefcase size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-3xl font-bold text-white">24</span>
                    <p className="text-xs text-gray-500 mt-1">
                        Tech, Innovation, Startup...
                    </p>
                </div>
            </div>
        </div>
    );
}
