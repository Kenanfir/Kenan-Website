import Link from 'next/link';
import { publications } from '@/data/publications';
import styles from './Publications.module.css';

export default function Publications() {
    return (
        <section id="publications" className={styles.publications}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>PUBLICATIONS</h2>

                <div className={styles.horizontalScroll}>
                    {publications.map((pub) => (
                        <Link key={pub.slug} href={`/${pub.slug}`} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.venue}>{pub.venue}</span>
                                <span className={styles.date}>{pub.date}</span>
                            </div>
                            <h3 className={styles.title}>
                                {pub.title}
                                <span className={styles.arrow}>➤</span>
                            </h3>
                            <p className={styles.description}>{pub.description}</p>
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
