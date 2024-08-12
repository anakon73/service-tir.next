import { useMutation } from '@tanstack/vue-query'
import { loginUser, registerUser, resetPassword, setEmailForResetPassword } from './api'

export function useRegisterUser() {
  return useMutation({ mutationFn: registerUser })
}

export function useLoginUser() {
  return useMutation({ mutationFn: loginUser })
}

export function useSetEmailForResetPassword() {
  return useMutation({ mutationFn: setEmailForResetPassword })
}

export function useResetPassword() {
  return useMutation({ mutationFn: resetPassword })
}
