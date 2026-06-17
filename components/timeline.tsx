"use client";

import { motion } from "framer-motion";
import { weeks } from "@/lib/data";
import { Check, Circle, Clock } from "lucide-react";

const statusIcon = {
  done: Check,
  "in-progress": Clock,
  todo: Circle,
};

const statusColor = {
  done: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "in-progress": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  todo: "text-slate-500 bg-slate-800 border-slate-700",
};

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Roadmap 21 Jours</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un sprint itératif de 3 semaines pour passer de l'idée au lancement en production.
          </p>
        </motion.div>

        <div className="space-y-12">
          {weeks.map((week, weekIndex) => (
            <motion.div
              key={week.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: weekIndex * 0.1 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  S{week.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{week.title}</h3>
                  <p className="text-slate-400 text-sm">{week.theme}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {week.days.map((day, dayIndex) => {
                  const Icon = statusIcon[day.status as keyof typeof statusIcon];
                  return (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: dayIndex * 0.05 }}
                      className={`p-4 rounded-xl border ${statusColor[day.status as keyof typeof statusColor]} hover:scale-[1.02] transition-transform`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4" />
                        <span className="font-bold text-sm">{day.day} — {day.title}</span>
                      </div>
                      <ul className="space-y-1">
                        {day.tasks.map((task) => (
                          <li key={task} className="text-xs opacity-80">• {task}</li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
