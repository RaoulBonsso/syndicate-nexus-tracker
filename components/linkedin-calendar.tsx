"use client";

import { motion } from "framer-motion";
import { linkedinPosts } from "@/lib/data";

export function LinkedInCalendar() {
  return (
    <section id="linkedin" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Calendrier LinkedIn</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un post clé par semaine + mises à jour quotidiennes pour maximiser la visibilité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {linkedinPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-[#0A66C2]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#0A66C2]/10">
                  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm font-mono text-slate-500">{post.day}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-lg ${post.status === "done" ? "bg-emerald-900/50 text-emerald-200" : "bg-slate-800 text-slate-400"}`}>
                {post.status === "done" ? "Publié" : "À venir"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
