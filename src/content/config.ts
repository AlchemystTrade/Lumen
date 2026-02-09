import { defineCollection, z } from 'astro:content';

const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    embedUrl: z.string(),
    duration: z.string().optional(),
  }),
});

export const collections = {
  videos: videosCollection,
};
