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
                    I&apos;m a Game Programmer focused on the{' '}
                    <span className={styles.highlight}>infrastructure side of games</span>: the systems,
                    multiplayer, and backend that keep them running. When a project needs it, I also step in as a
                    Game Designer to add that extra creative touch. I work mostly in Unreal Engine and Unity, and
                    I&apos;ve been building games since late 2020. Most recently I was a Game Developer at{' '}
                    <span className={styles.highlight}>Agate</span>, and I&apos;m an alum of the{' '}
                    <span className={styles.highlight}>Apple Developer Academy</span>.
                </p>
                <p className={styles.bio}>
                    On this site you&apos;ll find projects I&apos;ve published or collaborated on, a few of my
                    ongoing and upcoming open ones, and some of the research behind them. Whatever I build, I try
                    to keep it{' '}
                    <span className={styles.highlight}>efficient, reusable, and easy to understand</span>, and I
                    adjust how I work to fit the project&apos;s timeline. I&apos;m based in Jakarta, Indonesia, and
                    always <span className={styles.highlight}>open to new opportunities</span>. If you&apos;d like
                    to collaborate or have any questions, feel free to reach out.
                </p>
                <button onClick={scrollToContact} className={styles.cta}>
                    Contact Me!!
                </button>
            </div>
        </section>
    );
}
