"use client";
import React from 'react';
import { useTranslation } from './I18nProvider';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

export default function FeedSidebar({ isCollapsed, toggleSidebar }: Props) {
  const { t } = useTranslation();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/');

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} aria-expanded={!isCollapsed}>
      <div className="sidebar-header">
        <Image src="/images/logo.jpg" alt="Logo Yowyob" width={35} height={35} className="logo-image" />
        <span className="app-name">{t('sidebar.appName')}</span>
      </div>

      <nav className="main-nav">
        <ul>
          <li className={isActive('/dashboard/feed') ? 'active' : ''}><Link href="/dashboard/feed"><i className="fas fa-globe-americas icon" /> <span>{t('sidebar.feed')}</span></Link></li>
          <li className={isActive('/dashboard/follow') ? 'active' : ''}><Link href="/dashboard/follow"><i className="fas fa-bell icon" /> <span>{t('sidebar.subscriptions')}</span></Link></li>
          <li className={isActive('/dashboard/project') ? 'active' : ''}><Link href="/dashboard/project"><i className="fas fa-folder-open icon" /> <span>{t('sidebar.projects')}</span></Link></li>
          <li className={isActive('/dashboard/account') ? 'active' : ''}><Link href="/dashboard/account"><i className="fas fa-user-circle icon" /> <span>{t('sidebar.account')}</span></Link></li>
          <li><Link href="/" className="logout-link"><i className="fas fa-sign-out-alt icon" /> <span>{t('sidebar.logout')}</span></Link></li>
        </ul>
      </nav>

      <div className="sidebar-section" style={{ marginTop: 'auto' }}>
        {/* toggle button for sidebar - shown when collapsed or simply available? 
            Actually, the request implies using the hamburger menu to toggle. 
            We might not need a button INSIDE the sidebar if the button is outside.
            However, typically a desktop toggle might exist here or in the header.
            I will keep the sidebar structure clean and rely on the layout to provide the toggle button.
        */}
      </div>
    </aside >
  );
}
