import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1440px",
        },
        fontFamily: {
            rajdhani: 'var(--font-rajdhani)'
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                    hover: "var(--primary-hover)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    hover: "var(--accent-hover)",
                }
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
