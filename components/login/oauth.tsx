'use client'

import { Button } from '@heroui/react'

import GithubIcon from '../icons/github'
import GoogleIcon from '../icons/google'

export default function LoginOAuth() {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <p className="text-sm">选择已有的账号进行登录</p>
      <div className="flex gap-2">
        <Button isIconOnly variant="light" aria-label="Google">
          <GoogleIcon />
        </Button>
        <Button isIconOnly variant="light" aria-label="Github">
          <GithubIcon />
        </Button>
      </div>
    </div>
  )
}
