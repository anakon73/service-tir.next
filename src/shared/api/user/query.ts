import { useMutation } from '@tanstack/vue-query'
import { registerUser } from './api'

export function useRegisterUser() {
  return useMutation({
    mutationFn: registerUser,
  })
}
