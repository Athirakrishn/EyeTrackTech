export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8a250c] via-[#4a0d04] to-black py-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative subtle top glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f2392c]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter text-white mb-4">
              EYE TRACK<span className="text-[#ff5e52] drop-shadow-md">TECH</span>
            </h3>
            <p className="text-gray-300 max-w-xs">
              Specializing in security and automation solutions. Best CCTV service in Calicut.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <p className="text-gray-300 mb-2">Phone: +91 7994357565</p>
            <p className="text-gray-300">Email: info@eyetrack-tech.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Location</h4>
            <p className="text-gray-300 max-w-xs">
              Kizhur, Perambra road, Payyoli<br />
              Kozhikode, Kerala 673522<br />
              India
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EYE TRACK SOLUTIONS PRED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
