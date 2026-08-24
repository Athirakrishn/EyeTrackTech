import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#f2392c]/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f2392c]/30 bg-[#f2392c]/10 text-[#f2392c] text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            Best CCTV Service in Calicut
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Secure Your Home & <br />
            <span className="text-gradient">Business Today</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            We specialize in advanced security and home automation solutions. From IP, WiFi & 4G cameras to complete gate automation, we provide reliable protection you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="tel:+917994357565" className="inline-flex justify-center items-center gap-2 bg-[#f2392c] hover:bg-[#d12e24] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/25">
              Call Us Now
              <ArrowRight size={20} />
            </Link>
            <Link href="#services" className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
