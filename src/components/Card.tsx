import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
    slug: string;
    title: string;
    role: string;
    description: string;
    thumbnail: string;
    videoUrl?: string;
    meta: {
        teamSize?: number;
        duration?: string;
        platform?: string;
    };
}

// Helper to get YouTube thumbnail from video URL
function getYouTubeThumbnail(videoUrl: string): string {
    // Match /embed/VIDEO_ID format
    let match = videoUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (match) {
        return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    // Match youtu.be/VIDEO_ID format
    match = videoUrl.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match) {
        return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    // Match youtube.com/watch?v=VIDEO_ID format
    match = videoUrl.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (match) {
        return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    return '';
}

export default function Card({ slug, title, role, description, thumbnail, videoUrl, meta }: CardProps) {
    // Use YouTube thumbnail if no regular thumbnail provided
    const displayThumbnail = thumbnail || (videoUrl ? getYouTubeThumbnail(videoUrl) : '');

    return (
        <Link href={`/${slug}`} className={styles.card}>
            {displayThumbnail && (
                <div className={styles.thumbnail}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${displayThumbnail})` }}
                    />
                    <div className={styles.overlay}>
                        <span className={styles.overlayText}>View Project →</span>
                    </div>
                </div>
            )}
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
