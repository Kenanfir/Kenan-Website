'use client';

import styles from './Hero.module.css';

export default function Hero() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Hello, I&apos;m Kenan!</h1>
                <p className={styles.bio}>
                    I&apos;m a Game Developer who ships games to the{' '}
                    <span className={styles.highlight}>App Store</span> — and publishes the research behind them.{' '}
                    <span className={styles.highlight}>Six peer-reviewed papers</span> so far, plus a shelf of game-jam
                    builds, all made in Jakarta, Indonesia. Recently a Game Developer at{' '}
                    <span className={styles.highlight}>Agate</span> and an alum of the{' '}
                    <span className={styles.highlight}>Apple Developer Academy</span>.{' '}
                    <span className={styles.highlight}>Open to new opportunities.</span>
                </p>
                <button onClick={scrollToContact} className={styles.cta}>
                    Contact Me!!
                </button>
            </div>
        </section>
    );
}
