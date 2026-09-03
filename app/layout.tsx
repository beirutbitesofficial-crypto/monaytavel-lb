import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import LanguageRuntime from './components/LanguageRuntime';
import './globals.css';
import './nav-language-fixes.css';

export const metadata: Metadata = {
  title: 'Mona Travel — Lebanon Travel, B2B & MICE',
  description: 'Mona Travel is a Lebanon-based travel agency and B2B & MICE specialist providing leisure travel, corporate events, incentive programs, conferences and ground handling across Lebanon.',
};

export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  </head><body><LanguageRuntime />{children}</body></html>;
}
