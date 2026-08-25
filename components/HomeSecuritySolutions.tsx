"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Clock, CheckCircle } from 'lucide-react';

export default function HomeSecuritySolutions() {
  return (
    <section className="pt-10 pb-28 bg-white relative overflow-hidden">
      {/* Subtle section decorative background mesh */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-[#8a3ffc]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image on the Left with High-Tech Hotspots */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            {/* Glowing Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8a3ffc]/10 to-[#ff7e15]/10 rounded-[2.5rem] blur-3xl -z-10 transform scale-95" />

            <div className="relative max-w-sm lg:max-w-md w-full group overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-[0_30px_60px_rgba(138,63,252,0.06)]">
              
              {/* Product Image */}
              <img
                src="/rounded-door-lock.png"
                alt="Smart Security Lock"
                className="w-full h-auto object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Hotspot 1: RFID & PIN Access */}
              <div className="absolute top-[28%] left-[58%] -translate-x-1/2 z-20 flex items-center gap-3 pointer-events-none">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a3ffc] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8a3ffc]"></span>
                </span>
                <div className="bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider shadow-lg">
                  RFID & PIN Access
                </div>
              </div>

              {/* Hotspot 2: Biometric Fingerprint Scanner */}
              <div className="absolute top-[52%] left-[45%] z-20 flex items-center gap-3 pointer-events-none">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2392c] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#f2392c]"></span>
                </span>
                <div className="bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider shadow-lg">
                  Biometric Scan
                </div>
              </div>

              {/* Scanline HUD effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8a3ffc]/5 to-transparent bg-[length:100%_4px] pointer-events-none opacity-30" />
            </div>
            
            {/* Floating Tech Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md border border-gray-100 py-3.5 px-5 rounded-2xl shadow-[0_15px_30px_rgba(138,63,252,0.06)] flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8a3ffc] to-[#ff7e15] flex items-center justify-center text-white text-sm font-bold shadow-md shadow-[#8a3ffc]/20">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">24/7 Secure</h4>
                <p className="text-[9px] text-gray-400">Continuous Shield</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content on the Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#8a3ffc] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              Security Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Protecting what matters <br className="hidden md:block" /> most to you.
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-base mb-6 font-light">
              At <strong>Eye Track Solution</strong>, we believe that true security is built on <strong>trust, technology, and precision</strong>. Our comprehensive security integrations are custom-engineered to safeguard your premises.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-10 font-light">
              Combined with years of technical expertise in surveillance, access terminal installation, and automation setup, we ensure seamless 24/7 protection.
            </p>

            {/* Structured Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="bg-gray-50/50 border border-gray-100/80 rounded-2xl p-5 hover:border-[#8a3ffc]/30 hover:bg-[#8a3ffc]/5 transition-all duration-300 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-[#8a3ffc]/10 text-[#8a3ffc] flex items-center justify-center flex-shrink-0">
                  <Cpu size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Advanced Tech</h4>
                  <p className="text-xs text-gray-500 mt-1 font-light leading-relaxed">AI dome cameras, biometrics, and automated access.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50/50 border border-gray-100/80 rounded-2xl p-5 hover:border-[#8a3ffc]/30 hover:bg-[#8a3ffc]/5 transition-all duration-300 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-[#8a3ffc]/10 text-[#8a3ffc] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Trusted Quality</h4>
                  <p className="text-xs text-gray-500 mt-1 font-light leading-relaxed">Standard components from globally certified vendors.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50/50 border border-gray-100/80 rounded-2xl p-5 hover:border-[#8a3ffc]/30 hover:bg-[#8a3ffc]/5 transition-all duration-300 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-[#8a3ffc]/10 text-[#8a3ffc] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">24/7 Monitoring</h4>
                  <p className="text-xs text-gray-500 mt-1 font-light leading-relaxed">Real-time alerts and remote smartphone video links.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50/50 border border-gray-100/80 rounded-2xl p-5 hover:border-[#8a3ffc]/30 hover:bg-[#8a3ffc]/5 transition-all duration-300 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-[#8a3ffc]/10 text-[#8a3ffc] flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Full Guarantee</h4>
                  <p className="text-xs text-gray-500 mt-1 font-light leading-relaxed">Dedicated installation warranty and lifetime support.</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
