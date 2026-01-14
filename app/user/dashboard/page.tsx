// app/user/dashboard/page.tsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
// Import des icônes pour le menu et les statistiques
import { 
    Home, MessageSquare, Edit3, User, Settings, LogOut, 
    CheckCircle, Clock, BookOpen, ArrowUp, ArrowDown 
} from 'lucide-react';
// Import du fichier de style spécifique
import './dashboard.css';
import { useTranslation } from '@/components/commons/I18nProvider';

// ----------------------------------------------------------------
// INTERFACES DE TYPAGE (TypeScript)
// ----------------------------------------------------------------

interface Stat {
    title: string;
    value: number;
    change: string;
    isPositive: boolean;
    // Utilisation de React.ElementType pour typer les composants Icône
    Icon: React.ElementType; 
}

interface Review {
    title: string;
    date: string;
    // Utilisation d'un "Literal Union Type" pour typer le statut
    status: 'Approved' | 'Pending' | 'Rejected'; 
}


// ----------------------------------------------------------------
// LE COMPOSANT DASHBOARD
// ----------------------------------------------------------------

export default function UserDashboardPage() {
    const { t } = useTranslation();
    
    // Logique d'animation client-side pour les cartes de statistiques
    useEffect(() => {
        const cards = document.querySelectorAll('.stat-card');
        cards.forEach((card, index) => {
            // Déclenchement de l'animation CSS avec un délai séquentiel (150ms)
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 150); 
        });
    }, []); 
    
    // Données structurées (mock data)
    const statsData: Stat[] = [
        {
            title: "Avis Publiés",
            value: 42,
            change: "+12% ce mois",
            isPositive: true,
            Icon: CheckCircle 
        },
        // ... (autres données)
        {
            title: "Avis en Attente",
            value: 8,
            change: "-5% cette semaine",
            isPositive: false,
            Icon: Clock 
        },
        {
            title: "Formations Suivies",
            value: 5,
            change: "2 nouvelles formations",
            isPositive: true,
            Icon: BookOpen 
        },
    ];

    const reviewsData: Review[] = [
        // ... (liste des avis)
        { title: "Stage Développeur Web", date: "il y a 2 jours", status: "Approved" },
        { title: "Formation Marketing Digital", date: "il y a 1 semaine", status: "Pending" },
        { title: "Stage RH - Paris", date: "il y a 2 semaines", status: "Rejected" },
    ];


    const handleProfileClick = () => {
        // Logique de navigation/modale vers le profil
        console.log("Navigation vers /user/profile");
    };


    return (
        // Layout principal Flexbox
        <div className="dashboard-layout">
            
            {/* --- Sidebar (Navigation Statique) --- */}
            <aside className="sidebar">
                <h2>Yowyob Feedback</h2>
                <nav>
                    <ul>
                        <li><a href="#" className="active"><Home size={20} />{t('user.dashboard.title')}</a></li>
                        <li><a href="#"><MessageSquare size={20} />{t('user.dashboard.recentReviewsTitle')}</a></li>
                        <li><a href="#"><Edit3 size={20} />{t('header.features')}</a></li>
                        <li><a href="#"><User size={20} />{t('profileEdit.username')}</a></li>
                        <li><a href="#"><Settings size={20} />{t('header.contact')}</a></li>
                        <li><a href="#"><LogOut size={20} />{t('header.contact')}</a></li>
                    </ul>
                </nav>
                
                {/* Profile Bas de Page (poussé par margin-top: auto en CSS) */}
                <div className="sidebar-profile">
                    <Image 
                        src="/lor1.jpg" 
                        alt="Profil Sarah" 
                        width={60} 
                        height={60} 
                        style={{ borderRadius: '50%', marginBottom: '10px' }} 
                    />
                    <p style={{ color: 'var(--gray-light)', fontSize: '0.9em' }}>{t('user.dashboard.welcome').replace('{name}', 'Sarah')}</p>
                </div>

            </aside>

            {/* --- Main Content (Contenu Principal) --- */}
            <main className="main-content">
                
                {/* Bouton de profil/paramètres Rapide (positionné en absolu) */}
                <button className="profile-button" onClick={handleProfileClick}>
                    <Image 
                        src="/lor1.jpg" 
                        alt="Profil Sarah (Mini)" 
                        width={30} 
                        height={30} 
                        className="rounded-full"
                    />
                </button>


                <h1>{t('user.dashboard.title')} 👋</h1>

                {/* Section 1: Grille de Statistiques (CSS Grid) */}
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        // La classe 'animate' est ajoutée par le useEffect pour l'effet en cascade
                        <div key={index} className="stat-card">
                            <stat.Icon size={30} color="var(--primary-color)" style={{ marginBottom: '10px' }}/>
                            <h3>{stat.title}</h3>
                            <p className="value">{stat.value}</p>
                            <p className={`change ${stat.isPositive ? '' : 'negative'}`}>
                                {stat.isPositive ? <ArrowUp size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> : <ArrowDown size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} />} 
                                {stat.change}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Section 2: Deuxième Grille (Avis et Graphique) */}
                <div className="dashboard-sections">
                    
                    {/* A. Derniers Avis Soumis (Prend 2/3 de la largeur) */}
                    <div className="section-card">
                        <h3>{t('user.dashboard.recentReviewsTitle')}</h3>
                        <ul className="reviews-list">
                            {reviewsData.map((review, index) => (
                                <li key={index} className="review-item">
                                    <div className="review-info">
                                        <strong>{review.title}</strong>
                                        <span>Soumis {review.date}</span>
                                    </div>
                                    <span className={`review-status ${review.status.toLowerCase()}`}>
                                        {review.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* B. Graphique (Placeholder - Prend 1/3 de la largeur) */}
                    <div className="section-card">
                        <h3>Progression Annuelle</h3>
                        <div className="chart-placeholder">
                            [Zone réservée pour un composant de Graphique (ex: Recharts)]
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}