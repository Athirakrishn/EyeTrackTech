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
    <section className="py-16 bg-white border-y border-gray-100 relative z-20 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#f2392c] mb-2 flex items-center">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600 font-medium tracking-wide uppercase text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
