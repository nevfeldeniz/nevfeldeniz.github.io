"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Projeler</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-zinc-800/40 border border-zinc-700 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {"status" in project && project.status && (
                <span className="text-xs px-2 py-0.5 rounded border border-amber-800/60 bg-amber-950/40 text-amber-200/90">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
              >
                <ExternalLink className="w-4 h-4" />
                Canlı Site
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
