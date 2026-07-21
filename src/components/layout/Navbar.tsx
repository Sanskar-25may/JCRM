'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { label: 'ERP Solutions', href: '/erp-solutions' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Workshop', href: '/workshops' },
    { label: 'Join', href: '/join-us' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 shadow-md border-b border-primary/10 shadow-primary/5'
          : 'py-5 bg-white/75 backdrop-blur-md border-b border-primary/5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]" onClick={closeMenu}>
          <img
            src="https://jcrm.in/assets/img/logo.jpeg"
            alt="JCRM Logo"
            className="h-10 w-10 rounded-full border border-primary/10 object-cover"
          />
          <span className="font-extrabold text-lg text-[#051937] tracking-wide heading-font">JCRM</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1.5 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="inline-block m-0 p-0">
                  <Link
                    href={item.href}
                    className={`text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[#0066ff] shadow-lg shadow-primary/20'
                        : 'text-[#0a2e5c] hover:text-[#051937] hover:bg-[#f1f5f9]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation Toggler & Header Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#051937] hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar Navigation Drawer */}
        <nav
          className={`lg:hidden fixed top-0 right-0 w-[280px] h-screen bg-white shadow-2xl pt-24 px-8 pb-10 flex flex-col justify-start items-start transition-transform duration-300 border-l border-primary/10 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-stretch w-full gap-3 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="w-full m-0 p-0">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block text-base font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[#0066ff] shadow-lg shadow-primary/20'
                        : 'text-[#0a2e5c] hover:text-[#051937] hover:bg-[#f1f5f9]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
