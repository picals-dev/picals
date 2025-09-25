'use client'

import { Image, Input, Kbd } from '@heroui/react'
import { SearchIcon } from 'lucide-react'
import NextImage from 'next/image'
import Link from 'next/link'

import SearchInput from './search-input'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-white/80 p-4 shadow-md backdrop-blur">
      <Link href="/">
        <NextImage
          src="/banner.webp"
          alt="picals-banner"
          width={96}
          height={40}
          priority
        />
      </Link>

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
    </header>
  )
}
