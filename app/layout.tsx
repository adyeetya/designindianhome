// layout.tsx
'use client'
import Head from 'next/head'
import type { Metadata } from 'next'
import { GlobalStyle } from '../components/GlobalStyles'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import ThemeSwitcher from './ThemeSwitcher'
import Providers from './providers'
import { SpaceProvider } from './SpaceContext'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:text-white">
        <Providers>
          <SpaceProvider>
            <GlobalStyle />
            <header className="dark:text-white"></header>
            <ThemeSwitcher />
            {children}
          </SpaceProvider>
        </Providers>
      </body>
    </html>
  )
}
