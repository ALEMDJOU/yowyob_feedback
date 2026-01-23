"use client";

import React from 'react';
import { useTranslation } from '@/components/I18nProvider';
import FeedbackCard from '@/components/FeedbackCard';
import PostCreationWidget from '@/components/feed/PostCreationWidget';
import { INITIAL_FEEDBACKS } from '@/data/mocks/feed';

export default function FeedPage() {
    const { t } = useTranslation();

    return (
        <div className="w-full pb-20 md:pb-0">
            {/* Header Mobile / Desktop different style handled by layout later, for now keeping simple header */}

            <PostCreationWidget />

            {/* Filter / Sort Bar */}
            <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                    <button className="text-sm font-semibold text-white bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors">
                        Tout
                    </button>
                    <button className="text-sm font-medium text-gray-400 hover:text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                        Projets suivis
                    </button>
                    <button className="text-sm font-medium text-gray-400 hover:text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                        Mon réseau
                    </button>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1">
                    Trier par: <span className="font-semibold text-gray-300">Récents</span> <i className="fas fa-chevron-down"></i>
                </button>
            </div>

            {/* Feed */}
            <section className="space-y-4">
                {INITIAL_FEEDBACKS.map(data => (
                    <FeedbackCard key={data.id} data={data} />
                ))}
            </section>
        </div>
    );
}
