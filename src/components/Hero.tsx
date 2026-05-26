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
                    I&apos;m a <span className={styles.highlight}>Game Programmer</span> that specialized in{' '}
                    <span className={styles.highlight}>AI/Gameplay</span> based on Surabaya, Indonesia.
                    I love to express my creativity through games, apps, and everything digital in between!
                    Currently working as a Game Developer at{' '}
                    <span className={styles.highlight}>Agate</span>, after completing the{' '}
                    <span className={styles.highlight}>Apple Developer Academy</span>.
                </p>
                <button onClick={scrollToContact} className={styles.cta}>
                    Contact Me!!
                </button>
            </div>
        </section>
    );
}
