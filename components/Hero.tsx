"use client";

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/digital lockd.png')",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex justify-end">
        <div className="max-w-2xl text-left pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Best CCTV Service in Calicut
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            CCTV, Security & <br /> Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 font-medium"
          >
            Specializes in security and automation solutions
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px bg-white/30 w-full mb-10"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#f2392c] flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30">
              <Phone className="text-white fill-white" size={28} />
            </div>
            <div>
              <p className="text-white text-sm md:text-base font-semibold mb-1">Call Us Today:</p>
              <a href="tel:+917994357565" className="text-4xl md:text-5xl font-bold text-[#f2392c] hover:text-[#ff4b3e] transition-colors">
                +91 7994357565
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
