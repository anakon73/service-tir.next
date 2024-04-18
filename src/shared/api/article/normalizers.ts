import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Article } from '@/shared/types'
import type { ArticleSchema, ArticleSimilarSchema, BaseArticleSchema } from './types'

export function normalizeBaseArticle(
  article: z.infer<typeof BaseArticleSchema>,
): Omit<Article, 'similarArticles'> {
  const { date: articleDate, preview_image } = article

  const date = new Date(articleDate)

  return {
    ...objectPick(article, [
      'description',
      'id',
      'name',
      'paragraphs',
    ]),
    date,
    previewImage: preview_image,
  }
}

export function normalizeArticleSimilar(
  article: z.infer<typeof ArticleSimilarSchema>,
): Omit<Article, 'paragraphs' | 'similarArticles'> {
  const { date: articleDate, preview_image } = article

  const date = new Date(articleDate)

  return {
    ...objectPick(article, [
      'description',
      'id',
      'name',
    ]),
    date,
    previewImage: preview_image,
  }
}

export function normalizeArticle(
  article: z.infer<typeof ArticleSchema>,
): Article {
  return {
    ...normalizeBaseArticle(article),
    similarArticles: article.similar_articles.map((a) => normalizeArticleSimilar(a)),
  }
}
