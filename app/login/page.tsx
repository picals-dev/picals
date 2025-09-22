import { Card, CardBody, CardHeader } from '@heroui/card'
import Image from 'next/image'

import LoginForm from '@/components/login/form'

export default function Hana() {
  return (
    <Card className="w-full max-w-sm mx-auto flex items-center justify-center">
      <CardHeader className="flex flex-col items-center justify-center">
        <div>
          <Image src="/icon.svg" alt="picals" width={36} height={36} priority />
          <span>Picals</span>
        </div>
        <h1>登录</h1>
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
    </Card>
  )
}
