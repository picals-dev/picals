import type { Metadata } from 'next'
import { JetBrains_Mono, Noto_Sans_SC } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import Header from '@/components/header'
import { cn } from '@/utils/cn'

import '../styles/globals.css'
import { Providers } from './providers'

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-code',
})

const notoSansSC = Noto_Sans_SC({
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'Picals',
  description: 'A illustrations web app.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <body
        className={cn(
          notoSansSC.variable,
          jetBrainsMono.variable,
          'antialiased',
          'min-h-dvh',
          'aurora-bg',
        )}
      >
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
