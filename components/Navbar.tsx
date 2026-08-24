import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              EYE TRACK<span className="text-[#f2392c]">TECH</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Services</Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About Us</Link>
            <Link href="tel:+917994357565" className="flex items-center gap-2 bg-[#f2392c] hover:bg-[#d12e24] text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-red-500/30">
              <Phone size={16} />
              <span>+91 7994357565</span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
