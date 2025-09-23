import { Card, CardBody, CardHeader } from '@heroui/card'
import Image from 'next/image'

import LoginForm from '@/components/login/form'
import LoginOAuth from '@/components/login/oauth'

export default function Hana() {
  return (
    <Card className="absolute top-1/2 left-1/2 flex w-9/10 -translate-x-1/2 -translate-y-1/2 items-center justify-center p-4 md:w-92">
      <CardHeader className="flex flex-col items-center justify-center">
        <Image
          src="/banner.webp"
          alt="picals-banner"
          width={180}
          height={75}
          priority
        />
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <LoginOAuth />
        <LoginForm />
      </CardBody>
    </Card>
  )
}
