import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyndicateNexus Tracker | 21 jours Build in Public",
  description: "Suivi visuel du projet SyndicateNexus : Operating System à Agents IA pour équipes tech. Roadmap, Kanban, architecture et calendrier LinkedIn.",
  openGraph: {
    title: "SyndicateNexus Tracker",
    description: "21 jours pour construire un OS à Agents IA en microservices polyglottes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-200 antialiased">{children}</body>
    </html>
  );
}
