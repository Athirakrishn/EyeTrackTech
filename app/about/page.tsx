import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';

export default function AboutPage() {
  return (
    <main className="flex-grow bg-white">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/cctv-office.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">About <span className="text-gradient">Us</span></h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            We are Calicut's leading security and automation experts, dedicated to protecting what matters most to you.
          </p>
        </div>
      </div>
      <WhyChooseUs />
      <div className="pb-24">
        <Stats />
      </div>
    </main>
  );
}
