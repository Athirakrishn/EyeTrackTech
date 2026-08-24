import { Shield, Clock, ThumbsUp, Wrench } from 'lucide-react';

const reasons = [
  {
    title: 'Certified Experts',
    description: 'Our team consists of highly trained and certified professionals in security systems.',
    icon: Shield,
  },
  {
    title: '24/7 Support',
    description: 'We are always available to provide support and maintenance when you need it most.',
    icon: Clock,
  },
  {
    title: 'Top Quality',
    description: 'We only use the best, industry-leading equipment for maximum reliability and longevity.',
    icon: ThumbsUp,
  },
  {
    title: 'Custom Solutions',
    description: 'Every installation is tailored to fit the unique requirements of your property.',
    icon: Wrench,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f2392c]/5 via-black to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-gradient">Choose Us?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At EYE TRACK TECH, we don't just sell cameras; we deliver peace of mind. As the best CCTV service provider in Calicut, our commitment to quality, reliability, and customer satisfaction sets us apart from the rest.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-[#f2392c]/10 flex items-center justify-center text-[#f2392c]">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f2392c] to-blue-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
            <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
              <div className="relative z-10 h-64 sm:h-80 flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 rounded-full bg-[#f2392c] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(242,57,44,0.6)]">
                    <Shield size={40} className="text-white" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">100% Secure</h3>
                 <p className="text-gray-400">Guaranteed protection for your assets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
