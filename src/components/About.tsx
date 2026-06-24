"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-zinc-900/40 border-y border-zinc-800/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Hakkımda</h2>
        <p className="text-zinc-300 leading-relaxed text-lg">
          {personalInfo.about}
        </p>
      </motion.div>
    </section>
  );
}
