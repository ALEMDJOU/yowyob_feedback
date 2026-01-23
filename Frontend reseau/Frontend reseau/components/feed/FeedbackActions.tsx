import React from 'react';

interface FeedbackActionsProps {
    likes: number;
    liked: boolean;
    onLike: () => void;
    onToggleComment: () => void;
}

export default function FeedbackActions({ likes, liked, onLike, onToggleComment }: FeedbackActionsProps) {
    return (
        <div className="flex items-center gap-4 py-2 border-t border-gray-100 mt-2">
            <button
                onClick={onLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${liked
                    ? 'text-purple-700 bg-purple-100 ring-2 ring-purple-200'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
            >
                <i className={`fas fa-thumbs-up ${liked ? 'bounce-anim' : ''}`}></i>
                <span>{likes > 0 ? likes : 'J\'aime'}</span>
            </button>
            <button
                onClick={onToggleComment}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 hover:scale-105 active:scale-95"
            >
                <i className="fas fa-comment"></i>
                <span>Commenter</span>
            </button>
        </div>
    );
}
