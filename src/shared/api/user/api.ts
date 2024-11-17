import { z } from 'zod'
import { type ApiEndpointsAndSchemas, client } from '../lib'

import { UserSchema } from './types'
import { normalizeUser } from './normalizers'

const endpoints = {
  register: {
    url: '/api/register',
    method: 'post',
    schema: UserSchema,
  },
  login: {
    url: '/api/login',
    method: 'post',
    schema: UserSchema,
  },
  setEmailForResetPassword: {
    url: '/api/set-email-for-reset-password',
    method: 'post',
    schema: z.string().email(),
  },
  resetPassword: {
    url: '/api/reset-password',
    method: 'post',
    schema: UserSchema,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as userEndpoints }

export type RegisterUserParams = {
  name: string
  email: string
  password: string
}
export async function registerUser(
  { name, email, password }: RegisterUserParams,
) {
  const { url, method, schema } = endpoints.register

  const data = await client[method](url, { name, email, password }, schema)

  return normalizeUser(data)
}

export type LoginUserParams = { email: string, password: string }
export async function loginUser({ email, password }: LoginUserParams) {
  const { url, method, schema } = endpoints.login

  const data = await client[method](url, { email, password }, schema)

  return normalizeUser(data)
}

export type SetEmailForResetPasswordParams = { email: string }
export async function setEmailForResetPassword(
  { email }: SetEmailForResetPasswordParams,
) {
  const { url, method, schema } = endpoints.setEmailForResetPassword

  const data = await client[method](url, { email }, schema)

  return data
}

export type ResetPasswordParams = { email: string, password: string }
export async function resetPassword({ email, password }: ResetPasswordParams) {
  const { url, method, schema } = endpoints.resetPassword

  const data = await client[method](url, { email, password }, schema)

  return normalizeUser(data)
}
