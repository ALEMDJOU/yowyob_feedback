import React, { useState } from 'react';
import Image from 'next/image';
import { Comment } from '@/types/feed';

interface CommentSectionProps {
    comments: Comment[];
    onLikeComment: (commentId: string) => void;
    onReplyComment: (parentId: string, text: string) => void;
    onAddComment: (text: string) => void;
}

const emojis = ['😊', '❤️', '👍', '🎉', '🔥', '💯', '👏', '🙌'];

const CommentItem = ({
    comment,
    onLike
}: {
    comment: Comment;
    onLike: (id: string) => void;
}) => (
    <div className="mt-3 relative">
        <div className="flex gap-3 items-start">
            <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                    src={comment.avatar || 'https://i.ibb.co/Qf983vG/avatar-placeholder.png'}
                    alt={comment.author}
                    fill
                    className="rounded-full object-cover"
                    sizes="32px"
                />
            </div>
            <div className="flex-1">
                <div className="bg-gray-50 rounded-2xl px-3 py-2">
                    <div className="text-sm font-bold text-gray-800">{comment.author}</div>
                    <p className="text-sm text-gray-700 leading-snug">{comment.text}</p>
                </div>
                <div className="flex gap-4 mt-1 ml-2 text-xs text-gray-500">
                    <button
                        onClick={() => onLike(comment.id)}
                        className={`hover:underline font-medium ${comment.liked ? 'text-purple-700' : ''}`}
                    >
                        J'aime {comment.likes > 0 && `(${comment.likes})`}
                    </button>
                    <span>2h</span>
                </div>
            </div>
        </div>
        {/* Nested replies could go here */}
        {comment.replies && comment.replies.length > 0 && (
            <div className="pl-11">
                {comment.replies.map(reply => (
                    <CommentItem key={reply.id} comment={reply} onLike={onLike} />
                ))}
            </div>
        )}
    </div>
);

export default function CommentSection({ comments, onLikeComment, onAddComment }: CommentSectionProps) {
    const [commentText, setCommentText] = useState("");

    const handleSubmit = () => {
        if (commentText.trim()) {
            onAddComment(commentText);
            setCommentText("");
        }
    };

    return (
        <div className="mt-4 pt-3 border-t border-gray-100 bg-gray-50/50 rounded-lg p-3">
            {/* Input area */}
            <div className="mb-4">
                <div className="flex gap-2 mb-2 flex-wrap">
                    {emojis.map(emoji => (
                        <button
                            key={emoji}
                            onClick={() => setCommentText(prev => prev + emoji)}
                            className="hover:bg-gray-200 rounded p-1 text-lg transition-colors"
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Écrire un commentaire..."
                        className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-500 text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={!commentText.trim()}
                        className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${commentText.trim()
                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        Envoyer
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {comments.map(comment => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onLike={onLikeComment}
                    />
                ))}
            </div>
        </div>
    );
}
