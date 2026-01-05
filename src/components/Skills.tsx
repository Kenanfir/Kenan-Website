import { skillCategories, levelLabels } from '@/data/skills';
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>SKILLS</h2>

                <div className={styles.legend}>
                    <span className={styles.legendItem}>
                        <span className={styles.squares}>
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={`${styles.square} ${styles.filled}`} />
                        </span>
                        Professional
                    </span>
                    <span className={styles.legendItem}>
                        <span className={styles.squares}>
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={styles.square} />
                        </span>
                        Advanced
                    </span>
                    <span className={styles.legendItem}>
                        <span className={styles.squares}>
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={styles.square} />
                            <span className={styles.square} />
                        </span>
                        Intermediate
                    </span>
                    <span className={styles.legendItem}>
                        <span className={styles.squares}>
                            <span className={`${styles.square} ${styles.filled}`} />
                            <span className={styles.square} />
                            <span className={styles.square} />
                            <span className={styles.square} />
                        </span>
                        Beginner
                    </span>
                </div>

                {skillCategories.map((category) => (
                    <div key={category.name} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{category.name}</h3>
                        <div className={styles.skillsGrid}>
                            {category.skills.map((skill) => (
                                <div key={skill.name} className={styles.skillItem}>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <div className={styles.skillLevel}>
                                        {[1, 2, 3, 4].map((i) => (
                                            <span
                                                key={i}
                                                className={`${styles.square} ${i <= skill.level ? styles.filled : ''}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
