import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 text-left">
      <h1>Projects</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            date={project.date}
            description={project.description}
            highlights={project.highlights}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            externalUrl={project.externalUrl}
          />
        ))}
      </div>
    </main>
  );
}
