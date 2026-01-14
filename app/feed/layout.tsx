import React from 'react';
import MagicPageEnhancer from '@/components/MagicPageEnhancer';

export const metadata = {
  title: 'Fil d\'actualité - Yowyob Feedback',
};

export default function FeedLayout({ children }: { children: React.ReactNode }) {
  // Layout spécifique pour /feed : on masque le header et le footer globaux via un style
  // (le root layout ne peut pas être modifié depuis un layout enfant),
  // donc on applique une règle CSS locale pour cacher les éléments .navbar et .footer.
  return (
    <>
      <style>{`.navbar, .footer { display: none !important; } .main { margin: 0; }`}</style>
      <MagicPageEnhancer>
        {children}
      </MagicPageEnhancer>
    </>
  );
}
