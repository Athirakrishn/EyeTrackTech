import { Video, ShieldCheck, Eye, Activity } from 'lucide-react';
import Stats from '@/components/Stats';
import CCTVHero from '@/components/CCTVHero';

const cctvProducts = [
  {
    name: "4MP Dual Light Dome Camera",
    model: "CP-UNC-DA41L3C-D-LQ2",
    image: "/cctv-dome.jpg",
    description: "4MP Network Dome Camera with 30-meter dual-light night vision range and high-quality lens for clear indoor monitoring.",
    isNew: true
  },
  {
    name: "4MP Network IR Bullet Camera",
    model: "CP-UNC-TA41L3C-D-Q2",
    image: "/cctv-bullet.jpg",
    description: "4MP outdoor network bullet camera equipped with smart IR night vision up to 30 meters and IP67 weather resistance.",
    isNew: false
  },
  {
    name: "16-Channel Video Recorder (NVR)",
    model: "CP-UVR-1604K4",
    image: "/cctv-nvr.jpg",
    description: "16-Channel 5M-N high definition digital video recorder supporting smart search and high-capacity storage drives.",
    isNew: false
  }
];

export default function Page() {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      {/* 3D Interactive CCTV Hero Section */}
      <CCTVHero
        title="CCTV Installation"
        description="Professional CCTV installation services designed to keep your home and business secure with high-definition and smart IP camera systems."
        longDescription="Our certified technicians ensure optimal camera placement, durable cabling, and seamless mobile setup for complete 24/7 surveillance coverage."
        bgImage="/cctv-office.jpg"
      />
      
      {/* Main Info Details Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          {/* Side Brand Panel */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8a3ffc]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f2392c]/8 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Video className="text-[#ff7e15]" size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">CCTV Installation</h2>
              <div className="h-0.5 w-10 bg-[#ff7e15] rounded-full mb-6" />
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
            <p className="text-gray-800 text-lg leading-relaxed mb-6 font-semibold border-l-4 border-[#f2392c] pl-5">
              Secure your property with tailored surveillance solutions engineered for residential, retail, and commercial layouts.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light">
              We deploy advanced IP cameras, high-definition analog setups, and smart network video recorders (NVR) with high-capacity storage. Every installation is designed to give you clear 1080p to 4K viewing, smart motion notifications, and live access from your phone or laptop anywhere in the world.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Featured Products</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8a3ffc] to-[#ff7e15] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cctvProducts.map((product, pIndex) => (
            <div 
              key={pIndex} 
              className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(138,63,252,0.06)] transition-all duration-500 flex flex-col justify-between group"
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
                    <span className="absolute top-4 left-4 bg-[#f2392c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      New
                    </span>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-8">
                  <span className="text-[#8a3ffc] text-xs font-bold tracking-widest uppercase block mb-1">
                    {product.model}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a3ffc] transition-colors">
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
                  className="w-full bg-slate-900 hover:bg-[#8a3ffc] text-white font-semibold py-3 px-4 rounded-xl text-center block transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(138,63,252,0.25)]"
                >
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats component */}
      <Stats />
    </main>
  );
}
