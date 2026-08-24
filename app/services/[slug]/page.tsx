import { notFound } from 'next/navigation';
import { Video, Home, Wifi, ShieldAlert } from 'lucide-react';
import Stats from '@/components/Stats';

const servicesData = {
  'cctv-installation': {
    title: 'CCTV Camera Installation',
    description: 'High-definition surveillance systems for complete peace of mind, available for both residential and commercial properties.',
    longDescription: 'We provide top-tier CCTV installation services using the latest technology in the market. Our team ensures that every blind spot is covered, providing you with 24/7 monitoring capabilities directly from your smartphone or dedicated control room.',
    icon: Video,
  },
  'home-automation': {
    title: 'Home & Gate Automation',
    description: 'Smart automation solutions to control your home environment and gates remotely with ease and security.',
    longDescription: 'Transform your living space with our state-of-the-art home automation systems. Control your lighting, temperature, and security gates with a single tap on your device, enhancing both convenience and security for your family or business.',
    icon: Home,
  },
  'wireless-cameras': {
    title: 'IP, WiFi & 4G Cameras',
    description: 'Advanced wireless and cellular camera setups ensuring you stay connected and secure, even in remote locations.',
    longDescription: 'Our wireless camera solutions are perfect for locations where running cables is not an option. With modern 4G capabilities, you can ensure constant connectivity and crystal clear footage regardless of your primary internet connection.',
    icon: Wifi,
  },
  'security-solutions': {
    title: 'Security Solutions',
    description: 'Comprehensive security consulting and implementation tailored to your specific needs and vulnerabilities.',
    longDescription: 'We offer bespoke security solutions tailored to your unique requirements. From initial vulnerability assessments to the full implementation of access control systems, we ensure your premises remain impenetrable to unauthorized access.',
    icon: ShieldAlert,
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="flex-grow pb-24 bg-gray-50">
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/cctv-in-home.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#f2392c]/20 rounded-2xl flex items-center justify-center border border-[#f2392c]/50">
              <Icon className="text-white" size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{service.title}</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {service.description}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </div>
      
      <Stats />
    </main>
  );
}
