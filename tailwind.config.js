/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            base: "0px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1440px",
            xxxl: "1920px",
        },
        extend: {
            colors: {
                primary: {
                    50: "#fffaf0", // Lightest
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b", // Base
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f", // Darkest
                },
                secondary: {
                    50: "#f9fafb", // Lightest
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280", // Base
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827", // Darkest
                },
                tertiary: {
                    50: "#fafafa", // Lightest
                    100: "#f5f5f5",
                    200: "#e5e5e5",
                    300: "#d4d4d4",
                    400: "#a3a3a3",
                    500: "#737373", // Base
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717", // Darkest
                },
                background: "#ffffff",
                surface: "#f8fafc",
                text: {
                    primary: "#171717",
                    secondary: "#525252",
                    light: "#737373",
                },
                accent: "#f59e0b",
                success: "#10B981",
                warning: "#F59E0B",
                error: "#EF4444",
                info: "#3B82F6",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    xxl: "6rem",
                    xxxl: "7rem",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            fontSize: {
                // Headers
                h1: ["48px", "1.2"],
                "h1-md": ["36px", "1.2"],
                h2: ["36px", "1.3"],
                "h2-md": ["28px", "1.3"],
                h3: ["28px", "1.4"],
                "h3-md": ["24px", "1.4"],
                h4: ["24px", "1.4"],
                "h4-md": ["20px", "1.4"],
                // Paragraphs
                p: ["18px", "1.6"],
                "p-md": ["16px", "1.6"],
                "p-sm": ["14px", "1.6"],
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "fade-out": "fade-out 0.5s ease-out",
                "slide-in": "slide-in 0.5s ease-out",
                "slide-out": "slide-out 0.5s ease-out",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "fade-out": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                "slide-in": {
                    "0%": { transform: "translateY(100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "slide-out": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
            spacing: {
                18: "4.5rem",
                22: "5.5rem",
                30: "7.5rem",
            },
            borderRadius: {
                DEFAULT: "8px",
                sm: "4px",
                md: "8px",
                lg: "12px",
                xl: "16px",
                "2xl": "20px",
            },
            boxShadow: {
                sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                DEFAULT:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
            transitionTimingFunction: {
                DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            transformStyle: {
                "preserve-3d": "preserve-3d",
            },
            perspective: {
                1000: "1000px",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
