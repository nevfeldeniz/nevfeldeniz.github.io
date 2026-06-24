"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">
        Kariyer ve Eğitim Yolculuğu
      </h2>
      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-500/30 -translate-x-1/2" />
        {timeline.map((item, i) => {
          const right = i % 2 !== 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`relative flex mb-12 ${
                right ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-500 rounded-full -translate-x-1/2 ring-4 ring-zinc-950" />
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  right ? "md:pl-12" : "md:pr-12 md:text-right"
                }`}
              >
                <span className="text-brand-400 font-mono text-sm">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-zinc-400 mt-2">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
