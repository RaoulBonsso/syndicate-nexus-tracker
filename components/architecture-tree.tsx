"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/data";

export function ArchitectureTree() {
  return (
    <section id="architecture" className="py-24 bg-slate-950 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Architecture</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Microservices polyglottes, event-driven, orchestrés par un cerveau LLM.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-2xl shadow-indigo-500/25"
          >
            Nexus Core
          </motion.div>

          {/* Orbiting Agents */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-indigo-500/50 to-transparent" />
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-indigo-500/50 transition-colors">
                  <h3 className="font-bold text-white mb-1">{agent.name}</h3>
                  <p className="text-xs text-slate-400">{agent.lang}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {["PostgreSQL", "Redis", "NATS", "Qdrant", "MinIO", "GHCR", "GitHub Pages"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
