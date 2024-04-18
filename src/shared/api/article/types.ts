import { z } from 'zod'

export const ParagraphSchema = z.object({
  image: z.string().url(),
  text: z.array(z.string()),
})

export const BaseArticleSchema = z.object({
  id: z.number(),
  date: z.string(),
  name: z.string(),
  description: z.string(),
  preview_image: z.string().url(),
  paragraphs: z.array(ParagraphSchema),
})

export const ArticleSimilarSchema = BaseArticleSchema.omit({ paragraphs: true })

export const ArticleSchema = BaseArticleSchema.extend({
  similar_articles: z.array(BaseArticleSchema),
})
