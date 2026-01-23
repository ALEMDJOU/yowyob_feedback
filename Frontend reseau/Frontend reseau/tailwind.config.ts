import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6A1B9A', // Brand Purple
                    light: '#8E24AA',
                    dark: '#4A00B7',
                },
                linkedin: {
                    bg: '#F3F2EF', // Keep for dashboard bg if needed, or revert
                }
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
            },
            maxWidth: {
                'dashboard': '100%', // Full width override
            }
        },
    },
    plugins: [],
};
export default config;
