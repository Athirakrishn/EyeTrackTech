"use client";

import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeSecuritySolutions() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image on the Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            {/* Glowing Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8a3ffc]/15 to-[#ff7e15]/15 rounded-[2.5rem] blur-3xl -z-10 transform scale-95" />

            <div className="relative max-w-md lg:max-w-full group">
              <img
                src="/rounded-door-lock.png"
                alt="Smart Security Lock"
                className="w-full h-auto rounded-[2.5rem] object-cover object-center shadow-[0_30px_60px_rgba(138,63,252,0.08)] border border-gray-100 transform group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Tech Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:right-4 bg-white/80 backdrop-blur-md border border-gray-100 py-4 px-6 rounded-2xl shadow-[0_15px_30px_rgba(138,63,252,0.08)] flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8a3ffc] to-[#ff7e15] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">24/7 Security</h4>
                  <p className="text-[10px] text-gray-500">Continuous Monitoring</p>
                </div>
              </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Security <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6 font-light">
              <strong>Eye Track Solution</strong>, we belive that true security is built on <strong>trust, technology, And precision</strong>. Our Comprehensive <strong>Security Solutions</strong> are designed to Safeguard every space- Ensuring your safety <strong>24/7</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 font-light">
              With years of expertise in the security and surveillance industry, we deliver <strong>end-To-end protection system</strong> that combine <strong>high-definition CCTV cameras, Smart biometric devices, and intelligent automation</strong>. Our goal is not only to prevent risks but also to provide <strong>peace of mind</strong> through continues monitoring, Easy control, and reliable performance.
            </p>

            {/* Grid of bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-gray-700 font-medium">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Trusted Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Customized Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Advanced Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Professional Installation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">24/7 Monitoring Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Affordable Packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Lifetime Service Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#8a3ffc] shrink-0" />
                  <span className="font-light">Customer Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
