import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#F7F9FF',
        surface: '#FFFFFF',
        surface2: '#F6F9FF',
        ink: '#0A1838',
        ink2: '#1C2A4D',
        muted: '#5A6A8A',
        hairline: '#E6ECF8',
        pill: '#F0F4FF',
        accent: '#2F6BFF',
        accentDark: '#1F55E6',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '18px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};

export default config;
