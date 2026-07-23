'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const erpCatalogItems = [
  { label: 'LMS Academic Portal', id: 'lms', icon: 'fa-graduation-cap' },
  { label: 'HR Management', id: 'hr', icon: 'fa-people-group' },
  { label: 'Hospital ERP', id: 'hospital', icon: 'fa-hospital' },
  { label: 'Accounting ERP', id: 'accounting', icon: 'fa-file-invoice-dollar' },
  { label: 'Gym Management', id: 'gym', icon: 'fa-dumbbell' },
  { label: 'Cab Booking ERP', id: 'cab', icon: 'fa-car' },
  { label: 'Food Delivery ERP', id: 'food', icon: 'fa-utensils' },
  { label: 'E-Commerce ERP', id: 'ecommerce', icon: 'fa-cart-shopping' },
  { label: 'AI Chatbot ERP', id: 'chatbot', icon: 'fa-robot' },
  { label: 'Fraud Detection', id: 'fraud', icon: 'fa-shield-halved' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [erpDropdownOpen, setErpDropdownOpen] = useState(false);
  const pathname = usePathname();
  const erpDropdownRef = useRef<HTMLLIElement>(null);

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

  // Close ERP dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (erpDropdownRef.current && !erpDropdownRef.current.contains(e.target as Node)) {
        setErpDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setErpDropdownOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'ERP Solutions', href: '/erp-solutions', hasDropdown: true },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Workshop', href: '/workshops' },
    { label: 'Join', href: '/join-us' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
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
              const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith('/erp-solutions'));

              if (item.hasDropdown) {
                return (
                  <li
                    key={item.label}
                    className={`${styles.navItem} ${styles.hasDropdown}`}
                    ref={erpDropdownRef}
                  >
                    {/* Desktop only: plain link — no dropdown */}
                    <Link
                      href="/erp-solutions"
                      className={`${styles.navLink} ${styles.erpDesktopLink} ${isActive ? styles.activeLink : ''}`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>

                    {/* Mobile only: dropdown toggle */}
                    <button
                      className={`${styles.dropdownToggle} ${styles.erpMobileToggle} ${isActive ? styles.activeLink : ''}`}
                      onClick={() => setErpDropdownOpen(!erpDropdownOpen)}
                      aria-expanded={erpDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <i className={`fa-solid fa-chevron-down ${styles.dropdownChevron} ${erpDropdownOpen ? styles.chevronOpen : ''}`} />
                    </button>

                    {/* Dropdown — mobile only, no "All ERP Solutions" row, single column */}
                    {erpDropdownOpen && (
                      <div className={styles.dropdown}>
                        <div className={styles.dropdownGrid}>
                          {erpCatalogItems.map((erp) => (
                            <Link
                              key={erp.id}
                              href={`/erp-solutions?product=${erp.id}`}
                              className={styles.dropdownItem}
                              onClick={closeMenu}
                            >
                              <i className={`fa-solid ${erp.icon} ${styles.dropdownItemIcon}`} />
                              <span>{erp.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }


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
