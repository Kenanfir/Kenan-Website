import Link from 'next/link';
import { experienceCategories, getExperiencesByCategory } from '@/data/experiences';
import styles from './Experiences.module.css';

export default function Experiences() {
    return (
        <section id="experiences" className={styles.experiences}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>EXPERIENCES</h2>

                {experienceCategories.map((cat) => {
                    const categoryExperiences = getExperiencesByCategory(cat.key);
                    if (categoryExperiences.length === 0) return null;

                    return (
                        <div key={cat.key} className={styles.categoryGroup}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryBadge}>{cat.label}</span>
                            </div>
                            <div className={styles.horizontalScroll}>
                                {categoryExperiences.map((exp) => (
                                    <Link
                                        key={exp.slug}
                                        href={`/${exp.slug}`}
                                        className={styles.card}
                                    >
                                        <div className={styles.cardHeader}>
                                            <span className={styles.year}>{exp.year}</span>
                                            <span className={styles.duration}>{exp.duration}</span>
                                        </div>
                                        <h3 className={styles.title}>
                                            {exp.title}
                                            <span className={styles.arrow}>➤</span>
                                        </h3>
                                        <span className={styles.role}>{exp.role}</span>
                                        <p className={styles.description}>{exp.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
