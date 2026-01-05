import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
    slug: string;
    title: string;
    role: string;
    description: string;
    thumbnail: string;
    meta: {
        teamSize?: number;
        duration?: string;
        platform?: string;
    };
}

export default function Card({ slug, title, role, description, thumbnail, meta }: CardProps) {
    return (
        <Link href={`/${slug}`} className={styles.card}>
            <div className={styles.thumbnail}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${thumbnail})` }}
                />
                <div className={styles.overlay}>
                    <span className={styles.overlayText}>View Project →</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    {meta.teamSize && <span>👥{meta.teamSize}</span>}
                    {meta.duration && <span>🕒{meta.duration}</span>}
                    {meta.platform && <span>🛠️{meta.platform}</span>}
                </div>
                <h3 className={styles.title}>
                    {title}
                    <span className={styles.arrow}>➤</span>
                </h3>
                <span className={styles.role}>{role}</span>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    );
}
