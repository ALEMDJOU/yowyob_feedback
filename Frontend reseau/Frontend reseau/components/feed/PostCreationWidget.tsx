"use client";

import React from 'react';
import { Image, Calendar, FileText } from 'lucide-react';

export default function PostCreationWidget() {
    return (
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 shadow-sm p-4 mb-4">
            <div className="flex gap-3 mb-3">
                <img
                    src="https://ui-avatars.com/api/?name=User&background=random&color=fff&size=128"
                    alt="Me"
                    className="w-12 h-12 rounded-full object-cover border border-gray-700"
                />
                <button className="flex-grow text-left rounded-full bg-gray-900 border border-gray-700 pl-4 py-3 text-sm font-semibold text-gray-400 hover:bg-gray-800 transition-colors">
                    Commencer un post...
                </button>
            </div>
            <div className="flex justify-between px-2 pt-1">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                    <Image size={20} className="text-blue-400" />
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">Média</span>
                </button>
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                    <Calendar size={20} className="text-amber-500" />
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">Événement</span>
                </button>
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                    <FileText size={20} className="text-orange-400" />
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">Article</span>
                </button>
            </div>
        </div>
    );
}
