import Card from './Card';
import { projects, projectCategories, getProjectsByCategory } from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>PROJECTS</h2>

                {projectCategories.map((cat) => {
                    const categoryProjects = getProjectsByCategory(cat.key);
                    if (categoryProjects.length === 0) return null;

                    return (
                        <div key={cat.key} className={styles.categoryGroup}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryBadge}>{cat.label}</span>
                            </div>
                            <div className={styles.horizontalScroll}>
                                {categoryProjects.map((project) => (
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
