"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 lg:px-12 pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, rgba(16,185,129,.12), transparent 40%)",
        }}
      />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-400 font-medium mb-3">Merhaba, ben</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-8 max-w-lg">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-zinc-950 font-medium transition"
            >
              Projelerimi Gör
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-brand-500 flex items-center gap-2 transition"
            >
              <Download className="w-4 h-4" /> CV İndir
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg border border-zinc-700 hover:text-brand-400 hover:border-brand-500 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg border border-zinc-700 hover:text-brand-400 hover:border-brand-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-brand-500/20 blur-2xl" />
            <Image
              src="/profile.png"
              alt={personalInfo.name}
              width={320}
              height={320}
              priority
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-brand-500/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
