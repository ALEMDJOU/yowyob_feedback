"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeedbackData } from '@/types/feed';
import { ThumbsUp, MessageCircle, Repeat, Send, Globe, MoreHorizontal } from 'lucide-react';

export default function FeedbackCard({ data }: { data: FeedbackData }) {
    const [liked, setLiked] = useState(data.liked);
    const [likesCount, setLikesCount] = useState(data.likes);

    const toggleLike = () => {
        setLiked(!liked);
        setLikesCount(prev => liked ? prev - 1 : prev + 1);
    };

    return (
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 shadow-sm mb-4 overflow-hidden w-full">
            {/* Header */}
            <div className="p-4 pb-2 flex gap-3">
                <Link href="#" className="relative w-12 h-12 flex-shrink-0">
                    <Image
                        src={data.authorAvatar}
                        alt={data.author}
                        fill
                        className="rounded-full object-cover border border-gray-700"
                    />
                </Link>
                <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-1">
                        <Link href="#" className="font-semibold text-sm text-white hover:text-purple-400 hover:underline truncate">
                            {data.author}
                        </Link>
                        {data.project && (
                            <span className="text-gray-400 text-sm truncate w-full sm:w-auto">
                                a évalué le projet <Link href={`/dashboard/projects/${data.project.id}`} className="font-semibold text-purple-400 hover:underline">{data.project.name}</Link>
                            </span>
                        )}
                    </div>
                    {data.authorHeadline && (
                        <span className="text-xs text-gray-500 line-clamp-1">{data.authorHeadline}</span>
                    )}
                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        {data.time} • <Globe size={12} />
                    </span>
                </div>
                <button className="text-gray-500 hover:text-gray-300 self-start">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* Content */}
            <div className="px-4 py-2 text-sm text-gray-200 leading-relaxed">
                <p className="whitespace-pre-wrap">{data.content}</p>
            </div>

            {/* Social Counts */}
            <div className="px-4 py-2 flex items-center border-b border-gray-800 text-xs text-gray-500">
                {likesCount > 0 && (
                    <div className="flex items-center gap-1">
                        <div className="bg-purple-900/30 p-1 rounded-full">
                            <ThumbsUp size={10} className="text-purple-400 fill-purple-400" />
                        </div>
                        <span className="hover:text-purple-400 hover:underline cursor-pointer">{likesCount}</span>
                    </div>
                )}
                <div className="ml-auto hover:text-purple-400 hover:underline cursor-pointer">
                    {data.comments.length} commentaires
                </div>
            </div>

            {/* Actions */}
            <div className="px-2 py-1 flex justify-between items-center">
                <button
                    onClick={toggleLike}
                    className={`flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded-lg hover:bg-white/5 transition-colors group ${liked ? 'text-purple-400' : 'text-gray-400'}`}
                >
                    <ThumbsUp size={18} className={`transition-transform group-hover:scale-110 ${liked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-semibold hidden sm:inline">J'aime</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded-lg hover:bg-white/5 transition-colors text-gray-400 group hover:text-gray-200">
                    <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold hidden sm:inline">Commenter</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded-lg hover:bg-white/5 transition-colors text-gray-400 group hover:text-gray-200">
                    <Repeat size={18} className="transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold hidden sm:inline">Diffuser</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded-lg hover:bg-white/5 transition-colors text-gray-400 group hover:text-gray-200">
                    <Send size={18} className="transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold hidden sm:inline">Envoyer</span>
                </button>
            </div>
        </div>
    );
}
