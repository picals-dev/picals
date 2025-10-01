'use client'

import { Image } from '@heroui/react'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HEADER_HIDDEN_PATHNAMES } from '@/constants/pathname'

import SearchInput from './search-input'

export default function Header() {
  const pathname = usePathname()

  if (HEADER_HIDDEN_PATHNAMES.includes(pathname)) {
    return null
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 w-full bg-white/80 shadow-md backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <Link href="/">
          <NextImage
            src="/banner.webp"
            alt="picals-banner"
            width={96}
            height={40}
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          <SearchInput />
          <button className="cursor-pointer">
            <Image
              as={NextImage}
              src="https://static-r2.caelum.moe/avatar.webp"
              alt="picals-banner"
              width={48}
              height={48}
              priority
            />
          </button>
        </div>
      </div>
    </header>
  )
}
