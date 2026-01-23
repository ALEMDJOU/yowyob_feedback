"use client";

import React from 'react';
import Link from 'next/link';
import { Bookmark, Eye, Folder } from 'lucide-react';

export default function IdentityCard() {
    return (
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 shadow-sm overflow-hidden sticky top-24">
            {/* Banner & Photo */}
            <div className="relative h-[60px] bg-gradient-to-r from-gray-800 to-gray-700">
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                    <img
                        src="https://ui-avatars.com/api/?name=Henri+Fofack&background=random&color=fff&size=128"
                        alt="Profile"
                        className="w-[72px] h-[72px] rounded-full border-4 border-[#1e1e1e] object-cover cursor-pointer"
                    />
                </div>
            </div>

            {/* Info */}
            <div className="pt-[40px] pb-4 px-3 text-center border-b border-gray-800">
                <Link href="/dashboard/account" className="block font-bold text-white hover:underline decoration-white text-[16px]">
                    Henri Fofack
                </Link>
                <p className="text-[12px] text-gray-400 mt-1 line-clamp-2">
                    Développeur Fullstack @ Yowyob Feedback | Passionné React & Next.js
                </p>
            </div>

            {/* Stats */}
            <div className="py-3 border-b border-gray-800">
                <div className="px-4 py-1.5 hover:bg-white/5 cursor-pointer flex justify-between items-center text-[12px] font-medium transition-colors">
                    <span className="text-gray-400">Vues de profil</span>
                    <span className="text-purple-400 font-bold">42</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/5 cursor-pointer flex justify-between items-center text-[12px] font-medium transition-colors">
                    <span className="text-gray-400">Projets suivis</span>
                    <span className="text-purple-400 font-bold">12</span>
                </div>
            </div>

            {/* My Items */}
            <Link href="/dashboard/saved" className="block px-4 py-3 text-[12px] font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2">
                <Bookmark size={14} className="text-gray-400" /> Mes éléments
            </Link>
        </div>
    );
}
