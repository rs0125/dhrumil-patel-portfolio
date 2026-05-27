import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Montserrat', 'sans-serif'],
        sans: ['var(--font-body)', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'PT Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Light theme tokens — "ink" is dark text, "paper" is the light surface.
        ink: '#1A1C20',
        paper: '#F7F5F0',
        paperDark: '#EFECE4',
        rule: '#D6D2C8',
        muted: '#6B7177',
        accent: '#2563EB',
        accentDark: '#1D4ED8',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '56px',
      },
      letterSpacing: {
        caps: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
