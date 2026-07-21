'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#051937] text-white border-t border-white/5 font-sans">
      {/* Top Strip */}
      <div className="bg-white/2 py-3.5 text-center text-xs font-bold tracking-wider uppercase text-[#38bdf8] border-b border-white/4">
        <div className="container-custom">
          <span>Empowering Businesses with Smart ERP Solutions</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-10">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://jcrm.in/assets/img/logo.jpeg"
                alt="JCRM Logo"
                className="h-10 w-10 rounded-full border border-white/10"
              />
              <h4 className="text-lg font-extrabold text-white tracking-wide">JCRM TECHNOLOGIES</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 mb-6 max-w-sm">
              We build powerful ERP systems and digital solutions that help businesses scale,
              automate workflows, and achieve operational excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-2.5">
              <a
                href="https://youtu.be/AHzgyPR-Cy4?si=R0mJhdJ3DVLZGhSt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-300 text-sm transition-all duration-300 hover:bg-[#38bdf8] hover:text-[#051937] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://x.com/Yogsathi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-300 text-sm transition-all duration-300 hover:bg-[#38bdf8] hover:text-[#051937] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/jcrm-technologies-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-300 text-sm transition-all duration-300 hover:bg-[#38bdf8] hover:text-[#051937] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/jcrm_technologies?igsh=N2YydHQwdmNxN2Rx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-300 text-sm transition-all duration-300 hover:bg-[#38bdf8] hover:text-[#051937] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h5 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[2px] after:bg-[#38bdf8]">
              Company
            </h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <Link href="/about-us" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">About Us</Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">Courses</Link>
              </li>
              <li>
                <Link href="/our-team" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">Our Team</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col">
            <h5 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[2px] after:bg-[#38bdf8]">
              Solutions
            </h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <Link href="/erp-solutions" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">ERP Software</Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">Automation</Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">Cloud Services</Link>
              </li>
              <li>
                <Link href="/workshops" className="text-sm text-slate-300 transition-all duration-200 hover:text-white hover:pl-1">Workshops</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h5 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[2px] after:bg-[#38bdf8]">
              Contact Us
            </h5>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0 mb-6">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <i className="fas fa-map-marker-alt text-[#38bdf8] text-sm mt-1 w-4 text-center"></i>
                <span className="leading-relaxed">
                  404, 1st floor, 4th A Cross Rd, HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka 560043
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <i className="fas fa-envelope text-[#38bdf8] text-sm mt-1 w-4 text-center"></i>
                <a href="mailto:hr@jcrm.in" className="hover:text-[#38bdf8] transition-colors">hr@jcrm.in</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <i className="fas fa-phone-alt text-[#38bdf8] text-sm mt-1 w-4 text-center"></i>
                <a href="tel:+918310531309" className="hover:text-[#38bdf8] transition-colors">+91 8310531309</a>
              </li>
            </ul>

            {/* Newsletter */}
            <form className="flex bg-white/5 border border-white/10 rounded-full overflow-hidden p-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none py-2 px-3.5 text-white text-sm flex-1 placeholder:text-slate-400"
                required
              />
              <button type="submit" className="bg-[#38bdf8] border-none outline-none py-2 px-4 rounded-full text-xs font-bold text-[#051937] cursor-pointer transition-colors hover:bg-white hover:shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/15 py-6 border-t border-white/5 px-5">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 px-0">
          <p className="m-0">
            &copy; {new Date().getFullYear()} JCRM TECHNOLOGIES &bull; All Rights Reserved
          </p>
          <div className="flex items-center gap-2.5">
            <Link href="/terms" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
