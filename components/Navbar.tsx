"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const serviceLinks = [
  { name: 'CCTV Installation', href: '/services/cctv-installation' },
  { name: 'Biometric Devices', href: '/services/biometric-devices' },
  { name: 'Smart Locks', href: '/services/smart-locks' },
  { name: 'Home/Gate Automation', href: '/services/home-gate-automation' },
  { name: 'Network Cabling', href: '/services/network-cabling' },
  { name: 'IT Consulting', href: '/services/it-consulting' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center z-50 relative"
            >
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <img src="/eyetrack-logo.png" alt="EyeTrack Solutions Logo" className="h-20 w-auto" />
              </Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {['HOME DIGITAL', 'SERVICES', 'ABOUT', 'CONTACT'].map((item, i) => {
                if (item === 'SERVICES') {
                  return (
                    <div key={i} className="relative group py-6">
                      <button className={`${scrolled ? 'text-gray-700 hover:text-[#f2392c]' : 'text-white hover:text-gray-200'} transition-colors text-sm font-semibold tracking-wider flex items-center gap-1 uppercase`}>
                        SERVICES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col py-2">
                        {serviceLinks.map((link, j) => (
                          <Link key={j} href={link.href} className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f2392c] transition-colors font-medium border-b border-gray-50 last:border-0">
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                let href = '/';
                if (item === 'ABOUT') href = '/about';
                if (item === 'CONTACT') href = '/contact';

                return (
                  <Link 
                    key={i}
                    href={href} 
                    className={`${scrolled ? 'text-gray-700 hover:text-[#f2392c]' : 'text-white hover:text-gray-200'} transition-colors text-sm font-semibold tracking-wider relative group`}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f2392c] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50 relative">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${scrolled || isMobileMenuOpen ? 'text-gray-900 hover:text-[#f2392c]' : 'text-white hover:text-gray-200'} p-2`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 pb-12">
              <Link href="/" className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4" onClick={closeMobileMenu}>
                HOME DIGITAL
              </Link>
              
              <div className="flex flex-col border-b border-gray-100 pb-4">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between text-2xl font-bold text-gray-900 w-full text-left"
                >
                  SERVICES
                  <ChevronDown size={24} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col space-y-4 pt-6 pl-4 overflow-hidden"
                    >
                      {serviceLinks.map((link, j) => (
                        <Link 
                          key={j} 
                          href={link.href} 
                          className="text-lg font-medium text-gray-600 hover:text-[#f2392c]"
                          onClick={closeMobileMenu}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4" onClick={closeMobileMenu}>
                ABOUT
              </Link>
              
              <Link href="/contact" className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4" onClick={closeMobileMenu}>
                CONTACT
              </Link>

              {/* Mobile Menu Footer Contact Info */}
              <div className="pt-8">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Get in touch</p>
                <a href="tel:+917994357565" className="block text-xl font-bold text-[#f2392c] mb-2">+91 7994357565</a>
                <a href="mailto:info@eyetrack-tech.com" className="block text-gray-600">info@eyetrack-tech.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
