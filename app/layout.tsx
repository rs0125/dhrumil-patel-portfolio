import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const interDisplay = Inter({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
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
      className={`${inter.variable} ${interDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
