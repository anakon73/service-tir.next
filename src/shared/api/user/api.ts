import { z } from 'zod'
import { type ApiEndpointsAndSchemas, handleError } from '../lib'

import { normalizeUser } from './normalizers'
import { UserSchema } from './types'

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

  const response = await fetch(
    url,
    { method, body: JSON.stringify({ name, email, password }) },
  )

  return normalizeUser(await handleError(response, schema))
}

export type LoginUserParams = {
  email: string
  password: string
}
export async function loginUser({ email, password }: LoginUserParams) {
  const { url, method, schema } = endpoints.login

  const response = await fetch(
    url,
    { method, body: JSON.stringify({ email, password }) },
  )

  return normalizeUser(await handleError(response, schema))
}

export type SetEmailForResetPasswordParams = { email: string }
export async function setEmailForResetPassword(
  { email }: SetEmailForResetPasswordParams,
) {
  const { url, method, schema } = endpoints.setEmailForResetPassword

  const response = await fetch(url, { method, body: JSON.stringify({ email }) })

  return handleError(response, schema)
}

export type ResetPasswordParams = { email: string, password: string }
export async function resetPassword({ email, password }: ResetPasswordParams) {
  const { url, method, schema } = endpoints.resetPassword

  const response = await fetch(url, { method, body: JSON.stringify({ email, password }) })

  return normalizeUser(await handleError(response, schema))
}
