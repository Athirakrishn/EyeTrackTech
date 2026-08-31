import { Network } from 'lucide-react';
import Stats from '@/components/Stats';
import CablingHero from '@/components/CablingHero';

const cablingProducts = [
  {
    name: "24-Port Cat6 Patch Panel",
    model: "ET-PATCH24",
    image: "/cabling-patch.jpg",
    description: "Standard rack-mounted 24-port Cat6 patch panel designed for gigabit ethernet structured cabling networks.",
    isNew: true
  },
  {
    name: "Cat6 Outdoor Ethernet Spool",
    model: "ET-CAT6",
    image: "/cabling-spool.jpg",
    description: "Premium 500FT roll of Cat6 shielded, pure copper, UV-resistant outdoor network cable for reliable connectivity.",
    isNew: false
  }
];

export default function Page() {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      
      {/* 3D Network Cabling Hero Header */}
      <CablingHero
        title="Network Cabling"
        description="We provide professional structured network cabling solutions for offices, commercial buildings, and homes across Payyoli, Calicut, and surrounding areas."
        longDescription="Our expert team designs and installs high-performance data networks using CAT6, CAT6A, and fiber optic cabling to ensure lightning-fast internet and stable device connectivity. From patch panel termination to comprehensive Fluke certification tests, we deliver clean, efficient, and future-proof networking setups."
        bgImage="/cabling-bg.jpg"
      />
      
      {/* Service Details Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          {/* Side Brand Panel */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f2392c]/8 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Network className="text-[#06b6d4]" size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">Cabling</h2>
              <div className="h-0.5 w-10 bg-[#06b6d4] rounded-full mb-6" />
            </div>
            
            <div className="mt-8 relative z-10">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Our Promise</p>
              <p className="text-base font-light leading-relaxed text-gray-200">
                High-quality components, professional setup, and dedicated customer support.
              </p>
            </div>
          </div>
          
          {/* Main Info Panel */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a3ffc] mb-3 block">Service Details</span>
            <p className="text-gray-800 text-lg leading-relaxed mb-6 font-semibold border-l-4 border-[#06b6d4] pl-5">
              Structured copper and fiber infrastructure installations for residential and enterprise layouts in Calicut.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light">
              We deliver end-to-end structured cabling solutions including server cabinet setups, Cat6 RJ45 patch panels, optical fiber backbones, and structured wall jack outlets. Clean cable routing and labeling minimize interference, optimize transfer speeds, and ensure your business operations run smoothly and scalably for decades.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Featured Products</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#06b6d4] to-[#8a3ffc] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cablingProducts.map((product, pIndex) => (
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
