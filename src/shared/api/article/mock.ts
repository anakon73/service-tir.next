import type { z } from 'zod'
import { faker as f } from '@faker-js/faker'
import { HttpResponse, http } from 'msw'

import { API_URL } from '@/shared/config'
import type { ArticleSchema, SimilarArticleSchema } from './types'
import type { Article } from '@/shared/types'
import { normalizeArticle } from './normalizers'

export function makeSimilarArticleSchemaMock(
): z.infer<typeof SimilarArticleSchema> {
  const createdAt = f.date.anytime()

  return {
    id: f.number.int(),
    name: f.company.name(),
    description: f.lorem.paragraph(1),
    preview_image: f.image.urlLoremFlickr({ category: 'news' }),
    created_at: createdAt,
    updated_at: createdAt,
  }
}

export function makeArticleSchemaMock(): z.infer<typeof ArticleSchema> {
  const createdAt = f.date.anytime()

  return {
    id: f.number.int(),
    name: f.company.name(),
    description: f.lorem.paragraph(1),
    similar_articles: Array.from(
      { length: 5 },
      () => makeSimilarArticleSchemaMock(),
    ),
    paragraphs: [
      {
        image: f.image.urlLoremFlickr({ category: 'news' }),
        text: [f.lorem.paragraph(5), f.lorem.paragraph(5)],
      },
      {
        image: f.image.urlLoremFlickr({ category: 'news' }),
        text: [f.lorem.paragraph(5), f.lorem.paragraph(5)],
      },
    ],
    preview_image: f.image.urlLoremFlickr({ category: 'news' }),
    created_at: createdAt,
    updated_at: createdAt,
  }
}

export function makeArticleMock(): Article {
  return normalizeArticle(makeArticleSchemaMock())
}

const articles = Array.from({ length: 60 }, () => makeArticleSchemaMock())

export const articlesHandlers = [
  http.get(`${API_URL}/api/articles`, ({ request }) => {
    const url = new URL(request.url)

    const page = +url.searchParams.get('page')!

    const startIndex = (+page! - 1) * 12
    const endIndex = startIndex + 12

    const paginatedArticles = articles.slice(startIndex, endIndex)

    return HttpResponse.json({
      data: paginatedArticles,
      current_page: +page!,
      per_page: 12,
      total: articles.length,
      last_page: articles.length / 12,
    })
  }),
  http.get(`${API_URL}/api/articles/:id`, ({ params }) => {
    const { id } = params

    if (articles.findIndex(article => article.id === +id) === -1) {
      const item = articles.find(article => article.id === articles[0].id)!
      return HttpResponse.json(item)
    }
    else {
      const item = articles.find(article => article.id === +id)
      return HttpResponse.json(item)
    }
  }),
]
