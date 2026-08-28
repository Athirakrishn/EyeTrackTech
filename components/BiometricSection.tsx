"use client";

import dynamic from "next/dynamic";
import { Fingerprint, CheckCircle2 } from "lucide-react";

// Dynamically import Three.js biometric canvas with SSR disabled to prevent server-side errors
const BiometricCanvas = dynamic(() => import("./BiometricCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-slate-950 rounded-[2.5rem] border border-slate-800 flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-3">
        <span className="w-8 h-8 rounded-full border-2 border-t-[#06b6d4] border-slate-800 animate-spin" />
        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Booting Biometric Module...</span>
      </div>
    </div>
  ),
});

interface BiometricSectionProps {
  description: string;
  longDescription: string;
}

export default function BiometricSection({ description, longDescription }: BiometricSectionProps) {
  const points = [
    "High-speed biometric sensors",
    "Tailored entry access management",
    "Seamless attendance logs reporting",
    "Cloud integration & automatic backup"
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Background graphic details */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#06b6d4]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8a3ffc]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Services Details Card */}
          <div className="lg:col-span-6 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
            
            {/* Top Bar Branding */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#06b6d4]/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                  <Fingerprint className="text-[#06b6d4]" size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#06b6d4] text-[10px] font-bold tracking-widest uppercase block mb-0.5">Secure Authentication</span>
                  <h2 className="text-xl font-bold tracking-tight uppercase">Biometric Systems</h2>
                </div>
              </div>
            </div>

            {/* Inner Content details */}
            <div className="p-8 md:p-10 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8a3ffc] block">Service Details</span>
                <p className="text-gray-800 text-lg leading-relaxed font-semibold border-l-4 border-[#06b6d4] pl-5">
                  {description}
                </p>
                <p className="text-gray-600 text-base leading-relaxed font-light">
                  {longDescription}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-2 items-center text-sm text-gray-700">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                    <span className="font-light">{point}</span>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Need assistance?</div>
                  <div className="text-sm font-medium text-gray-800">Professional Setup Guarantee</div>
                </div>
                <a 
                  href="https://wa.me/917994357565?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20Biometric%20Devices."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-slate-950 hover:bg-[#8a3ffc] text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  Request Consultation
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Three.js Interactive Biometric Terminal */}
          <div className="lg:col-span-6 relative w-full flex justify-center items-center">
            {/* Tech frame decoration glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#06b6d4]/10 to-[#8a3ffc]/15 rounded-[3.5rem] blur-2xl pointer-events-none opacity-60" />
            <div className="relative w-full aspect-[4/5] max-w-[450px]">
              <BiometricCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
