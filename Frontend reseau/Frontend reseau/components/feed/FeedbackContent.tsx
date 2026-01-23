import React from 'react';

interface FeedbackContentProps {
    content: string;
}

export default function FeedbackContent({ content }: FeedbackContentProps) {
    return (
        <div className="mb-6 text-gray-800 text-[16px] leading-[1.7]">
            <p>{content}</p>
        </div>
    );
}
