"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const incrementTime = (duration * 1000) / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Installations", value: 1200, suffix: "+" },
  { label: "Expert Technicians", value: 50, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative z-20 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(138,63,252,0.06)] hover:border-purple-100/50 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Subtle top border hover animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8a3ffc] to-[#ff7e15] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-4xl md:text-5xl font-bold mb-3 flex items-center justify-center bg-gradient-to-r from-[#8a3ffc] via-[#f72585] to-[#ff7e15] bg-clip-text text-transparent tracking-tight">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-500 font-medium tracking-wider uppercase text-xs md:text-sm group-hover:text-gray-800 transition-colors duration-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
