import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadershipHighlight } from "@/components/LeadershipHighlight";
import { UpcomingProgram } from "@/components/UpcomingProgram";
import { WorkersDepartmentsSpotlight } from "@/components/WorkersDepartmentsSpotlight";
import { AboutUs } from "@/components/AboutUs";
import { Give } from "@/components/Give";
import { BirthdayHighlight } from "@/components/BirthdayHighlight";

export default function CacvlpEnglishAssemblyPage() {
  return (
    <div className="space-y-0">
      <Header />
      <Hero />
      <UpcomingProgram />
      <AboutUs />
      <LeadershipHighlight />
      <Give />
      <BirthdayHighlight />
      <WorkersDepartmentsSpotlight />
     
    </div>
  );
}
