import { HttpResponse, http } from 'msw'
import type { User } from '@/shared/types'
import type {
  LoginUserParams,
  ResetPasswordParams,
  SetEmailForResetPasswordParams,
} from './api'

export function getUsersFromLocalStorage(): User[] {
  const jsonString = localStorage.getItem('users')
  return jsonString ? JSON.parse(jsonString) : []
}

function saveNewUserToLocalStorage(newUser: User) {
  const users = getUsersFromLocalStorage()

  users.push(newUser)

  const jsonString = JSON.stringify(users)
  localStorage.setItem('users', jsonString)
}

export function updateUserInLocalStorage(updatedUser: User, userIndex: number) {
  const users = getUsersFromLocalStorage()

  users[userIndex] = updatedUser

  localStorage.setItem('users', JSON.stringify(users))
}

export const userHandlers = [
  http.post('/api/register', async ({ request }) => {
    const newUser: User = {
      ...await request.json() as User,
      likedProducts: [],
      orders: [],
      cart: [],
    }

    const users = getUsersFromLocalStorage()

    if (users.some(user => user.email === newUser.email)) {
      return HttpResponse.json('Email is already used', { status: 409 })
    }
    else {
      saveNewUserToLocalStorage(newUser)
      return HttpResponse.json(newUser, { status: 201 })
    }
  }),
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json() as LoginUserParams

    const users = getUsersFromLocalStorage()

    const currentUser = users.find(user => user.email === email)

    if (currentUser && currentUser.password === password) {
      const user = users.find(u => email === u.email)
      return HttpResponse.json(user, { status: 200 })
    }
    else {
      return HttpResponse.json('Incorrect email or password', { status: 401 })
    }
  }),
  http.post('/api/set-email-for-reset-password', async ({ request }) => {
    const { email } = await request.json() as SetEmailForResetPasswordParams

    const users = getUsersFromLocalStorage()

    if (users.some(user => user.email === email)) {
      return HttpResponse.json(email, { status: 200 })
    }
    else {
      return HttpResponse.json('Not found a user with that email', { status: 401 })
    }
  }),
  http.post('/api/reset-password', async ({ request }) => {
    const { email, password } = await request.json() as ResetPasswordParams

    const users = getUsersFromLocalStorage()

    const user = users.find(user => user.email === email)

    if (user && user.password !== password) {
      user.password = password
      localStorage.setItem('users', JSON.stringify(users))
      return HttpResponse.json(user, { status: 200 })
    }
    else {
      return HttpResponse.json(
        'New password can\'t be same as previous password',
        { status: 409 },
      )
    }
  }),
]
