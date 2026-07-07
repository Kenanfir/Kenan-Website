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
                    I&apos;m a Game Programmer with a strong focus on{' '}
                    <span className={styles.highlight}>Artificial Intelligence and Gameplay Programming</span>.
                    When a project needs it, I also step in as a Game Designer, adding that extra creative touch
                    to help ship a polished result. I work mostly in{' '}
                    <span className={styles.highlight}>Unreal Engine and Unity</span>, and I&apos;ve been involved
                    in game development since late 2020 — most recently as a Game Developer at{' '}
                    <span className={styles.highlight}>Agate</span> and an alum of the{' '}
                    <span className={styles.highlight}>Apple Developer Academy</span>.
                </p>
                <p className={styles.bio}>
                    On this site you&apos;ll find projects I&apos;ve published or collaborated on, a few of my
                    ongoing and upcoming open projects, and the research behind some of them. Whatever I build, I
                    aim for solutions that are{' '}
                    <span className={styles.highlight}>efficient, reusable, and easy to understand</span>, adjusting
                    my approach to the project&apos;s timeline. I&apos;m based in Jakarta, Indonesia, and always{' '}
                    <span className={styles.highlight}>open to new opportunities</span> — if you&apos;d like to
                    collaborate or have any questions, feel free to reach out.
                </p>
                <button onClick={scrollToContact} className={styles.cta}>
                    Contact Me!!
                </button>
            </div>
        </section>
    );
}
