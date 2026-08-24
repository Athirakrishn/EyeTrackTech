"use client";

import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`absolute w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center">
              <img src="/eyetrack-logo.png" alt="EyeTrack Solutions Logo" className="h-20 w-auto" />
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-12">
            {['HOME DIGITAL', 'SERVICES', 'ABOUT', 'CONTACT'].map((item, i) => {
              if (item === 'SERVICES') {
                const serviceLinks = [
                  { name: 'CCTV Installation', href: '/services/cctv-installation' },
                  { name: 'Home Automation', href: '/services/home-automation' },
                  { name: 'Wireless Cameras', href: '/services/wireless-cameras' },
                  { name: 'Security Solutions', href: '/services/security-solutions' },
                ];
                
                return (
                  <div key={i} className="relative group py-6">
                    <button className={`${scrolled ? 'text-gray-700 hover:text-[#f2392c]' : 'text-white hover:text-gray-200'} transition-colors text-sm font-semibold tracking-wider flex items-center gap-1 uppercase`}>
                      SERVICES
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
          
          <div className="md:hidden flex items-center">
            <button className={`${scrolled ? 'text-gray-900 hover:text-[#f2392c]' : 'text-white hover:text-gray-200'}`}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
