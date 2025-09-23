import { z } from 'zod'

import { passwordRegex } from '@/utils/validate'

export const loginSchema = z.object({
  name: z.string().min(1, '用户名不为空！').max(32, '最长用户名为 32 字符！'),
  email: z.email('请输入有效的邮箱地址！'),
  password: z
    .string()
    .regex(
      passwordRegex,
      '密码格式不正确：长度为 6 到 64 位、必须包含至少一个英文字符和一个数字！',
    ),
})
