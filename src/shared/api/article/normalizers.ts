import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Article, Pagination, SimilarArticles } from '@/shared/types'
import type {
  ArticleSchema,
  PaginatedArticlesSchema,
  SimilarArticleSchema,
} from './types'
import { normalizePagination } from '../lib'

export function normalizeSimilarArticles(
  article: z.infer<typeof SimilarArticleSchema>,
): SimilarArticles {
  const { created_at, preview_image, updated_at } = article

  return {
    ...objectPick(article, ['description', 'id', 'name']),
    createdAt: created_at,
    previewImage: preview_image,
    updatedAt: updated_at,
  }
}

export function normalizeArticle(
  article: z.infer<typeof ArticleSchema>,
): Article {
  const { created_at, preview_image, updated_at, similar_articles } = article

  return {
    ...objectPick(article, ['description', 'id', 'name', 'paragraphs']),
    createdAt: created_at,
    previewImage: preview_image,
    updatedAt: updated_at,
    similarArticles: similar_articles.map(normalizeSimilarArticles),
  }
}

export function normalizePaginatedArticles(
  rawData: z.infer<typeof PaginatedArticlesSchema>,
): Pagination<Article> {
  return normalizePagination(rawData, normalizeArticle)
}
