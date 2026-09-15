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
    <article className="rounded-2xl border p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="mt-3 text-gray-600">{description}</p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-4">
        {githubUrl && (
          <a className="underline" href={githubUrl} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        )}
        {externalUrl && (
          <a className="underline" href={externalUrl} target="_blank" rel="noreferrer">
            Learn more
          </a>
        )}
      </div>
    </article>
  );
}
