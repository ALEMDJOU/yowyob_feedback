"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// styles are imported by the follower layout
import { useParams } from 'next/navigation';

export default function FollowerUserPage() {
  const params = useParams();
  const username = params?.username || 'utilisateur';

  const isSophie = username === 'sophie_martin_dev';

  return (
    <>
      <div className="content-header">
        <div className="header-title">
          <button id="toggleSidebar" className="sidebar-toggle" aria-label="Toggle Sidebar">
            <i className="fas fa-bars"></i>
          </button>
          <h1>Profil Utilisateur</h1>
        </div>
      </div>

      <div className="profile-page">
        <section className="profile-header-ig">
          <div className="profile-avatar-container-ig">
            <Image src={isSophie ? '/images/porwel.jpg' : '/images/porw.jpg'} alt={`Photo de profil de ${username}`} width={150} height={150} className="profile-avatar-ig" />
          </div>

          <div className="profile-info-container-ig">
            <div className="profile-top-row-ig">
              <h1 className="profile-username-ig">{username}</h1>
              <i className="fas fa-check-circle certified-icon-ig"></i>
              <button id="mainFollowBtn" className="btn btn-primary edit-profile-btn-ig">Suivre</button>
              <a href="#" className="settings-icon-ig" aria-label="Plus d'options"><i className="fas fa-ellipsis-h"></i></a>
            </div>

            <div className="profile-stats-ig">
              <span className="stat-item-ig"><span className="stat-number">127</span> feedbacks</span>
              <a href="#" className="stat-item-ig link"><span className="stat-number">3,456</span> abonnés</a>
              <a href="#" className="stat-item-ig link"><span className="stat-number">892</span> abonnements</a>
            </div>

            <div className="profile-bio-ig">
              <p className="profile-name-ig">{isSophie ? 'Sophie Martin | Développeuse Full Stack' : 'Utilisateur Yowyob'}</p>
              <p className="profile-description-ig">{isSophie ? 'Passionnée par le JavaScript et React ⚛️ | Créatrice de contenu tech 💻' : 'Membre actif de la communauté.'}</p>
              <a href="#" className="profile-website-ig">{isSophie ? 'https://sophiemartin.dev' : '#'}</a>
            </div>
          </div>
        </section>

        <hr className="separator-ig" />

        <div className="profile-main-content-grid-list">
          <div className="feedbacks-column-ig">
            <h3 className="section-title"><i className="fas fa-comment-dots"></i> Feedbacks Publics</h3>

            <div className="feedback-item-card">
              <div className="feedback-meta-header">
                <Image src="/images/porw.jpg" alt="Auteur" width={40} height={40} className="meta-avatar" />
                <div className="meta-info">
                  <span className="meta-username">ux1122</span>
                  <span className="meta-date">Il y a 2 jours</span>
                </div>
              </div>
              <p className="feedback-text">"Sophie a fait un travail remarquable sur l'interface utilisateur. Son attention aux détails est impressionnante!"</p>
              <div className="feedback-actions">
                <button className="action-btn"><i className="fas fa-heart"></i> 34</button>
                <button className="action-btn"><i className="fas fa-reply"></i> Répondre</button>
              </div>
            </div>

            <a href="#" className="btn btn-secondary btn-block view-all-btn">Voir tous les 127 feedbacks</a>
          </div>

          <div className="discover-column-ig">
            <h3 className="section-title"><i className="fas fa-user-friends"></i> Abonnés</h3>

            <div className="suggestion-card-ig">
              <Link href="#" className="suggestion-link">
                <Image src="/images/porwel.jpg" alt="marc_lefevre_ux" width={45} height={45} className="suggestion-avatar-ig" />
                <div className="suggestion-info-ig">
                  <span className="suggestion-username-ig">marc_lefevre_ux</span>
                  <span className="suggestion-context-ig">Designer UX/UI</span>
                </div>
              </Link>
              <button className="btn btn-secondary btn-follow-ig">suivre</button>
            </div>

            <a href="#" className="view-all-link-ig" id="toggleSuggestions">Voir tous les 892 abonnements</a>
          </div>
        </div>
      </div>
    </>
  );
}
