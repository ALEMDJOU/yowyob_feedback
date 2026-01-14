// components/Header.tsx
'use client'; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from './I18nProvider';

// Le Header gère son propre état de modale (car c'est une fonctionnalité du Header)
export default function Header() {
    // Header simplified: auth buttons now link to dedicated auth pages.

    const { t, locale, setLocale, supported } = useTranslation();

    return (
        <>
            {/* --- HEADER / NAVBAR --- */}
            <header className="navbar">
                <div className="container">
                    <div className="logo">
                        <Image src="/lor1.jpg" alt="Yowyob Feedback Logo" style={{ height: '50px', width: 'auto' }} width={50} height={50} /> 
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#features">{t('header.features')}</a></li>
                            <li><a href="#how-it-works">{t('header.howItWorks')}</a></li>
                            <li><a href="#testimonials">{t('header.testimonials')}</a></li>
                            <li><a href="#contact">{t('header.contact')}</a></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <Link href="/auth/login" className="btn btn-secondary">{t('header.login')}</Link>
                        <Link href="/auth/register" className="btn btn-primary">{t('header.register')}</Link>

                        {/* Language selector */}
                        <select aria-label="Language" value={locale} onChange={(e) => setLocale(e.target.value as any)} className="lang-select" style={{ marginLeft: '12px' }}>
                          {supported.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
                        </select>
                    </div>
                </div>
            </header>
            {/* Modal removed: auth is now handled on /auth/login and /auth/register */}
        </>
    );
}