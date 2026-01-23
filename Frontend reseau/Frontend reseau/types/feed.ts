export interface Comment {
    id: string;
    author: string;
    text: string;
    avatar?: string;
    likes: number;
    liked: boolean;
    replies: Comment[];
}

export interface ProjectInfo {
    id: string;
    name: string;
    description?: string;
}

export interface FeedbackData {
    id: string;
    author: string;
    authorAvatar: string;
    authorHeadline?: string; // e.g. "Fullstack Dev @ Yowyob"
    time: string;
    project?: ProjectInfo; // The project being reviewed
    content: string;
    likes: number;
    liked: boolean;
    comments: Comment[];
    type?: 'person' | 'business';
}
