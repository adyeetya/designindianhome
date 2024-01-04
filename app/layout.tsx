// layout.tsx
"use client";
import Head from 'next/head';
import type { Metadata } from 'next';
import { GlobalStyle } from '../components/GlobalStyles'
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import ThemeSwitcher from "./ThemeSwitcher";
import Providers from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@400;700&display=swap"
        />
      </Head>
      <body className='dark:text-white'>
        <Providers>
        <GlobalStyle />
        <header>
          {/* <Navbar/> */}
        </header>
         <ThemeSwitcher/>
        {children}

        </Providers>
      </body>
    </html>
  );
}
