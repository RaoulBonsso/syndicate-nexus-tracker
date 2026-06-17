export const projectData = {
  name: "SyndicateNexus",
  tagline: "Operating System à Agents IA pour équipes tech",
  mission: "Demande ce que tu veux en langage naturel. Une crew d'agents IA code, documente, surveille et déploie — en autonomie.",
  startDate: "2026-06-17",
  durationDays: 21,
  repo: "https://github.com/joyboy-dev/syndicate-nexus",
  trackerRepo: "https://github.com/joyboy-dev/syndicate-nexus-tracker",
};

export const agents = [
  { id: "orchestrator", name: "Orchestrator", lang: "Node.js / Fastify", role: "API Gateway + WebSocket", color: "from-blue-500 to-cyan-400", icon: "Orbit" },
  { id: "mind", name: "Mind", lang: "Python / FastAPI / LangGraph", role: "Cerveau LLM & planification", color: "from-purple-500 to-pink-500", icon: "Brain" },
  { id: "scribe", name: "Scribe", lang: "Python / FastAPI", role: "Documentation & specs", color: "from-emerald-500 to-teal-400", icon: "FileText" },
  { id: "forge", name: "Forge", lang: "Java / Spring Boot", role: "Génération & revue de code", color: "from-orange-500 to-amber-400", icon: "Hammer" },
  { id: "sentinel", name: "Sentinel", lang: "Rust / Axum", role: "Monitoring & alertes", color: "from-red-500 to-rose-400", icon: "Shield" },
  { id: "front", name: "Front", lang: "Next.js / TypeScript", role: "Dashboard temps réel", color: "from-indigo-500 to-violet-400", icon: "Layout" },
];

export const weeks = [
  {
    id: 1,
    title: "Semaine 1 — Fondations",
    theme: "Architecture, repo, CI/CD, Docker, squelette des services",
    days: [
      { day: "J1", title: "Init & Architecture", status: "done", tasks: ["Repo Git", "README & vision", "Architecture Mermaid"] },
      { day: "J2", title: "Docker & CI/CD", status: "in-progress", tasks: ["Docker Compose", "GitHub Actions workflow"] },
      { day: "J3", title: "Orchestrator", status: "todo", tasks: ["Node.js/Fastify", "/health endpoint", "WebSocket"] },
      { day: "J4", title: "Dashboard Front", status: "todo", tasks: ["Next.js layout", "Chat UI", "Connexion API"] },
      { day: "J5", title: "Mind LLM", status: "todo", tasks: ["LangGraph setup", "Décomposition requête"] },
      { day: "WE", title: "Revue + Post #1", status: "todo", tasks: ["Revue Claude/Kimi", "Post LinkedIn annonce"] },
    ],
  },
  {
    id: 2,
    title: "Semaine 2 — Agents & Intelligence",
    theme: "Implémentation des agents spécialisés et collaboration crew",
    days: [
      { day: "J6", title: "Agent Scribe", status: "todo", tasks: ["Génération docs", "Specs auto"] },
      { day: "J7", title: "Agent Forge", status: "todo", tasks: ["Génération Java", "Revue code"] },
      { day: "J8", title: "Agent Sentinel", status: "todo", tasks: ["Monitoring Rust", "Métriques"] },
      { day: "J9", title: "Crew Integration", status: "todo", tasks: ["Orchestration multi-agents", "Scénario end-to-end"] },
      { day: "J10", title: "Mémoire & RAG", status: "todo", tasks: ["Qdrant vector DB", "Base connaissances support"] },
      { day: "WE", title: "Revue + Posts #2/#3", status: "todo", tasks: ["Polish", "Posts architecture & agent"] },
    ],
  },
  {
    id: 3,
    title: "Semaine 3 — Déploiement & Lancement",
    theme: "Prod, démos, documentation, posts LinkedIn, open source",
    days: [
      { day: "J11", title: "GHCR Images", status: "todo", tasks: ["Build & push Docker images"] },
      { day: "J12", title: "Front Deploy", status: "todo", tasks: ["GitHub Pages / Vercel"] },
      { day: "J13", title: "Observabilité", status: "todo", tasks: ["Prometheus", "Grafana"] },
      { day: "J14", title: "Démos", status: "todo", tasks: ["3 scénarios filmés"] },
      { day: "J15", title: "Tests & Résilience", status: "todo", tasks: ["Charge", "Circuit breakers"] },
      { day: "J16", title: "Docs Open Source", status: "todo", tasks: ["CONTRIBUTING", "LICENSE", "ADR"] },
      { day: "J17", title: "Landing Page", status: "todo", tasks: ["Branding public"] },
      { day: "J18", title: "Posts #4/#5/#6", status: "todo", tasks: ["Engagement LinkedIn"] },
      { day: "J19", title: "Article Technique", status: "todo", tasks: ["Medium / Dev.to / LinkedIn"] },
      { day: "J20", title: "Final Polish", status: "todo", tasks: ["Corrections & optims"] },
      { day: "J21", title: "🚀 Lancement", status: "todo", tasks: ["Post #7", "Open source"] },
    ],
  },
];

