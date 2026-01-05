import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>CONTACT</h2>

                <div className={styles.links}>
                    <a
                        href="mailto:realkenanfir@gmail.com"
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.icon}>📧</span>
                        <span className={styles.label}>Email</span>
                        <span className={styles.value}>realkenanfir@gmail.com</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kenanfir/"
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.icon}>💼</span>
                        <span className={styles.label}>LinkedIn</span>
                        <span className={styles.value}>/in/kenanfir</span>
                    </a>

                    <a
                        href="https://github.com/Kenanfir"
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.icon}>💻</span>
                        <span className={styles.label}>GitHub</span>
                        <span className={styles.value}>Kenanfir</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
