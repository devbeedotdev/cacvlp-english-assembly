import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadershipHighlight } from "@/components/LeadershipHighlight";
import { UpcomingProgram } from "@/components/UpcomingProgram";
import { WorkersDepartmentsSpotlight } from "@/components/WorkersDepartmentsSpotlight";
import { AboutUs } from "@/components/AboutUs";
import { Give } from "@/components/Give";

export default function CacvlpEnglishAssemblyPage() {
  return (
    <div className="space-y-0">
      <Header />
      <Hero />
      <UpcomingProgram />
      <AboutUs />
      <Give />
      <LeadershipHighlight />
      <WorkersDepartmentsSpotlight />
     
    </div>
  );
}
