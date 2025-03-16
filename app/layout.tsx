import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParticlesScript from '../components/ParticlesScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vraj Patel - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ParticlesScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}