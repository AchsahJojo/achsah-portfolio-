export interface Project {
  title: string;
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    title: "GradQuest Masters App",
    date: "December 2025",
    description: "A graduate-school planning platform that matches students with programs based on budget, location, GPA, GRE scores, and other personal constraints.",
    highlights: ["OAuth2 login with Discord and GitHub", "Top-five program matches from a database of 60+ universities", "Saved applications and deadline reminders"],
    technologies: ["React Native", "TypeScript", "JavaScript", "Spring Boot"],
    githubUrl: "https://github.com/LestDomzEDU/GradQuest-Front-End",
  },
  {
    title: "Vocab App API",
    date: "October 2025",
    description: "A cross-platform vocabulary app backed by a custom API and Google OAuth authentication.",
    highlights: ["Built a Spring Boot and MongoDB REST API with CRUD operations", "Added Google OAuth with expo-auth-session", "Used AsyncStorage caching and Jest testing with 85% coverage", "Deployed the backend API on Heroku"],
    technologies: ["React Native", "Spring Boot", "MongoDB", "Google OAuth", "Jest"],
    githubUrl: "https://github.com/abplas/Devbuild_vocabapp_frontend",
  },
  {
    title: "Job Portal Application",
    date: "October 2025",
    description: "A cross-platform job-search app that brings internship and full-time listings into one place using the Adzuna API.",
    highlights: ["Integrated real-time listings from more than one million job postings", "Added registration, profiles, saved jobs, and offline access", "Wrote 25+ Jest unit tests with 90% test coverage", "Collaborated in a four-person agile team"],
    technologies: ["React Native", "Adzuna API", "AsyncStorage", "Jest"],
    githubUrl: "https://github.com/connorobro/JobPortal",
  },
  {
    title: "Predicting Use of Force in the New Orleans Police Department Dataset",
    date: "May 2025",
    description: "A machine-learning analysis of the New Orleans Police Department Use of Force dataset.",
    highlights: ["Compared Logistic Regression, Decision Trees, and K-Nearest Neighbors", "KNN achieved 67.8% cross-validation accuracy", "Identified race, ethnicity, and officer count as key predictive factors", "Evaluated class imbalance and contextual limitations"],
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
  },
  {
    title: "VetTrack Full-Stack Application",
    date: "May 2025",
    description: "A full-stack veterinary clinic application for managing animal visits and health records.",
    highlights: ["Built secure authentication with bcrypt and sessions", "Implemented full CRUD operations with Node.js and MySQL", "Planned work, delegated tasks, and coordinated team delivery"],
    technologies: ["Node.js", "Express", "MySQL", "JavaScript", "bcrypt"],
    externalUrl: "https://achsahjojo.tech/",
  },
  {
    title: "Dog Adoption and Length of Stay Influence",
    date: "May 2025",
    description: "An exploratory analysis of Sonoma County Animal Shelter data examining adoption rates and shelter stay duration.",
    highlights: ["Studied breed, intake type, and other adoption factors", "Cleaned data and compared trends with groupby and crosstab", "Created visualizations to highlight breed-specific stay lengths and outcomes"],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Brittle Burgers Database Management Design",
    date: "December 2024",
    description: "A MySQL database management system for tracking orders, inventory, supplies, rewards, and transactions across an international fast-food franchise.",
    highlights: ["Designed a comprehensive entity-relationship diagram", "Developed and executed MySQL queries"],
    technologies: ["MySQL", "Database Design"],
    externalUrl: "https://docs.google.com/presentation/d/1D8gFXriEZWImCDXTZBovMxJ4KPs_N2yZ5N1vWpsNc8g/edit",
  },
  {
    title: "Otter Library",
    date: "April 2024 – June 2024",
    description: "An Android library-management app supporting account creation, book reservations, and librarian administration.",
    highlights: ["Implemented user accounts and book reservations", "Built librarian system-management features"],
    technologies: ["Java", "Android Studio", "SQLite"],
    githubUrl: "https://github.com/AchsahJojo/Otter_Library",
  },
  {
    title: "Picture Filter",
    date: "December 2023",
    description: "A web platform that fetches random images from external APIs and applies image filters inspired by Apple Photos.",
    highlights: ["Created image filtering features with Pillow and Python", "Built the web interface for uploading and transforming images"],
    technologies: ["Python", "Flask", "Bootstrap", "Pillow"],
    githubUrl: "https://github.com/alonrodri404/cst205project",
  },
];
