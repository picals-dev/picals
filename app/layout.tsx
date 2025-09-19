import type { Metadata } from 'next'
import { Noto_Sans, Noto_Sans_SC } from 'next/font/google'

import '../styles/globals.css'
import { Providers } from './providers'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

const notoSansSC = Noto_Sans_SC({
  variable: '--font-noto-sans-sc',
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
    <html lang="zh-CN">
      <body
        className={`${notoSans.variable} ${notoSansSC.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
