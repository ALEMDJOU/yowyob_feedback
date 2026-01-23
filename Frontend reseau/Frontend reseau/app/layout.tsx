// app/layout.tsx
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google'; // Modern font
import { I18nProvider } from '@/components/I18nProvider';
import YowbotFAB from '@/components/YowbotFAB';

// Configuration de la police Plus Jakarta Sans
const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans', // CSS Variable for Tailwind
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
    <html lang="fr" className={fontSans.variable}>
      <body className="font-sans antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
        <YowbotFAB />
      </body>
    </html>
  );
}