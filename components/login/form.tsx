'use client'

import { Button, Form, Input } from '@heroui/react'
import { type FormEvent } from 'react'

export default function LoginForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    console.log(data)
  }

  return (
    <Form className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="请输入有效的邮箱地址～"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="请输入你的邮箱"
        type="email"
      />
      <Input
        isRequired
        errorMessage="请输入有效的密码～"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="请输入你的密码"
        type="password"
      />
      <Button type="submit" variant="bordered">
        登录
      </Button>
    </Form>
  )
}
