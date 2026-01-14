import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  i18n: {
    locales: ['fr','en','es','de'],
    defaultLocale: 'fr',
  },
};

export default nextConfig;
