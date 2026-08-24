import { LucideIcon } from 'lucide-react';
import Stats from '@/components/Stats';

interface ServicePageProps {
  title: string;
  description: string;
  longDescription: string;
  Icon: LucideIcon;
}

export default function ServicePageTemplate({ title, description, longDescription, Icon }: ServicePageProps) {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-screen">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-semibold">
            {description}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {longDescription}
          </p>
        </div>
      </div>
      
      <Stats />
    </main>
  );
}
