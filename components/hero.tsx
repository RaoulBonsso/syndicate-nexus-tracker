"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, GitBranch, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_40%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">21 jours · Build in Public · Open Source</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
        >
          SyndicateNexus
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Le premier <span className="text-indigo-400 font-semibold">Operating System à Agents IA</span> pour équipes tech.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Demande ce que tu veux en langage naturel. Une crew d'agents spécialisés code, documente, surveille et déploie — en autonomie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:scale-105"
          >
            <Rocket className="w-5 h-5" />
            Voir la roadmap
          </a>
          <a
            href="https://github.com/joyboy-dev/syndicate-nexus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all hover:scale-105 border border-slate-700"
          >
            <GitBranch className="w-5 h-5" />
            Repo GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
            <Bot className="relative w-32 h-32 text-indigo-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
