import { HttpResponse, http } from 'msw'
import articles from '../db/articles'

export const articlesHandlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json(articles)
  }),
  http.get('/api/articles/:id', ({ params }) => {
    const { id } = params
    const item = articles.find(article => article.id === +id)
    return HttpResponse.json(item)
  }),
]
