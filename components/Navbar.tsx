"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
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
            {/* Replicating the logo from screenshot */}
            <Link href="/" className="flex flex-col items-center">
              <div className="relative w-12 h-12 mb-1">
                {/* Simplified CSS logo matching the shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-red-500 rounded-full flex items-center justify-center shadow-md">
                   <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full transform -rotate-45"></div>
                </div>
              </div>
              <div className="text-center leading-tight">
                <span className="text-[#f2392c] text-[10px] font-bold block tracking-wider">EYETRACK</span>
                <span className={`text-[10px] font-bold block tracking-wider ${scrolled ? 'text-gray-900' : 'text-white'}`}>SOLUTIONS</span>
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-12">
            {['HOME DIGITAL', 'SERVICES', 'ABOUT', 'CONTACT'].map((item, i) => {
              let href = '/';
              if (item === 'SERVICES') href = '/services';
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
