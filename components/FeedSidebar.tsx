"use client";
import React, { useEffect, useState } from 'react';
import { useTranslation } from './commons/I18nProvider';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  collapsed?: boolean;
};

export default function FeedSidebar({ collapsed = false }: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  const { t } = useTranslation();

  useEffect(() => {
    const btn = typeof window !== 'undefined' ? document.getElementById('toggleSidebar') : null;
    const handler = () => setIsCollapsed((c) => !c);
    if (btn) btn.addEventListener('click', handler);
    return () => {
      if (btn) btn.removeEventListener('click', handler);
    };
  }, []);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} aria-expanded={!isCollapsed}>
      <div className="sidebar-header">
        <Image src="/lor1.jpg" alt="Logo Yowyob" width={35} height={35} className="logo-image" />
        <span className="app-name">{t('sidebar.appName')}</span>
      </div>

      <nav className="main-nav">
        <ul>
          <li><Link href="#"><i className="fas fa-user-circle icon" /> {t('sidebar.account')}</Link></li>
          <li><Link href="#"><i className="fas fa-folder-open icon" /> {t('sidebar.projects')}</Link></li>
          <li><Link href="/yowbot"><i className="fas fa-robot icon" /> {t('sidebar.yowbot')}</Link></li>
          <li className="active"><Link href="/feed"><i className="fas fa-globe-americas icon" /> {t('sidebar.feed')}</Link></li>
          <li><Link href="#"><i className="fas fa-bell icon" /> {t('sidebar.subscriptions')}</Link></li>
          <li><Link href="/" className="logout-link"><i className="fas fa-sign-out-alt icon" /> {t('sidebar.logout')}</Link></li>
        </ul>
      </nav>

      <div className="sidebar-section" style={{ marginTop: 'auto' }}>
        {/* espace pour éléments footer de la sidebar*/}
      </div>
    </aside>
  );
}
