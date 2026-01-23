"use client";

import React from 'react';
import { Bookmark } from 'lucide-react';

export default function SavedPage() {
    return (
        <div className="bg-[#1e1e1e] rounded-xl shadow-sm p-8 text-center border border-gray-800 min-h-[400px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bookmark size={32} />
            </div>
            <h1 className="text-xl font-bold text-white mb-2">Éléments sauvegardés</h1>
            <p className="text-gray-400 mb-6">Retrouvez ici tous les posts et projets que vous avez mis de côté.</p>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-full font-medium hover:border-gray-500 hover:text-white transition-colors">
                Explorer le feed
            </button>
        </div>
    );
}
