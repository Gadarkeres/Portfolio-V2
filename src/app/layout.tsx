import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header';

export const roboto = Roboto({ weight:'400'});

export const metadata: Metadata = {
  title: 'Portfolio - Matheus',
  description: 'Portfolio Matheus - Desenvolvedor Front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} dark`}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
