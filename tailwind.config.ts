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
        // Dark theme tokens — "ink" is now light text, "paper" is the dark surface.
        ink: '#ECECEC',
        paper: '#0E0F12',
        paperDark: '#16181D',
        rule: '#2A2D34',
        muted: '#9AA0A6',
        accent: '#60A5FA',
        accentDark: '#3B82F6',
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
