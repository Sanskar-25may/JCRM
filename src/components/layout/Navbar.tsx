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
          ? 'py-3.5 bg-white/70 backdrop-blur-md shadow-md border-b border-primary/10 shadow-primary/5'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] group" onClick={closeMenu}>
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#0066ff] to-[#ffb700] p-[2px] flex items-center justify-center shadow-md">
            <img
              src="https://jcrm.in/assets/img/logo.jpeg"
              alt="JCRM Logo"
              className="h-full w-full rounded-full object-cover bg-white"
            />
          </div>
          <span className="font-extrabold text-xl text-[#051937] tracking-wide heading-font">
            JCRM<span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent ml-0.5 font-bold">Tech</span>
          </span>
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
                        : 'text-[#0a2e5c] hover:text-[#051937] hover:bg-[#f3f0eb]'
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
                        : 'text-[#0a2e5c] hover:text-[#051937] hover:bg-[#f3f0eb]'
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
