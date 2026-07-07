import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/data/projects';
import { getExperienceBySlug, experiences } from '@/data/experiences';
import { getEducationBySlug, education } from '@/data/education';
import { getPublicationBySlug, publications } from '@/data/publications';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

// Generate static params for all detail pages
export function generateStaticParams() {
    const projectSlugs = projects.filter((p) => !p.archived).map((p) => ({ slug: p.slug }));
    const experienceSlugs = experiences.map((e) => ({ slug: e.slug }));
    const educationSlugs = education.map((e) => ({ slug: e.slug }));
    const publicationSlugs = publications.map((p) => ({ slug: p.slug }));

    return [...projectSlugs, ...experienceSlugs, ...educationSlugs, ...publicationSlugs];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function DetailPage({ params }: PageProps) {
    const { slug } = await params;

    // Try to find the item in any category
    const project = getProjectBySlug(slug);
    const experience = getExperienceBySlug(slug);
    const educationItem = getEducationBySlug(slug);
    const publication = getPublicationBySlug(slug);

    const item = project || experience || educationItem || publication;

    if (!item) {
        notFound();
    }

    // Determine type and format info
    let type: string;
    let info: { label: string; value: string }[] = [];

    if (project) {
        type = 'project';
        info = [
            { label: 'Role', value: project.info.role },
            { label: 'Team Size', value: project.info.teamSize },
            { label: 'Time Frame', value: project.info.timeFrame },
            { label: 'Engine', value: project.info.engine },
        ];
    } else if (experience) {
        type = 'experience';
        info = [
            { label: 'Role', value: experience.info.role },
            { label: 'Organization', value: experience.info.organization },
            { label: 'Duration', value: experience.info.duration },
            { label: 'Type', value: experience.info.type },
        ];
    } else if (educationItem) {
        type = 'education';
        info = [
            { label: 'Degree', value: educationItem.info.degree },
            { label: 'Institution', value: educationItem.info.institution },
            { label: 'Duration', value: educationItem.info.duration },
            { label: 'Major', value: educationItem.info.major },
            ...(educationItem.info.gpa ? [{ label: 'GPA', value: educationItem.info.gpa }] : []),
        ];
    } else if (publication) {
        type = 'publication';
        info = [
            { label: 'Venue', value: publication.info.venue },
            { label: 'Date', value: publication.info.date },
            { label: 'Type', value: publication.info.type },
            ...(publication.info.doi ? [{ label: 'DOI', value: publication.info.doi }] : []),
        ];
    } else {
        type = 'item';
    }

    // Get video URL if available (only for projects)
    const videoUrl = project?.videoUrl;
    const appStoreUrl = project?.appStoreUrl;
    const itchUrl = project?.itchUrl;

    return (
        <>
            <Header />
            <main className={styles.detailPage}>
                <div className={styles.container}>
                    <Link href="/" className={styles.goBack}>
                        <span className={styles.backBar}></span>
                        <span className={styles.backText}>⇐ GO_BACK</span>
                    </Link>

                    {videoUrl && (
                        <div className={styles.heroVideo}>
                            <iframe
                                src={videoUrl}
                                title={item.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}

                    <h1 className={styles.title}>{item.title}</h1>

                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h3 className={styles.boxTitle}>ABOUT</h3>
                            <p className={styles.boxContent}>{item.about}</p>
                        </div>

                        <div className={styles.box}>
                            <h3 className={styles.boxTitle}>{type.toUpperCase()} INFO</h3>
                            {info.map((infoItem) => (
                                <div key={infoItem.label} className={styles.infoItem}>
                                    <span className={styles.infoLabel}>{infoItem.label}</span>
                                    <span className={styles.infoValue}>{infoItem.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {item.sections.map((section, index) => (
                        <div key={index} className={styles.section}>
                            <h3 className={styles.sectionHeading}>{section.heading}</h3>
                            <p className={styles.sectionContent}>{section.content}</p>
                        </div>
                    ))}

                    {/* External Links */}
                    <div className={styles.externalLinks}>
                        {appStoreUrl && (
                            <a
                                href={appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.externalButton}
                            >
                                📱 App Store →
                            </a>
                        )}
                        {itchUrl && (
                            <a
                                href={itchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.externalButton}
                            >
                                🎮 Play on itch.io →
                            </a>
                        )}
                        {publication && (
                            <a
                                href={publication.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.viewPaper}
                            >
                                📄 View Full Paper →
                            </a>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
