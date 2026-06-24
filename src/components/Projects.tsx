"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Projeler</h2>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center bg-zinc-800/40 border border-dashed border-zinc-700 rounded-2xl p-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/10 text-brand-400 mb-6">
          <Rocket className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">Yakında eklenecek</h3>
        <p className="text-zinc-400 leading-relaxed">
          Şu anda yeni projeler üzerinde çalışıyorum. Geliştirdiğim projeleri
          yakında burada paylaşacağım. Takipte kalın!
        </p>
      </motion.div>
    </section>
  );
}
