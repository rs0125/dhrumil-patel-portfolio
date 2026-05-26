import type { Metadata, Viewport } from 'next';
import { Montserrat, Roboto, PT_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const ptMono = PT_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Dhrumil Patel | Orthopedic Spine Surgeon',
  description:
    'Dr. Dhrumil Patel — Fellowship trained orthopedic spine surgeon offering comprehensive spine care: minimally invasive surgery, deformity correction, trauma, tumors, and pediatric spine disorders.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} ${ptMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
