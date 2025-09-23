export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])[\w!@#$%^&*()+=\\/-]{6,1007}$/

export const isValidPassword = (pwd: string) => {
  return passwordRegex.test(pwd)
}
