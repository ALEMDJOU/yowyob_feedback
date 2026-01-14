"use client";

import React, { useState } from 'react';
import FeedSidebar from '../../components/FeedSidebar';
import Image from 'next/image';
import Script from 'next/script';

export default function FeedPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Load font-awesome and page-specific CSS */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/feed.css" />

      <div className="dashboard-container">
        <FeedSidebar collapsed={collapsed} />

        <main className="main-content">
          <header className="content-header">
            <div className="header-title">
              <button id="toggleSidebar" className="sidebar-toggle" onClick={() => setCollapsed(c => !c)}>
                <i className="fas fa-bars"></i>
              </button>
              <i className="fas fa-globe-americas title-icon"></i>
              <h1>Fil d'actualité</h1>
            </div>
          </header>

          <div className="control-bar">
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input type="text" placeholder="Rechercher personnes ou entreprises..." />
            </div>
          </div>

          <section className="featured-members-section">
            <h2>Personnes, Entreprises et Écoles à suivre</h2>
            <div className="members-grid-container">
              <div className="member-card person featured-card" data-id="1">
                <img src="https://i.ibb.co/Qf983vG/avatar-placeholder.png" alt="Henri Fofack" width={60} height={60} className="card-avatar" />
                <div className="card-info"><span className="card-name">Henri Fofack</span></div>
                <button className="subscribe-btn"><i className="fas fa-rss"></i> S'abonner</button>
              </div>

              <div className="member-card business featured-card" data-id="2">
                <img src="https://i.ibb.co/6P8N9zR/company-logo.png" alt="Tech Innov S.A." width={60} height={60} className="card-avatar" />
                <div className="card-info"><span className="card-name">Tech Innov S.A.</span></div>
                <button className="subscribe-btn"><i className="fas fa-rss"></i> S'abonner</button>
              </div>

              <div className="member-card person featured-card" data-id="3">
                <img src="https://i.ibb.co/Qf983vG/avatar-placeholder.png" alt="Jean Duport" width={60} height={60} className="card-avatar" />
                <div className="card-info"><span className="card-name">Jean Duport</span></div>
                <button className="subscribe-btn"><i className="fas fa-rss"></i> S'abonner</button>
              </div>

              <div className="member-card business featured-card" data-id="4">
                <img src="https://i.ibb.co/6P8N9zR/company-logo.png" alt="Lycée Blaise Pascal" width={60} height={60} className="card-avatar" />
                <div className="card-info"><span className="card-name">Lycée Blaise Pascal</span></div>
                <button className="subscribe-btn"><i className="fas fa-rss"></i> S'abonner</button>
              </div>

              <div className="member-card person featured-card" data-id="5">
                <img src="https://i.ibb.co/Qf983vG/avatar-placeholder.png" alt="Sophie Martin" width={60} height={60} className="card-avatar" />
                <div className="card-info"><span className="card-name">Sophie Martin</span></div>
                <button className="subscribe-btn"><i className="fas fa-rss"></i> S'abonner</button>
              </div>

            </div>
          </section>

          <hr className="section-separator" />

          <section className="feedback-section">
            <h2>Feedbacks Récents</h2>

            <div className="feedback-card">
              <div className="feedback-header">
                <img src="https://i.ibb.co/6P8N9zR/company-logo.png" alt="Tech Innov" width={45} height={45} className="feedback-avatar" />
                <div className="feedback-meta">
                  <span className="feedback-author">Tech Innov S.A.</span>
                  <span className="feedback-time"><i className="fas fa-clock"></i> Il y a 5 minutes</span>
                </div>
              </div>
              <div className="feedback-content">
                <p>Nous sommes ravis d'annoncer la sortie de notre nouveau produit "Quantum Leap" ! Vos premiers feedbacks sont précieux. Dites-nous ce que vous en pensez !</p>
              </div>
              <div className="feedback-actions">
                <button><i className="fas fa-thumbs-up"></i> J'aime (12)</button>
                <button><i className="fas fa-comment"></i> Je n'aime pas (4)</button>
                <button><i className="fas fa-share"></i> Commenter</button>
              </div>
            </div>

            <div className="feedback-card">
              <div className="feedback-header">
                <img src="https://i.ibb.co/Qf983vG/avatar-placeholder.png" alt="Jean Duport" width={45} height={45} className="feedback-avatar" />
                <div className="feedback-meta">
                  <span className="feedback-author">Jean Duport</span>
                  <span className="feedback-time"><i className="fas fa-clock"></i> 1 heure</span>
                </div>
              </div>
              <div className="feedback-content">
                <p>Le service client de Global Corp est excellent. J'ai posté un feedback sur leur produit hier et j'ai eu une réponse en 30 minutes. Bravo !</p>
              </div>
              <div className="feedback-actions">
                <button><i className="fas fa-thumbs-up"></i> J'aime (45)</button>
                <button><i className="fas fa-comment"></i> Je n'aime pas (4)</button>
                <button><i className="fas fa-share"></i> Commenter</button>
              </div>
            </div>

          </section>
        </main>
      </div>

      {/* feed.js is no longer required for the sidebar toggle (handled in React), but keep it for any extra behaviours if needed */}
      <Script src="/feed.js" strategy="lazyOnload" />
    </>
  );
}
