"use client";

import dynamic from "next/dynamic";
import { GitBranch, ShieldCheck, Zap, Layers } from "lucide-react";

// Dynamically import Three.js cabling canvas with SSR disabled to prevent server-side errors
const CablingCanvas = dynamic(() => import("./CablingCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[380px] md:min-h-[440px] bg-slate-950 rounded-[2.5rem] border border-slate-800 flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-3">
        <span className="w-8 h-8 rounded-full border-2 border-t-[#06b6d4] border-slate-800 animate-spin" />
        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Initializing 3D Grid...</span>
      </div>
    </div>
  ),
});

interface CablingHeroProps {
  title: string;
  description: string;
  longDescription: string;
  bgImage: string;
}

export default function CablingHero({ title, description, longDescription, bgImage }: CablingHeroProps) {
  const cablingFeatures = [
    {
      icon: Layers,
      title: "Structured Layouts",
      description: "Clean rack termination and modular panel management.",
      color: "text-[#06b6d4]",
      bgColor: "bg-[#06b6d4]/10"
    },
    {
      icon: Zap,
      title: "High-Speed Fiber",
      description: "Fiber-optic backbones for next-gen gigabit connections.",
      color: "text-[#ff7e15]",
      bgColor: "bg-[#ff7e15]/10"
    },
    {
      icon: ShieldCheck,
      title: "Fluke Certification",
      description: "Every copper spool and link thoroughly ping-tested.",
      color: "text-[#f2392c]",
      bgColor: "bg-[#f2392c]/10"
    },
    {
      icon: GitBranch,
      title: "Future-Ready Setup",
      description: "Scalable conduits designed for seamless future expansion.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:py-36 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950 z-10" />
      </div>

      {/* Background Cyberpunk Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8a3ffc]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Tech Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold tracking-wider text-[#06b6d4] uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                Enterprise Infrastructure Cabling
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Premium <span className="bg-gradient-to-r from-[#06b6d4] via-[#f2392c] to-[#8a3ffc] bg-clip-text text-transparent">{title}</span>
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-light">
                {description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cablingFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${feature.bgColor} ${feature.color}`}>
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-sm text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#products"
                className="px-8 py-3.5 rounded-xl text-center font-bold text-sm bg-gradient-to-r from-[#06b6d4] to-[#8a3ffc] hover:from-[#38bdf8] hover:to-[#a78bfa] text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Products
              </a>
              <a 
                href="https://wa.me/917994357565?text=Hello!%20I'm%20interested%20in%20your%20Structured%20Network%20Cabling%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl text-center font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all duration-300 hover:scale-[1.02]"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Three.js Interactive Cabling View */}
          <div className="lg:col-span-6 relative w-full flex justify-center items-center">
            {/* Background glowing aura decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#06b6d4]/20 to-[#8a3ffc]/20 rounded-[3.5rem] blur-2xl pointer-events-none opacity-50" />
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
              <CablingCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
