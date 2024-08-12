import { HttpResponse, http } from 'msw'
import type { User } from '@/shared/types'

function getUsersFromLocalStorage(): User[] {
  const jsonString = localStorage.getItem('users')
  return jsonString ? JSON.parse(jsonString) : []
}

function saveNewUserToLocalStorage(newUser: User) {
  const users = getUsersFromLocalStorage()

  users.push(newUser)

  const jsonString = JSON.stringify(users)
  localStorage.setItem('users', jsonString)
}

export const userHandlers = [
  http.post('/api/register', async ({ request }) => {
    const newUser = {
      ...await request.json() as User,
      liked_products: [],
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
    const userData = await request.json() as User

    const users = getUsersFromLocalStorage()

    const currentUser = users.find(user => user.email === userData.email)

    if (currentUser && currentUser.password === userData.password) {
      const user = users.find(u => userData.email === u.email)
      return HttpResponse.json(user, { status: 200 })
    }
    else {
      return HttpResponse.json('Incorrect email or password', { status: 401 })
    }
  }),
  http.post('/api/set-email-for-reset-password', async ({ request }) => {
    const { email } = await request.json() as { email: string }

    const users = getUsersFromLocalStorage()

    if (users.some(user => user.email === email)) {
      return HttpResponse.json(email, { status: 200 })
    }
    else {
      return HttpResponse.json('Not found a user with that email', { status: 401 })
    }
  }),
  http.post('/api/reset-password', async ({ request }) => {
    const data = await request.json() as { email: string, password: string }

    const users = getUsersFromLocalStorage()

    const userIndex = users.findIndex(user => user.email === data.email)
    const user = users[userIndex]

    if (user.password !== data.password) {
      user.password = data.password
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
