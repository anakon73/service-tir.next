// import { useUserStore } from '@/entities/user'
import { type ApiEndpointsAndSchemas, SuccessfulResponse } from '../lib'

const endpoints = {
  register: {
    url: '/api/register',
    method: 'post',
    schema: SuccessfulResponse,
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

  await fetch(url, { method, body: JSON.stringify({ name, email, password }) })

  return schema
}
