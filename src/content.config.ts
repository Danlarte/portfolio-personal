import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'

const works = defineCollection({
    loader: glob({
        base: "./src/content",
        pattern: "**/*.md",
        // One entry per language sharing the same slug: "es/plutonia", "en/plutonia".
        // Without this, the frontmatter slug would collide between locales.
        generateId: ({ entry }) => entry.replace(/\.md$/, ""),
    }),
    schema: ({image}) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        category: z.enum(["ui-ux-design", "web-design", "art-direction", "product-design", "branding", "custom-development", "creative-dev", "optimization"]),
        services: z.string().max(65),
        year: z.string().max(20),
        featuredImage: image(),
        imageTwo: image(),
        imageThree: image(),
        imageFour: image(),
        liveSite: z.url().optional().or(z.literal("")),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
})

export const collections = { works };
