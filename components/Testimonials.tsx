"use client";

import { Quote, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    quote: "Eye Track did an excellent job installing our CCTV cameras. The team was professional, Fast, and explained everything clearly. Now We feel completely secure at home.",
    name: "Rahul P",
    role: "Kozhikode",
  },
  {
    quote: "I had a small issue with my DVR setup, and Their support team helped me instantly — Even late at night! Great service and friendly Staff.",
    name: "Aisha M",
    role: "Business Owner",
  },
  {
    quote: "The camera clarity is amazing, even at night. I can monitor my shop anytime from my Phone. Worth every rupee!",
    name: "Vineesh K",
    role: "Retail Store Owner",
  }
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

export default function Testimonials() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Don't just take our word for it. Read reviews from our satisfied clients.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex flex-col justify-between shadow-sm relative group hover:shadow-[0_20px_40px_rgba(242,57,44,0.05)] transition-all duration-300"
            >
              <div className="absolute -top-5 -right-2 opacity-5 text-[#f2392c] group-hover:opacity-10 transition-opacity duration-300">
                <Quote size={80} />
              </div>
              
              <div>
                {/* 5 Star Rating */}
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic text-lg mb-8 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
