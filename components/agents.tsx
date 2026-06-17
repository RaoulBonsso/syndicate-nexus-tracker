"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/data";
import { Brain, FileText, Hammer, Shield, Layout, Orbit } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  FileText,
  Hammer,
  Shield,
  Layout,
  Orbit,
};

export function Agents() {
  return (
    <section id="agents" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">La Crew d'Agents</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            6 agents, 4 langages, une seule mission : transformer une idée en livrable déployé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = iconMap[agent.icon];
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all hover:-translate-y-1"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${agent.color} rounded-t-2xl`} />
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${agent.color} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">{agent.lang}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
                <p className="text-slate-400 text-sm">{agent.role}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
