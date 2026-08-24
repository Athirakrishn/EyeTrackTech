"use client";

import { Shield, Clock, ThumbsUp, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Certified Experts',
    description: 'Our team consists of highly trained and certified professionals.',
    icon: Shield,
  },
  {
    title: '24/7 Support',
    description: 'Always available to provide support and maintenance.',
    icon: Clock,
  },
  {
    title: 'Top Quality',
    description: 'We only use industry-leading equipment for maximum reliability.',
    icon: ThumbsUp,
  },
  {
    title: 'Custom Solutions',
    description: 'Every installation is tailored to fit your unique requirements.',
    icon: Wrench,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(242,57,44,0.05),_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Why <span className="text-gradient">Choose Us?</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed font-light">
              We don't just sell cameras; we deliver peace of mind. As the best CCTV service provider in Calicut, our commitment to quality sets us apart.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-[#f2392c] group-hover:text-white group-hover:border-[#f2392c] transition-all duration-300">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{reason.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full aspect-square max-w-md mx-auto"
          >
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f2392c] to-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            
            <div className="relative h-full w-full border border-gray-100 bg-white shadow-xl rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center p-8">
              <div className="absolute inset-0 bg-[url('/biometric.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
              
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#f2392c] to-[#ff4b3e] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(242,57,44,0.3)] cursor-pointer"
              >
                 <Shield size={48} className="text-white" strokeWidth={1.5} />
              </motion.div>
              <h3 className="relative z-10 text-3xl font-bold text-gray-900 mb-4 tracking-tight">100% Secure</h3>
              <p className="relative z-10 text-gray-600 text-lg font-light">Guaranteed protection for your assets.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
