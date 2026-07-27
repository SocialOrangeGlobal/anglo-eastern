import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'Anglo-Eastern | Ship Management',
  description: 'Pioneers in ship management for over 50 years',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
