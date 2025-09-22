import type { Metadata } from 'next'
import { JetBrains_Mono, Noto_Sans_SC } from 'next/font/google'

import '../styles/globals.css'
import { Providers } from './providers'

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-code',
  subsets: ['latin'],
})

const notoSansSC = Noto_Sans_SC({
  variable: '--font-noto',
  subsets: ['latin'],
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
        className={`${notoSansSC.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
