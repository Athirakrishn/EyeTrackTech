"use client";

import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeSecuritySolutions() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          {/* Image on the Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f2392c]/10 to-blue-400/10 rounded-[2.5rem] blur-3xl -z-10 transform scale-95"></div>
            <div className="relative border border-gray-100 bg-white/50 backdrop-blur-sm p-4 rounded-[3rem] shadow-xl overflow-hidden max-w-md lg:max-w-full">
              <img 
                src="/rounded-door-lock.png" 
                alt="Smart Security Lock" 
                className="w-full h-auto rounded-[2rem] object-cover object-center transform hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

          {/* Text Content on the Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Security <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              <strong>Eye Track Solution</strong>, we belive that true security is built on <strong>trust, technology, And precision</strong>. Our Comprehensive <strong>Security Solutions</strong> are designed to Safeguard every space- Ensuring your safety <strong>24/7</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              With years of expertise in the security and surveillance industry, we deliver <strong>end-To-end protection system</strong> that combine <strong>high-definition CCTV cameras, Smart biometric devices, and intelligent automation</strong>. Our goal is not only to prevent risks but also to provide <strong>peace of mind</strong> through continues monitoring, Easy control, and reliable performance.
            </p>
            
            {/* Grid of bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-gray-700 font-medium">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Trusted Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Customized Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Advanced Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Professional Installation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>24/7 Monitoring Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Affordable Packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Lifetime Service Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#f2392c] shrink-0" />
                  <span>Customer Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
