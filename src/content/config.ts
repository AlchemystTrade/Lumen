import { defineCollection, z } from 'astro:content';

const videosCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        source: z.string(),
        sourceUrl: z.string().url().optional(),
        duration: z.string(), // e.g. "12 min"
        ageRange: z.string(), // e.g. "8-12"
        timeOfDay: z.enum(['morning', 'day', 'evening']),
        videoUrl: z.string().url(), // The embed URL
        description: z.string(),
        questions: z.array(z.string()),
    }),
});

export const collections = {
    'videos': videosCollection,
};
