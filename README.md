# Yowyob Feedback

> Plateforme Next.js pour partager et consulter des feedbacks sur stages, formations et expériences professionnelles.

## Aperçu
- Framework : Next.js (App Router)
- Langage : TypeScript + React
- Internationalisation : JSON par langue dans `locales/` (ex: `locales/fr.json`, `locales/en.json`, ...)
- Provider i18n léger : `components/commons/I18nProvider.tsx`

## Structure importante
- `app/` — pages et layouts (Next.js app router)
- `components/` — composants réutilisables (Header, Footer, LandingPage, ...)
- `components/commons/` — providers et utilitaires partagés (I18nProvider)
- `locales/` — fichiers de traduction JSON
- `public/` — assets (images, scripts, styles publics)

## Installation (développement)
1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Ouvrir : http://localhost:3000

## Comment fonctionnent les traductions
- Les traductions se trouvent dans `locales/{lang}.json`.
- Utiliser le hook `useTranslation()` dans les composants clients pour accéder à :
  - `t(key)` — récupérer la chaîne traduite (ex : `t('header.features')`)
  - `setLocale(lang)` — changer la langue (ex : `setLocale('en')`)

Exemple :
```tsx
const { t, setLocale } = useTranslation();
return <h1>{t('landing.welcomeTitle')}</h1>;
```

## Scripts utiles
- `npm run dev` — démarre le serveur de développement
- `npm run build` — génère la build production
- `npm run start` — démarre le serveur en production

## Bonnes pratiques
- Ne pas committer `node_modules/` ni les fichiers `.env` (déjà ajoutés dans `.gitignore`).
- Ajouter de nouvelles clés de traduction dans chaque fichier `locales/*.json`.
- Préférer les composants Server pour le rendu quand possible, et convertir uniquement les composants nécessitant de l'interaction en Client Components (`"use client"`).

## Contribution
1. Forkez le dépôt
2. Créez une branche `feature/xxx`
3. Ajoutez des tests et vérifiez le typecheck (`npx tsc --noEmit`)
4. Ouvrez une Pull Request

## Licence
À définir
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
