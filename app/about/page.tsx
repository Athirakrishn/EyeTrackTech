import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-grow bg-white">
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Fallback Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/cctv-office.jpg')" }}
          />
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/CCTV_installation_and_smart_locks.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">About <span className="text-gradient">Us</span></h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            We are Calicut's leading security and automation experts, dedicated to protecting what matters most to you.
          </p>
        </div>
      </div>

      {/* Security Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img src="/eyetrack-logo.png" alt="EyeTrack Solutions Logo" className="w-64 max-w-full h-auto" />
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Security Solutions</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Eye Track Solution</strong>, we belive that true security is built on <strong>trust, technology, And precision</strong>. Our Comprehensive <strong>Security Solutions</strong> are designed to Safeguard every space- Ensuring your safety <strong>24/7</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of expertise in the security and surveillance industry, we deliver <strong>end-To-end protection system</strong> that combine <strong>high-definition CCTV cameras, Smart biometric devices, and intelligent automation</strong>. Our goal is not only to prevent risks but also to provide <strong>peace of mind</strong> through continues monitoring, Easy control, and reliable performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 text-gray-700">
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Trusted Expertise</li>
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Customized Solutions</li>
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Advanced Technology</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Professional Installation</li>
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> 24/7 Monitoring Support</li>
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Affordable Packages</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Lifetime Service Support</li>
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Trusted Brands & Components</li>
              <li className="flex items-center gap-2"><ChevronRight size={16} className="text-gray-800 shrink-0" /> Customer Satisfaction Guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <div className="pb-24">
        <Stats />
      </div>
    </main>
  );
}
