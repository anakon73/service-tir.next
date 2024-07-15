import { HttpResponse, http } from 'msw'
import { useUserStore } from '@/entities/user'
import type { User } from '@/shared/types'

export const userHandlers = [
  http.post('/api/register', async ({ request }) => {
    const data = await request.json()
    const userStore = useUserStore()
    return HttpResponse.json(userStore.registerNewUser(data as User))
  }),
]
