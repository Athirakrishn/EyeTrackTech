import React from 'react';
import Link from 'next/link';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8a250c] via-[#4a0d04] to-black py-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative subtle top glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f2392c]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <img src="/eyetrack-logo.png" alt="EyeTrack Solutions Logo" className="h-16 w-auto mb-6" />
            <p className="text-gray-300 max-w-xs mb-6">
              Specializing in smart surveillance, security integration, and automation solutions across Kerala.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Eye-Track-Solutions-pvd-ltd/61573098895103/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f2392c]/20 hover:text-[#f2392c] transition-all duration-300 flex items-center justify-center text-white border border-white/5 hover:border-[#f2392c]/50"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/eyetrack_solutions_pvt.ltd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f2392c]/20 hover:text-[#f2392c] transition-all duration-300 flex items-center justify-center text-white border border-white/5 hover:border-[#f2392c]/50"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/eye-track-solutions-private-limited/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f2392c]/20 hover:text-[#f2392c] transition-all duration-300 flex items-center justify-center text-white border border-white/5 hover:border-[#f2392c]/50"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f2392c]">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-sm uppercase tracking-wider font-semibold">Home Digital</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-sm uppercase tracking-wider font-semibold">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-sm uppercase tracking-wider font-semibold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f2392c]">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/cctv-installation" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">CCTV Installation</Link></li>
              <li><Link href="/services/biometric-devices" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Biometric Devices</Link></li>
              <li><Link href="/services/smart-locks" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Smart Locks</Link></li>
              <li><Link href="/services/home-gate-automation" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Home & Gate Automation</Link></li>
              <li><Link href="/services/network-cabling" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Network Cabling</Link></li>
              <li><Link href="/services/it-consulting" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f2392c]">Service Areas</h4>
            <ul className="space-y-2">
              <li><Link href="/locations/vadakara" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Vadakara</Link></li>
              <li><Link href="/locations/perambra" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Perambra</Link></li>
              <li><Link href="/locations/calicut" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Calicut</Link></li>
              <li><Link href="/locations/kannur" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Kannur</Link></li>
              <li><Link href="/locations/malappuram" className="text-gray-300 hover:text-[#ff7e15] transition-colors text-xs uppercase tracking-wider font-medium">Malappuram</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f2392c]">Contact Us</h4>
            <p className="text-gray-300 mb-2 text-sm">Phone: <a href="tel:+917994357565" className="hover:text-[#f2392c] transition-colors">+91 7994357565</a></p>
            <p className="text-gray-300 mb-4 text-sm">Email: <a href="mailto:info@eyetrack-tech.com" className="hover:text-[#f2392c] transition-colors">info@eyetrack-tech.com</a></p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Kizhur, Perambra road, Payyoli<br />
              Kozhikode, Kerala 673522<br />
              India
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EYE TRACK SOLUTIONS PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
