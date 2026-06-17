import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Agents } from "@/components/agents";
import { ArchitectureTree } from "@/components/architecture-tree";
import { Timeline } from "@/components/timeline";
import { Kanban } from "@/components/kanban";
import { LinkedInCalendar } from "@/components/linkedin-calendar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Agents />
      <ArchitectureTree />
      <Timeline />
      <Kanban />
      <LinkedInCalendar />
      <Footer />
    </main>
  );
}
