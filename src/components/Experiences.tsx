import Link from 'next/link';
import { experiences } from '@/data/experiences';
import styles from './Experiences.module.css';

export default function Experiences() {
    return (
        <section id="experiences" className={styles.experiences}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>EXPERIENCES</h2>

                <div className={styles.horizontalScroll}>
                    {experiences.map((exp) => (
                        <Link key={exp.slug} href={`/${exp.slug}`} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.year}>{exp.year}</span>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                            <h3 className={styles.title}>
                                {exp.title}
                                <span className={styles.arrow}>➤</span>
                            </h3>
                            <div className={styles.role}>{exp.role}</div>
                            <p className={styles.description}>{exp.description}</p>
                            <div className={styles.overlay}>
                                <span className={styles.overlayText}>View Details →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
