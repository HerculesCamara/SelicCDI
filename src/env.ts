import { z } from 'zod'

const envSchema = z.object({
  BCB_API_URL_SELIC: z.string(),
  BCB_API_URL_CDI: z.string(),
})

export const env = envSchema.parse(process.env)
