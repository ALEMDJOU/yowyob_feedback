"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Home, Users, Briefcase, MessageSquare, Bell, ChevronDown, LogOut, Settings, User } from 'lucide-react';

export default function LinkedInNavbar() {
    const pathname = usePathname();
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);

    const navItems = [
        { href: '/dashboard/feed', icon: Home, label: 'Accueil' },
        { href: '/dashboard/network', icon: Users, label: 'Mon réseau' },
        { href: '/dashboard/projects', icon: Briefcase, label: 'Projets' },
        { href: '/dashboard/messaging', icon: MessageSquare, label: 'Messagerie' },
        { href: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
    ];

    return (
        <nav className="bg-[#1e1e1e] border-b border-gray-800 fixed top-0 left-0 right-0 z-50 h-[60px]">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo + Search */}
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/feed" className="text-white text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
                        Yowyob
                    </Link>
                    <div className="relative hidden md:block group">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Recherche"
                            className="bg-black/40 h-[38px] w-[280px] pl-10 pr-4 rounded text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all border border-transparent focus:border-purple-500/30"
                        />
                    </div>
                </div>

                {/* Navigation Items */}
                <ul className="flex h-full items-center gap-1 md:gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <li key={item.label} className="h-full relative group">
                                <Link
                                    href={item.href}
                                    className={`flex flex-col items-center justify-center h-full px-2 min-w-[60px] md:min-w-[70px] transition-colors relative ${isActive
                                        ? 'text-white'
                                        : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className="mb-0.5" />
                                    <span className="text-[10px] md:text-xs font-medium hidden md:block">{item.label}</span>
                                    {isActive && <span className="absolute bottom-0 w-full h-[2px] bg-white rounded-t-full"></span>}
                                </Link>
                            </li>
                        );
                    })}

                    {/* Profile Dropdown */}
                    <li className="h-full border-l border-gray-800 pl-2 md:pl-6 ml-2 flex items-center relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors text-xs gap-0.5 focus:outline-none"
                        >
                            <img
                                src="https://ui-avatars.com/api/?name=Henri+Fofack&background=random&color=fff&size=128"
                                alt="Me"
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover border border-gray-700"
                            />
                            <span className="items-center gap-1 font-medium hidden md:flex">Vous <ChevronDown size={10} /></span>
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute top-14 right-0 w-64 bg-[#1e1e1e] border border-gray-800 rounded-xl shadow-xl overflow-hidden py-1 z-50">
                                <div className="px-4 py-3 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://ui-avatars.com/api/?name=Henri+Fofack&background=random&color=fff&size=128"
                                            alt="Me"
                                            className="w-10 h-10 rounded-full border border-gray-700"
                                        />
                                        <div>
                                            <p className="font-bold text-white text-sm">Henri Fofack</p>
                                            <p className="text-xs text-gray-500 truncate w-32">Dev Fullstack</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/dashboard/account"
                                        onClick={() => setIsProfileOpen(false)}
                                        className="block w-full text-center mt-3 py-1.5 rounded-full border border-purple-500 text-purple-400 text-xs font-bold hover:bg-purple-500/10 transition-colors"
                                    >
                                        Voir le profil
                                    </Link>
                                </div>

                                <div className="py-1 border-b border-gray-800">
                                    <Link href="/dashboard/account" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                                        <Settings size={16} /> Préférences
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                                        <User size={16} /> Aide & Support
                                    </Link>
                                </div>

                                <div className="py-1">
                                    <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:bg-red-900/10 hover:text-red-400 transition-colors">
                                        <LogOut size={16} /> Déconnexion
                                    </Link>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
