// app/layout.tsx
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/commons/Header'; // 👈 Import depuis commons
import Footer from '@/components/commons/Footer'; // 👈 Import depuis commons
import { I18nProvider } from '@/components/commons/I18nProvider';
import MagicPageEnhancer from '@/components/MagicPageEnhancer';

// Configuration de la police Montserrat
const montserrat = Montserrat({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Métadonnées (pour le SEO)
export const metadata = {
  title: 'Yowyob Feedback - La plateforme ultime',
  description: 'La plateforme ultime pour émettre et consulter des feedbacks sur les stages et formations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        {/* MagicPageEnhancer enveloppe tout pour les particules et l'animation d'entrée globale */}
        <MagicPageEnhancer>
          <I18nProvider>
            {/* Le Header est global sur toutes les pages */}
            <Header /> 

            {/* Le contenu spécifique de la page (LandingPage) est rendu ici */}
            <main>
              {children} 
            </main>
            
            {/* Le Footer est global sur toutes les pages */}
            <Footer /> 
          </I18nProvider>
        </MagicPageEnhancer>
      </body>
    </html>
  );
}