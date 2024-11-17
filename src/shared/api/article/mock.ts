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

const articles = Array.from({ length: 20 }, () => makeArticleSchemaMock())

export const articlesHandlers = [
  http.get(`${API_URL}/api/articles`, () => {
    return HttpResponse.json(articles)
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
