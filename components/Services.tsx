import { Video, Home, Wifi, ShieldAlert } from 'lucide-react';

const services = [
  {
    title: 'CCTV Camera Installation',
    description: 'High-definition surveillance systems for complete peace of mind, available for both residential and commercial properties.',
    icon: Video,
  },
  {
    title: 'Home & Gate Automation',
    description: 'Smart automation solutions to control your home environment and gates remotely with ease and security.',
    icon: Home,
  },
  {
    title: 'IP, WiFi & 4G Cameras',
    description: 'Advanced wireless and cellular camera setups ensuring you stay connected and secure, even in remote locations.',
    icon: Wifi,
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive security consulting and implementation tailored to your specific needs and vulnerabilities.',
    icon: ShieldAlert,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Premium <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400 text-lg">
            We offer cutting-edge security and automation solutions to keep your premises safe and smart 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass p-8 rounded-2xl hover:bg-white/5 transition-all group border border-white/5 hover:border-[#f2392c]/30">
                <div className="w-14 h-14 bg-[#f2392c]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-[#f2392c]" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
