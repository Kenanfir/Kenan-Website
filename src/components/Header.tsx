'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
    { href: '/resume.pdf', label: 'Resume', external: true },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#publications', label: 'Publications' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMenuOpen(false);
        if (href.startsWith('#')) {
            e.preventDefault();
            document.body.style.overflow = '';
            const element = document.querySelector(href);
            element?.scrollIntoView();
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

                <button
                    type="button"
                    className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={styles.mobileNavLink}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
