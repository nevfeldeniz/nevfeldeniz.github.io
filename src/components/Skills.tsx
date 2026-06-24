"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-zinc-900/40 border-y border-zinc-800/60"
    >
      <h2 className="text-3xl font-bold text-center mb-16">Yetenekler</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-brand-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-zinc-700/60 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