export const kanbanColumns = [
  { id: "todo", title: "🔲 Todo", color: "bg-slate-700" },
  { id: "in-progress", title: "🟡 En cours", color: "bg-amber-600" },
  { id: "review", title: "🟠 Revue", color: "bg-orange-600" },
  { id: "done", title: "🟢 Fait", color: "bg-emerald-600" },
];

export const kanbanTasks = [
  { id: 1, title: "Initialiser repo Git + règles projet", column: "done", week: 1, tag: "setup" },
  { id: 2, title: "Rédiger README & vision", column: "done", week: 1, tag: "docs" },
  { id: 3, title: "Architecture Mermaid", column: "done", week: 1, tag: "archi" },
  { id: 4, title: "Docker Compose de base", column: "in-progress", week: 1, tag: "infra" },
  { id: 5, title: "CI/CD GitHub Actions", column: "in-progress", week: 1, tag: "devops" },
  { id: 6, title: "Tracker web visuel", column: "in-progress", week: 1, tag: "marketing" },
  { id: 7, title: "Orchestrator Node.js", column: "todo", week: 1, tag: "backend" },
  { id: 8, title: "Dashboard Next.js", column: "todo", week: 1, tag: "frontend" },
  { id: 9, title: "Mind LangGraph", column: "todo", week: 1, tag: "ai" },
  { id: 10, title: "Agent Scribe Python", column: "todo", week: 2, tag: "ai" },
  { id: 11, title: "Agent Forge Java", column: "todo", week: 2, tag: "backend" },
  { id: 12, title: "Agent Sentinel Rust", column: "todo", week: 2, tag: "backend" },
  { id: 13, title: "Crew multi-agents", column: "todo", week: 2, tag: "ai" },
  { id: 14, title: "RAG / Qdrant", column: "todo", week: 2, tag: "ai" },
  { id: 15, title: "Déploiement GHCR + Pages", column: "todo", week: 3, tag: "devops" },
  { id: 16, title: "Démos filmées", column: "todo", week: 3, tag: "marketing" },
  { id: 17, title: "Lancement LinkedIn", column: "todo", week: 3, tag: "marketing" },
];

export const metrics = [
  { label: "Agents", value: 6, target: 6 },
  { label: "Langages", value: 4, target: 4 },
  { label: "Jours restants", value: 21, target: 21 },
  { label: "Services Docker", value: 11, target: 11 },
];

export const linkedinPosts = [
  { id: 1, day: "J7", title: "Annonce du projet", status: "todo" },
  { id: 2, day: "J10", title: "L'architecture", status: "todo" },
  { id: 3, day: "J12", title: "Premier agent", status: "todo" },
  { id: 4, day: "J16", title: "Déploiement", status: "todo" },
  { id: 5, day: "J18", title: "Multi-agents", status: "todo" },
  { id: 6, day: "J20", title: "Bilan & leçons", status: "todo" },
  { id: 7, day: "J21", title: "🚀 Lancement", status: "todo" },
];
