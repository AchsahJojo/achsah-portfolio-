interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>

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

      {githubUrl && (
        <a
          className="mt-5 inline-block underline"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      )}
    </article>
  );
}
