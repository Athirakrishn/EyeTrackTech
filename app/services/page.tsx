import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/cctv-in-home.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our <span className="text-gradient">Services</span></h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Comprehensive security and automation solutions tailored for residential and commercial properties.
          </p>
        </div>
      </div>
      <Services />
    </main>
  );
}
