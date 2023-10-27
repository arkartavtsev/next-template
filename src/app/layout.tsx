import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';


const title = 'App title';
const description = 'App description';
const lang = 'ru';


export const metadata: Metadata = {
  title,
  description
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>
    <html lang={ lang }>
      <body>
        { children }
      </body>
    </html>
  </>
};
