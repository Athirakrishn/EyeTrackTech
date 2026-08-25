"use client";

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/digital lockd.png')",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
      </div>

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" style={{ zIndex: 15 }}>
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#f2392c]/20 blur-[120px]"
        />
        <motion.div 
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 30, -60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#ff7e15]/15 blur-[100px]"
        />
        <motion.div 
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#8a3ffc]/15 blur-[120px]"
        />
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
            <div className="relative flex-shrink-0">
              {/* Dynamic Radar Ripple/Pulsing circles */}
              <motion.div 
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#f2392c]"
              />
              <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#f2392c]"
              />
              <div className="relative w-16 h-16 rounded-full bg-[#f2392c] flex items-center justify-center shadow-lg shadow-red-500/30 z-10">
                <Phone className="text-white fill-white animate-pulse" size={28} />
              </div>
            </div>
            <div>
              <p className="text-white text-sm md:text-base font-semibold mb-1">Call Us Today:</p>
              <a href="tel:+917994357565" className="text-4xl md:text-5xl font-bold text-[#f2392c] hover:text-[#ff4b3e] transition-all duration-300 inline-block hover:scale-[1.02] origin-left">
                +91 7994357565
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
