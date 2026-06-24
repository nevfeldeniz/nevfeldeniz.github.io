"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-24 px-6 bg-zinc-900/60 border-t border-zinc-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Birlikte çalışalım!</h2>
        <p className="text-zinc-400 mb-8">
          Bir fikriniz veya projeniz mi var? Bana ulaşmaktan çekinmeyin.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-zinc-950 font-medium transition"
          >
            <Mail className="w-4 h-4" /> {personalInfo.email}
          </a>
          <a
            href={`mailto:${personalInfo.schoolEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 hover:border-brand-500 transition"
          >
            <Mail className="w-4 h-4" /> {personalInfo.schoolEmail}
          </a>
        </div>
        <div className="flex justify-center gap-6 mb-10">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-brand-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-brand-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="E-posta"
            className="hover:text-brand-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </motion.div>
    </footer>
  );
}
