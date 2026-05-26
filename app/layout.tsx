import type { Metadata, Viewport } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
