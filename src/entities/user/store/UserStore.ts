import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import type { User } from '@/shared/types'

export const useUserStore = defineStore('user', () => {
  const user = useLocalStorage<User | null>(
    'user',
    null,
    {
      serializer: {
        read: (v: any) => v ? JSON.parse(v) : null,
        write: (v: any) => JSON.stringify(v),
      },
    },
  )

  const emailForResetPassword = useLocalStorage<string | null>(
    'emailForPasswordReset',
    null,
  )

  function setUser(newUser: User) {
    user.value = newUser
  }

  function logout() {
    user.value = null
  }

  function setEmail(email: string | null) {
    emailForResetPassword.value = email
  }

  return { user, setUser, logout, emailForResetPassword, setEmail }
})
