import Hero from "@/components/projects/Hero";
import ProjectsGrid from "@/components/projects/grid/ProjectsGrid";
import { MyProjects } from "@/project";
    
export default function Myproject() {
  return (
    <div className="mx-[120px]">
        <section id="header" className="mt-32">
          <Hero />
        </section>
        <section id="projects" className="mt-32">
            <ProjectsGrid projects={MyProjects} />
        </section>
    </div>
  );
}