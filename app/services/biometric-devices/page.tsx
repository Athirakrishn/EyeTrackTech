import { Fingerprint } from 'lucide-react';
import Stats from '@/components/Stats';
import BiometricSection from '@/components/BiometricSection';

const biometricProducts = [
  {
    name: "Fingerprint & RFID Time Attendance",
    model: "ET-FP100",
    image: "/biometric-fingerprint.jpg",
    description: "High-speed fingerprint sensor with built-in RFID card reader. Offers accurate attendance logs and easy USB reports export.",
    isNew: true
  },
  {
    name: "Facial Recognition Access Terminal",
    model: "ET-FACE500",
    image: "/biometric-face.jpg",
    description: "Premium facial recognition and palm verification access terminal with built-in thermal sensor and live detection security.",
    isNew: true
  }
];

export default function Page() {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      
      {/* Hero Banner Section */}
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-[40vh] bg-slate-900 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/biometric.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950/80 to-slate-950 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#06b6d4]/20 rounded-2xl flex items-center justify-center border border-[#06b6d4]/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <Fingerprint className="text-white" size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Biometric Devices</h1>
          <div className="h-0.5 w-12 bg-[#06b6d4] mx-auto rounded-full mb-3" />
          <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase">
            Time Attendance & Smart Access Control
          </p>
        </div>
      </div>

      {/* Interactive 3D Biometric Animation & Service Details Section */}
      <BiometricSection
        description="We provide high-quality biometric devices for secure access control and attendance management in Payyoli, Calicut, and across Kerala."
        longDescription="Our setups support fingerprint scanning, facial recognition, and RFID cards, ensuring accurate, spoof-proof, and fast authentication for offices, schools, and commercial institutions. From mounting and wiring to configuring database reports, we help you manage authorization points safely and efficiently."
      />

      {/* Featured Products Grid */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Featured Products</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#06b6d4] to-[#8a3ffc] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {biometricProducts.map((product, pIndex) => (
            <div 
              key={pIndex} 
              className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(6,182,212,0.06)] transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100 p-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-[#06b6d4] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      New
                    </span>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-8">
                  <span className="text-[#8a3ffc] text-xs font-bold tracking-widest uppercase block mb-1">
                    {product.model}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#06b6d4] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
              
              {/* Footer Action Button */}
              <div className="p-8 pt-0">
                <a 
                  href={`https://wa.me/917994357565?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.model)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-[#06b6d4] hover:text-black text-white font-semibold py-3 px-4 rounded-xl text-center block transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(6,182,212,0.2)]"
                >
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </main>
  );
}
