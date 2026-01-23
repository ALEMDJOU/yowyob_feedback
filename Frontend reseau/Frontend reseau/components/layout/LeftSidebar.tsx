"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LeftSidebar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard/feed', icon: 'fas fa-home', label: 'Accueil' },
        { href: '/dashboard/notifications', icon: 'fas fa-bell', label: 'Notifications' },
        { href: '/dashboard/project', icon: 'fas fa-briefcase', label: 'Projets' },
        { href: '/dashboard/account', icon: 'fas fa-user', label: 'Profil' },
        { href: '/dashboard/settings', icon: 'fas fa-cog', label: 'Paramètres' },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 fixed h-screen sticky top-20">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* User Mini Profile */}
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-purple-700 to-indigo-800 text-white relative">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://i.ibb.co/Qf983vG/avatar-placeholder.png"
                            alt="Profile"
                            className="w-12 h-12 rounded-full border-2 border-white"
                        />
                        <div>
                            <h3 className="font-bold text-sm">Henri Fofack</h3>
                            <p className="text-xs opacity-80">Développeur Fullstack</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="p-2">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                                ? 'bg-purple-50 text-purple-700'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <i className={`${item.icon} w-5 text-center`}></i>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="mt-4 p-4 text-xs text-center text-gray-400">
                &copy; 2024 Yowyob Feedback
            </div>
        </aside>
    );
}
