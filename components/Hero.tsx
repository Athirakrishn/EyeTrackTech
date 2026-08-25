"use client";

import { Phone, Shield, CheckCircle, Wifi, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/digital lockd.png')",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left Column: Typographic Copy & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-24 pb-12">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#f2392c]/10 border border-[#f2392c]/20 py-1.5 px-4 rounded-full text-[#ff7e15] text-xs font-semibold uppercase tracking-wider mb-6 self-start"
            >
              <Shield size={14} className="animate-pulse" />
              <span>Security & Automation Specialists</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
            >
              Advanced CCTV, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e15] via-[#f2392c] to-[#8a3ffc]">Security & Automation</span> <br />
              For Your Space.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 mb-8 font-light max-w-xl leading-relaxed"
            >
              We deliver high-definition surveillance networks, intelligent biometric locks, and smart gate automation. Safeguarding what matters 24/7.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="relative flex-shrink-0 flex items-center gap-4">
                <div className="relative">
                  <motion.div 
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-[#f2392c]"
                  />
                  <div className="relative w-14 h-14 rounded-full bg-[#f2392c] flex items-center justify-center shadow-lg shadow-red-500/30 z-10">
                    <Phone className="text-white fill-white animate-pulse" size={24} />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Call Us Today</p>
                  <a href="tel:+917994357565" className="text-2xl sm:text-3xl font-extrabold text-[#f2392c] hover:text-[#ff4b3e] transition-all duration-300 block">
                    +91 7994357565
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Futuristic Interactive System Shield HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0"
          >
            <div className="w-full max-w-sm bg-slate-950/75 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Pulsing glow behind the card */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#8a3ffc]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#ff7e15]/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Section Header inside HUD */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="text-[#f2392c] animate-pulse" size={18} />
                  <span className="text-white text-xs font-bold tracking-widest uppercase">Live Security Terminal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">Online</span>
                </div>
              </div>

              {/* Pulsing Radar Ring Area */}
              <div className="relative flex items-center justify-center h-48 mb-6 bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden">
                {/* Rotating scanner sweep line */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 origin-center bg-gradient-to-tr from-[#8a3ffc]/15 to-transparent rounded-full pointer-events-none"
                  style={{ width: '100%', height: '100%' }}
                />
                
                {/* Concentric radar rings */}
                <div className="absolute w-36 h-36 border border-white/5 rounded-full flex items-center justify-center">
                  <div className="absolute w-24 h-24 border border-[#8a3ffc]/10 rounded-full flex items-center justify-center">
                    <div className="absolute w-12 h-12 border border-[#f2392c]/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-[#f2392c] to-[#ff7e15] rounded-full shadow-[0_0_12px_rgba(242,57,44,0.6)] animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Radar Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <span className="absolute bottom-3 text-[10px] text-gray-500 tracking-widest uppercase font-mono">System Shield: Active</span>
              </div>

              {/* Status List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Wifi size={14} className="text-gray-400" />
                    <span className="text-gray-300 text-xs font-mono font-medium">SURVEILLANCE CAM</span>
                  </div>
                  <span className="text-emerald-500 text-[10px] font-bold font-mono">ACTIVE FEED</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Shield size={14} className="text-gray-400" />
                    <span className="text-gray-300 text-xs font-mono font-medium">BIOMETRIC ENTRY</span>
                  </div>
                  <span className="text-emerald-500 text-[10px] font-bold font-mono">SECURE</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Play size={14} className="text-gray-400" />
                    <span className="text-gray-300 text-xs font-mono font-medium">AUTOMATION PORT</span>
                  </div>
                  <span className="text-emerald-500 text-[10px] font-bold font-mono">READY</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
