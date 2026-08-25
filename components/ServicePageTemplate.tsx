import { LucideIcon } from 'lucide-react';
import Stats from '@/components/Stats';

interface Product {
  name: string;
  model: string;
  image: string;
  description: string;
  isNew?: boolean;
}

interface ServicePageProps {
  title: string;
  description: string;
  longDescription: string;
  Icon: LucideIcon;
  bgImage: string;
  products?: Product[];
}

export default function ServicePageTemplate({ title, description, longDescription, Icon, bgImage, products }: ServicePageProps) {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#f2392c]/20 rounded-2xl flex items-center justify-center border border-[#f2392c]/50">
              <Icon className="text-white" size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          {/* Side Brand Panel */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8a3ffc]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f2392c]/8 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Icon className="text-[#ff7e15]" size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">{title}</h2>
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
              {description}
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light">
              {longDescription}
            </p>
          </div>
        </div>
      </div>

      {products && products.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Featured Products</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#8a3ffc] to-[#ff7e15] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, pIndex) => (
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
      )}
      
      <Stats />
    </main>
  );
}
