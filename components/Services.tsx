"use client";

import { Video, Home, Wifi, ShieldAlert } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const services = [
  {
    title: 'CCTV Camera Installation',
    description: 'High-definition surveillance systems for complete peace of mind, available for both residential and commercial properties.',
    icon: Video,
  },
  {
    title: 'Home & Gate Automation',
    description: 'Smart automation solutions to control your home environment and gates remotely with ease and security.',
    icon: Home,
  },
  {
    title: 'IP, WiFi & 4G Cameras',
    description: 'Advanced wireless and cellular camera setups ensuring you stay connected and secure, even in remote locations.',
    icon: Wifi,
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive security consulting and implementation tailored to your specific needs and vulnerabilities.',
    icon: ShieldAlert,
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
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Premium <span className="text-gradient">Services</span></h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Cutting-edge security and automation solutions to keep your premises safe and smart 24/7.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(242,57,44,0.08)] border border-gray-100"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f2392c]/0 to-[#f2392c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#f2392c]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#f2392c]/20">
                    <Icon className="text-[#f2392c]" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
