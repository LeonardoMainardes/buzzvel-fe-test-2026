import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luma Learning | Learn Without Limits',
  description:
    'Discover new skills, explore inspiring courses, and learn at your own pace with Luma Learning.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn('h-full', inter.variable, 'font-sans', 'antialiased')}>
      <body
        className={`flex min-h-full flex-col overflow-y-auto scrollbar-hide ${inter.variable} ${plusJakartaSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
