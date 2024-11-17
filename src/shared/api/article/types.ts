import { z } from 'zod'
import { PaginatedResponseSchema, dateValidation } from '@/shared/lib/validation'

export const ParagraphSchema = z.object({
  text: z.array(z.string()),
  image: z.string().url(),
})

export const SimilarArticleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  preview_image: z.string().url(),
  created_at: dateValidation,
  updated_at: dateValidation,
})

export const ArticleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  preview_image: z.string(),
  paragraphs: z.array(ParagraphSchema),
  similar_articles: z.array(SimilarArticleSchema),
  created_at: dateValidation,
  updated_at: dateValidation,
})

export const PaginatedArticlesSchema = PaginatedResponseSchema(ArticleSchema)
