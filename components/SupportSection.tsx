"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SupportSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Slanted Overlapping Images */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[500px] w-full flex items-center">
            
            {/* Main Diagonal Slanted Image (Office Workspace) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-y-0 left-0 w-[80%] overflow-hidden rounded-[2.5rem] shadow-sm z-0"
              style={{
                clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0 100%)'
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: "url('/cctv-office.jpg')" }}
              />
            </motion.div>
            
            {/* Overlapping Curved Triangle (Laptop Closeup) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 right-[5%] w-[45%] aspect-square overflow-hidden border-[8px] border-white shadow-xl z-10 rounded-tr-[8rem] rounded-bl-[8rem] rounded-br-[8rem]"
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat scale-110 hover:scale-125 transition-transform duration-700"
                style={{ backgroundImage: "url('/laptop.jpg')" }}
              />
            </motion.div>
          </div>

          {/* Right Column: Support Content Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-[#8a3ffc] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Support
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              Here to help you with <br className="hidden md:block" /> all your needs.
            </h2>
            
            {/* Contact Items */}
            <div className="space-y-6 mb-10 w-full">
              
              {/* Phone Row */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-[#8a3ffc]/10 group-hover:border-[#8a3ffc]/20 transition-all duration-300 shadow-sm">
                  <Phone size={22} className="text-gray-600 group-hover:text-[#8a3ffc] transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider mb-0.5">Call Support</span>
                  <a 
                    href="tel:+917994357565" 
                    className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#8a3ffc] transition-colors"
                  >
                    +91 7994357565
                  </a>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-[#8a3ffc]/10 group-hover:border-[#8a3ffc]/20 transition-all duration-300 shadow-sm">
                  <Mail size={22} className="text-gray-600 group-hover:text-[#8a3ffc] transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider mb-0.5">Email Support</span>
                  <a 
                    href="mailto:info@eyetrack-tech.com" 
                    className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#8a3ffc] transition-colors"
                  >
                    info@eyetrack-tech.com
                  </a>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8a3ffc] to-[#ff7e15] hover:from-[#7b2ee6] hover:to-[#f06d05] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(138,63,252,0.3)] hover:shadow-[0_8px_24px_rgba(138,63,252,0.4)] hover:scale-[1.02] origin-left"
            >
              Contact Us
            </Link>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
