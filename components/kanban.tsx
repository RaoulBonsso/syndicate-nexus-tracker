"use client";

import { motion } from "framer-motion";
import { kanbanColumns, kanbanTasks } from "@/lib/data";

const tagColors: Record<string, string> = {
  setup: "bg-slate-700 text-slate-200",
  docs: "bg-blue-900/50 text-blue-200",
  archi: "bg-purple-900/50 text-purple-200",
  infra: "bg-emerald-900/50 text-emerald-200",
  devops: "bg-orange-900/50 text-orange-200",
  backend: "bg-red-900/50 text-red-200",
  frontend: "bg-cyan-900/50 text-cyan-200",
  ai: "bg-pink-900/50 text-pink-200",
  marketing: "bg-indigo-900/50 text-indigo-200",
};

export function Kanban() {
  return (
    <section id="kanban" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Kanban Visuel</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Suivi en temps réel des tâches. Mis à jour quotidiennement pendant le sprint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kanbanColumns.map((column) => {
            const tasks = kanbanTasks.filter((t) => t.column === column.id);
            return (
              <motion.div
                key={column.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800"
              >
                <div className={`${column.color} text-white text-sm font-semibold px-3 py-2 rounded-xl mb-4 flex items-center justify-between`}>
                  <span>{column.title}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs">{tasks.length}</span>
                </div>

                <div className="space-y-3">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      <p className="text-sm text-slate-200 mb-2">{task.title}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-lg ${tagColors[task.tag] || "bg-slate-700"}`}>
                          {task.tag}
                        </span>
                        <span className="text-xs text-slate-500">S{task.week}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
