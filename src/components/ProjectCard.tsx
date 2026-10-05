interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  externalUrl?: string;
}

export default function ProjectCard({
  title,
  date,
  description,
  highlights,
  technologies,
  githubUrl,
  externalUrl,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <h2>{title}</h2>
        <span className="project-date">{date}</span>
      </div>
      <p className="project-description">{description}</p>

      <ul className="project-highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project-tags">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            View on GitHub <b>↗</b>
          </a>
        )}
        {externalUrl && (
          <a href={externalUrl} target="_blank" rel="noreferrer">
            Learn more <b>↗</b>
          </a>
        )}
      </div>
    </article>
  );
}
