'use client'

import React from 'react';
import { Navbar } from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <footer>
          Receba novidades e promoções
        </footer>
      </body>
    </html>
  )
}
