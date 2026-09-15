export interface Project {
  title: string;
  description: string;
  techonologies: string[];
  githubUrl?: string;
  image?: string;
}

// create a constant var named projects
// that is an array of project objects ( each object contains all info about a project )

export const projects: Project[] = [
  {
    title: "GradQuest Masters App",
    description:
      "GradQuest helps students save time and reduce stress by matching them with graduate programs that fit their personal constraints such as budget, location, and GPA, GRE etc..The platform streamlines the entire application process by  tracking applications and their requirements, organizing documents, and sending timely reminders for upcoming application deadlines. OAuth2 login (Discord / GitHub) for secure sign-in React Native, TypeScript, JavaScript, Springboot Student user profiles with preference intake (target countries, budget, funding needs, deadlines, etc.) Generates a top-5 program match list based on user preferences (drawn from 60+ universities in the database) Saved Applications page to keep track of the schools you plan to apply to. Reminders page to view and receive notifications for important application deadlines and requirements​",
    techonologies: [
      "OAuth2 login (Discord / GitHub)",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Springboot",
    ],
    githubUrl: "https://github.com/LestDomzEDU/GradQuest-Front-End",
  },
];
