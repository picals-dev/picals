'use client'

import { AppProgressProvider } from '@bprogress/next'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <HeroUIProvider navigate={router.push}>
      <ThemeProvider attribute="class">
        <AppProgressProvider>{children}</AppProgressProvider>
      </ThemeProvider>
    </HeroUIProvider>
  )
}
