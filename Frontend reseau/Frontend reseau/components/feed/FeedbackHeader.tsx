import React from 'react';
import Image from 'next/image';
import { FeedbackData } from '@/types/feed';

interface FeedbackHeaderProps {
    author: string;
    authorAvatar: string;
    time: string;
}

export default function FeedbackHeader({ author, authorAvatar, time }: FeedbackHeaderProps) {
    return (
        <div className="flex items-center mb-3">
            <div className="relative w-11 h-11 mr-3 flex-shrink-0">
                <Image
                    src={authorAvatar}
                    alt={author}
                    fill
                    className="rounded-full object-cover"
                    sizes="44px"
                />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-sm">{author}</span>
                <span className="text-gray-500 text-xs flex items-center gap-1">
                    <i className="fas fa-clock text-[10px]"></i> {time}
                </span>
            </div>
        </div>
    );
}
