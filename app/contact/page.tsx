"use client";

import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="flex-grow pb-24 relative overflow-hidden bg-white">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-[40vh] mb-16">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/door-lock.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Contact <span className="text-gradient">Us</span></h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Ready to secure your property? Get in touch with our experts today for a free consultation.
          </p>
        </div>
      </div>
      
      <div className="absolute top-[40vh] left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="glass-panel p-8 rounded-[2rem] border border-gray-100 shadow-sm bg-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f2392c]/10 flex items-center justify-center text-[#f2392c] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">Phone</p>
                    <a href="tel:+917994357565" className="text-gray-600 hover:text-[#f2392c] transition-colors">+91 7994357565</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f2392c]/10 flex items-center justify-center text-[#f2392c] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">Email</p>
                    <a href="mailto:info@eyetrack-tech.com" className="text-gray-600 hover:text-[#f2392c] transition-colors">info@eyetrack-tech.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f2392c]/10 flex items-center justify-center text-[#f2392c] flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">Location</p>
                    <p className="text-gray-600 leading-relaxed">
                      Kizhur, Perambra road, Payyoli<br />
                      Kozhikode, Kerala 673522<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass-panel p-8 rounded-[2rem] border border-gray-100 shadow-sm bg-gray-50/50 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#f2392c] focus:ring-1 focus:ring-[#f2392c] transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#f2392c] focus:ring-1 focus:ring-[#f2392c] transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#f2392c] focus:ring-1 focus:ring-[#f2392c] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#f2392c] hover:bg-[#d12e24] text-white font-bold py-4 rounded-xl transition-colors mt-2 shadow-[0_4px_14px_rgba(242,57,44,0.3)]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
