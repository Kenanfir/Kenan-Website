import Link from 'next/link';
import { education } from '@/data/education';
import styles from './Education.module.css';

export default function Education() {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>EDUCATION</h2>

                <div className={styles.cards}>
                    {education.map((edu) => (
                        <Link key={edu.slug} href={`/${edu.slug}`} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.institution}>{edu.institution}</div>
                                <h3 className={styles.degree}>
                                    {edu.degree}
                                    <span className={styles.arrow}>➤</span>
                                </h3>
                                <div className={styles.major}>{edu.info.major}</div>
                                <div className={styles.duration}>{edu.duration}</div>
                                <p className={styles.description}>{edu.description}</p>
                                <div className={styles.overlay}>
                                    <span className={styles.overlayText}>View Details →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
