'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Dark mode disabled; force light mode
  const darkMode = false;
  const mounted = true; // for compatibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'ERP Solutions', href: '/erpsolutions' },
    { label: 'Our Team', href: '/ourteam' },
    { label: 'Workshop', href: '/workshops' },
    { label: 'Join', href: '/joinus' },
    { label: 'About', href: '/aboutus' },
    { label: 'Contact', href: '/contactus' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand */}
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <img
            src="https://jcrm.in/assets/img/logo.jpeg"
            alt="JCRM Logo"
            className={styles.logo}
          />
          <span className={styles.brandText}>JCRM Technologies</span>
        </Link>

        {/* Navigation Menu */}
        <nav className={`${styles.navigation} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Container (Theme Toggle & Mobile menu toggler) */}
        <div className={styles.rightActions}>
          {/* Theme toggle removed per user request */}

          {/* Toggler */}
          <button
            className={styles.toggler}
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <span className={`${styles.burger} ${menuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
