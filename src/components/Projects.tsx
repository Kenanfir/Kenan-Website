import Card from './Card';
import { projects, projectYears, getProjectsByYear } from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>PROJECTS</h2>

                {projectYears.map((year) => {
                    const yearProjects = getProjectsByYear(year);
                    if (yearProjects.length === 0) return null;

                    return (
                        <div key={year} className={styles.yearGroup}>
                            <div className={styles.yearHeader}>
                                <span className={styles.yearBadge}>{year}</span>
                            </div>
                            <div className={styles.horizontalScroll}>
                                {yearProjects.map((project) => (
                                    <Card
                                        key={project.slug}
                                        slug={project.slug}
                                        title={project.title}
                                        role={project.role}
                                        description={project.description}
                                        thumbnail={project.thumbnail}
                                        videoUrl={project.videoUrl}
                                        meta={{
                                            teamSize: project.teamSize,
                                            duration: project.duration,
                                            platform: project.platform,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
