'use client';

import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
    { href: '/resume.pdf', label: 'Resume', external: true },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.name}>Kenan Firmansyah</span>
                    <span className={styles.divider}>/</span>
                    <span className={styles.tagline}>Portfolio Showcase</span>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={styles.navLink}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
