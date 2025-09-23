'use client'

import { Button, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'

import { useZodVerify } from '@/hooks/useZodVerify'
import { authClient } from '@/lib/auth-client'
import { loginSchema } from '@/validations/auth'

type LoginSchema = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [loading] = useState(false)

  const { control, watch, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const handleSubmit = async () => {
    const { success, errorList, result } = useZodVerify(loginSchema, watch())
    if (!success) {
      toast.error(errorList[0].message)
      return
    }
    const { email, password, name } = result

    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: (ctx) => {
          console.log(ctx)
          toast.success('注册成功')
          reset()
        },
        onError: (ctx) => {
          toast.error(ctx.error.message)
          reset()
        },
      },
    )
  }

  return (
    <form className="flex w-full flex-col gap-4">
      <Controller
        name="name"
        control={control}
        render={({ field, formState: { errors } }) => (
          <Input
            {...field}
            isRequired
            label="用户名"
            type="text"
            variant="bordered"
            autoComplete="name"
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, formState: { errors } }) => (
          <Input
            {...field}
            isRequired
            label="邮箱"
            type="email"
            variant="bordered"
            autoComplete="email"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, formState: { errors } }) => (
          <Input
            {...field}
            isRequired
            label="密码"
            type="password"
            variant="bordered"
            isInvalid={!!errors.password}
            autoComplete="current-password"
            errorMessage={errors.password?.message}
          />
        )}
      />
      <Button
        color="primary"
        isDisabled={loading}
        isLoading={loading}
        onPress={handleSubmit}
      >
        登录
      </Button>
    </form>
  )
}
