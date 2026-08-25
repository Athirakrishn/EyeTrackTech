"use client";

import { Video, Home, Fingerprint, Lock, Network, Monitor } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'CCTV Installation',
    description: 'We provide expert CCTV installation services designed to keep your Property safe and secure with HD and IP camera systems.',
    icon: Video,
    href: '/services/cctv-installation',
  },
  {
    title: 'Biometric Devices',
    description: 'High-quality biometric devices for secure access control supporting fingerprint, face Recognition, and RFID.',
    icon: Fingerprint,
    href: '/services/biometric-devices',
  },
  {
    title: 'Smart Locks',
    description: 'Upgrade your security with advanced smart locks supporting fingerprint, PIN, RFID card, and mobile app control.',
    icon: Lock,
    href: '/services/smart-locks',
  },
  {
    title: 'Home/Gate Automation',
    description: 'Transform your home or business with intelligent automation systems to control doors, lights, and gates remotely.',
    icon: Home,
    href: '/services/home-gate-automation',
  },
  {
    title: 'Network Cabling',
    description: 'Professional structured network cabling solutions for offices and homes using CAT6 and fiber optic cables.',
    icon: Network,
    href: '/services/network-cabling',
  },
  {
    title: 'IT Consulting',
    description: 'Make the right technology decisions. We analyze, identify, and design customized solutions that boost efficiency and security.',
    icon: Monitor,
    href: '/services/it-consulting',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden text-white">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8a3ffc]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#f2392c]/8 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8a3ffc] via-[#f72585] to-[#ff7e15]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Cutting-edge security and automation solutions to keep your premises safe and smart 24/7.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={index} className="block group">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative bg-slate-900/40 border border-white/5 backdrop-blur-lg p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 h-full flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-[#8a3ffc]/50 hover:shadow-[0_20px_50px_rgba(138,63,252,0.12)]"
                >
                  {/* Glowing background card accents */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-[#8a3ffc]/15 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-gradient-to-tr from-[#f2392c]/8 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Icon container with border glow */}
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#8a3ffc]/50 group-hover:bg-[#8a3ffc]/15 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8a3ffc]/0 to-[#8a3ffc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="text-gray-300 group-hover:text-white transition-colors duration-500 relative z-10" size={30} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff7e15] transition-all duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed font-light text-[1.05rem] group-hover:text-gray-300 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link button */}
                  <div className="mt-8 pt-4 flex items-center gap-2 text-sm font-semibold text-[#8a3ffc] group-hover:text-[#ff7e15] transition-colors duration-500">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
