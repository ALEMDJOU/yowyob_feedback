"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard/feed', icon: 'fas fa-home', label: 'Home' },
        { href: '/dashboard/project', icon: 'fas fa-search', label: 'Explore' },
        { href: '/dashboard/feed/create', icon: 'fas fa-plus', label: 'Post', primary: true },
        { href: '/dashboard/notifications', icon: 'fas fa-bell', label: 'Notifs' },
        { href: '/dashboard/account', icon: 'fas fa-user', label: 'Profile' },
    ];

    return (
        <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/90 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl z-50 px-2 h-16">
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    if (item.primary) {
                        return (
                            <button key={item.label} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl -mt-8 rounded-full h-14 w-14 flex items-center justify-center shadow-lg shadow-purple-200 transition-transform hover:scale-105 active:scale-95 border-4 border-gray-50">
                                <i className={item.icon}></i>
                            </button>
                        );
                    }
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-purple-600' : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <i className={`${item.icon} text-lg ${isActive ? '' : 'opacity-70'}`}></i>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
