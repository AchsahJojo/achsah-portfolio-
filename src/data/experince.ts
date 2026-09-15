export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    startDate: "2020-01-01",
    endDate: "2023-01-01",
    description:
      "Developed and maintained web applications using React and Node.js.",
    technologies: ["React", "Node.js", "JavaScript", "TypeScript"],
  },
];
