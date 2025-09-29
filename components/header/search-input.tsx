'use client'

import {
  Button,
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@heroui/react'
import { SearchIcon } from 'lucide-react'

export default function SearchInput() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        variant="bordered"
        radius="full"
        startContent={<SearchIcon className="text-text-0" />}
        endContent={<Kbd keys={['command']}>K</Kbd>}
        className="text-text-0"
        onPress={onOpen}
      >
        搜索
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
        <ModalContent>
          <ModalHeader>
            <Input
              variant="underlined"
              placeholder="搜索"
              startContent={<SearchIcon className="text-text-0" />}
              onFocus={onOpen}
            />
          </ModalHeader>
          <ModalBody>
            <p>搜索结果</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
