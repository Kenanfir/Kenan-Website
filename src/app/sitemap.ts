import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experiences'
import { education } from '@/data/education'
import { publications } from '@/data/publications'

const BASE_URL = 'https://nandev.dev'

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString()

    // Home page
    const routes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]

    // Project pages
    const projectRoutes = projects.map((project) => ({
        url: `${BASE_URL}/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Experience pages
    const experienceRoutes = experiences.map((experience) => ({
        url: `${BASE_URL}/${experience.slug}`,
        lastModified: currentDate,
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }))

    // Education pages
    const educationRoutes = education.map((edu) => ({
        url: `${BASE_URL}/${edu.slug}`,
        lastModified: currentDate,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }))

    // Publication pages
    const publicationRoutes = publications.map((publication) => ({
        url: `${BASE_URL}/${publication.slug}`,
        lastModified: currentDate,
        changeFrequency: 'yearly' as const,
        priority: 0.8,
    }))

    return [
        ...routes,
        ...projectRoutes,
        ...experienceRoutes,
        ...educationRoutes,
        ...publicationRoutes,
    ]
}
