'use client'

import { Input, Kbd, useDisclosure } from '@heroui/react'
import { SearchIcon } from 'lucide-react'

export default function SearchInput() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className="z-20 w-80">
        <Input
          variant="bordered"
          placeholder="搜索"
          startContent={<SearchIcon className="text-text-0" />}
          endContent={<Kbd keys={['command']}>K</Kbd>}
          onFocus={onOpen}
        />
      </div>
      {isOpen && (
        <>
          <div className="z-20 rounded-2xl bg-white p-4">
            <p>这是一段内容。</p>
          </div>
          <div className="fixed z-10 size-dvh bg-black/50" onClick={onClose} />
        </>
      )}
    </>
  )
}
