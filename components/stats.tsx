"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-indigo-500/50 transition-colors"
            >
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-sm text-slate-400">{metric.label}</div>
              {metric.value !== metric.target && (
                <div className="mt-2 text-xs text-slate-500">/ {metric.target}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
