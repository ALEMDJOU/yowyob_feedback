"use client";

import React from 'react';
import { Bell, Heart, UserPlus, Briefcase } from 'lucide-react';

export default function NotificationsPage() {
    const notifications = [
        { id: 1, icon: Heart, color: 'text-red-500', text: 'Henri Fofack a aimé votre post.', time: '2h' },
        { id: 2, icon: UserPlus, color: 'text-blue-500', text: 'Nouvelle connexion: Sarah Jones.', time: '5h' },
        { id: 3, icon: Briefcase, color: 'text-purple-500', text: 'Opportunité de projet: Refonte UI.', time: '1j' },
    ];

    return (
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
                <h2 className="text-lg font-bold text-white">Notifications</h2>
            </div>
            <div className="divide-y divide-gray-800">
                {notifications.map((notif) => {
                    const Icon = notif.icon;
                    return (
                        <div key={notif.id} className="p-4 hover:bg-white/5 transition-colors cursor-pointer flex gap-4 items-start">
                            <div className="mt-1">
                                <Icon size={20} className={notif.color} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-200">{notif.text}</p>
                                <span className="text-xs text-gray-500 mt-1 block">{notif.time}</span>
                            </div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        </div>
                    );
                })}
            </div>
            <div className="p-4 text-center border-t border-gray-800">
                <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">
                    Voir toutes les notifications
                </button>
            </div>
        </div>
    );
}
