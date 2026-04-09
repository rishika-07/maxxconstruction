import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    location: z.string(),
    summary: z.string(),
    completionYear: z.number(),
    coverImage: z.string().url(),
    gallery: z.array(z.string().url()),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5),
    project: z.string(),
    order: z.number(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  services,
  testimonials,
  faqs,
};
