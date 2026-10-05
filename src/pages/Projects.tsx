import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <p className="eyebrow">Selected work</p>
        <h1>
          Projects that taught me
          <br />
          <em>how to build.</em>
        </h1>
        <p>
          From full-stack apps to machine-learning analyses, these are the
          projects that shaped how I think about software, research, and
          collaboration.
        </p>
      </section>

      <div className="projects-grid">
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
