'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import './YowbotFAB.css';

import Image from 'next/image';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
};

export default function YowbotFAB() {
    // FAB Drag State
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Chat Window State
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'welcome', text: 'Bonjour ! Je suis YowBot. Comment puis-je vous aider aujourd\'hui ?', sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial Load & Drag Handling
    useEffect(() => {
        const saved = localStorage.getItem('yowbot-position');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                x.set(parsed.x || 0);
                y.set(parsed.y || 0);
            } catch (e) {
                console.error("Failed to load Yowbot position", e);
            }
        }
        setIsLoaded(true);
    }, [x, y]);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        const currentPos = { x: x.get(), y: y.get() };
        localStorage.setItem('yowbot-position', JSON.stringify(currentPos));
        setTimeout(() => setIsDragging(false), 100);
    };

    const handleClick = () => {
        if (!isDragging) {
            setIsOpen(!isOpen);
        }
    };

    // Auto-scroll
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, isOpen]);

    // Send Message
    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: "Merci pour votre message ! Je suis encore en cours de développement, mais je serai bientot totalement opérationnel.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    if (!isLoaded) return null;

    return (
        <>
            {/* Chat Window - Fixed Position (Bottom Right default, respected by FAB Z-Index) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="yowbot-chat-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="yowbot-header">
                            <div className="yowbot-info">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="YowBot Logo"
                                    width={35}
                                    height={35}
                                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                                />
                                <div>
                                    <span className="yowbot-name" style={{ marginLeft: '10px' }}>YowBot</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="yowbot-close-btn" aria-label="Réduire">
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="yowbot-body">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="typing-indicator">
                                    <div className="typing-dot"></div>
                                    <div className="typing-dot"></div>
                                    <div className="typing-dot"></div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer */}
                        <form className="yowbot-footer" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                className="yowbot-input"
                                placeholder="Message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" className="yowbot-send-btn" disabled={!inputValue.trim()}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Draggable FAB */}
            <motion.div
                drag
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={handleClick}
                style={{
                    x,
                    y,
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 9999,
                    cursor: 'grab',
                    touchAction: 'none'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, cursor: 'grabbing' }}
            >
                <div
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        color: 'white',
                        fontSize: '24px'
                    }}
                >
                    {/* The requested Icon */}
                    <i className="fas fa-robot"></i>
                </div>
            </motion.div>
        </>
    );
}
