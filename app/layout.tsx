import type React from 'react';
import type { Metadata, Viewport } from 'next';

import { introSignalPersonalDocument } from '@/data/sites/intro-signal-personal';

import './globals.css';

const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <rect width="16" height="16" rx="3" fill="#101010"/>
  <path d="M3 4h10v1.8L7.2 12.2H13V14H3v-1.8l5.8-6.4H3z" fill="#f3f0e7"/>
</svg>
`;

export const metadata: Metadata = {
  metadataBase: new URL('https://intro.zondev.top'),
  title: introSignalPersonalDocument.title,
  description: introSignalPersonalDocument.description,
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`,
        type: 'image/svg+xml',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#f3f0e7',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
