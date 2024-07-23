import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

import type { User } from '@/shared/types'
import { SuccessfulResponseMock } from '@/shared/api/lib'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])
  const user = ref<User | null>(null)
  const loginError = ref<string | null>(null)

  const usersInLocalStorage = localStorage.getItem('users')
  if (usersInLocalStorage)
    users.value = JSON.parse(usersInLocalStorage)._value

  function registerNewUser(newUser: User) {
    users.value.push(newUser)

    return SuccessfulResponseMock
  }

  function login(userData: Omit<User, 'name'>) {
    loginError.value = null

    const currentUser = users.value.find(u => u.email === userData.email)

    if (currentUser) {
      if (currentUser.password === userData.password) {
        user.value = currentUser

        return SuccessfulResponseMock
      }
      else {
        loginError.value = 'Incorrect email or password'
      }
    }
    else {
      loginError.value = 'Incorrect email or password'
    }
  }

  function logout() {
    user.value = null
  }

  watch(users, () => {
    localStorage.setItem('users', JSON.stringify(users))
  }, { deep: true })

  return { users, user, loginError, registerNewUser, login, logout }
})
