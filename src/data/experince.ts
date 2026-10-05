export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

/** Shared experience data can live here; resume currently owns the live copy. */
export const experience: Experience[] = [];
