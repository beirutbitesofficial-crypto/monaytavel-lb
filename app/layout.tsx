import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mona Travel | B2B & MICE in Lebanon',
  description:
    'Mona Travel is a Lebanon DMC and B2B & MICE specialist for corporate travel, meetings, incentives, conferences, exhibitions and ground handling.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
