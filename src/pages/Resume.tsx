const honors = [
  "Dean's List — 6-time recipient",
  "Attended AfroTech 2025, fully funded by Apple and HSI",
  "Selected as 1 of 98 participants for Bloomberg Tech Insights Summer School",
  "Undergraduate researcher funded through Innovation (Apple) Scholars",
  "Former President of the Women in Computer Science Club at CSUMB",
  "AAUW Monterey Peninsula Branch Local Scholarship Winner",
  "Selected as 1 of 100 students nationwide for the Google Leadership Symposium",
  "Presented research at the CSUMB Spring Showcase and Summer Research Symposium (2025)",
];

const skills = {
  "Programming languages": ["Java", "Python", "JavaScript", "TypeScript", "Visual Basic .NET", "SQL"],
  "Machine learning / data": ["TensorFlow", "Keras", "Matplotlib", "NumPy", "Pandas", "Scikit-learn"],
  "Frontend / web": ["React.js", "HTML / CSS", "React Native"],
  "Backend / frameworks": ["Node.js", "Express.js", "Spring Boot"],
  Databases: ["MongoDB", "MySQL", "SQLite", "SQL Server"],
  "Testing / QA": ["Mocha", "Chai", "Jest", "Postman"],
  Tools: ["VS Code", "IntelliJ", "GitHub / Git", "Docker", "SSRS", "Linux Terminal", "Heroku"],
};

const experience = [
  {
    title: "Software Engineer Intern",
    org: "Digital NEST",
    dates: "September 2026 — Present",
    bullets: [
      "Build and ship software with a nonprofit engineering team supporting technology learning centers for Latinx youth across California.",
      "Collaborate on product features, code review, and delivery practices in a production engineering environment.",
    ],
  },
  {
    title: "Advanced Machine Learning Teaching Assistant",
    org: "CSU Monterey Bay School of Computing",
    dates: "August 2026 — Present",
    bullets: [
      "Support students in advanced machine learning coursework through labs, debugging help, and concept clarification.",
      "Reinforce applied ML topics and help students translate theory into working implementations.",
    ],
  },
  {
    title: "Information Technology Intern",
    org: "City of Monterey",
    dates: "June 2026 — August 2026",
    bullets: [
      "Modernized location-based work-order retrieval for Public Works by rewriting SQL queries and correcting joins in InforDB, supporting a shift from 30+ printed work orders daily to an iPad-based field workflow.",
      "Integrated permit data across legacy and modern databases to improve SSRS encroachment-permit reporting for the Building Department.",
      "Resolved validation, commenting, and ADU/JADU workflow defects in Visual Basic .NET housing applications that shipped to production.",
    ],
  },
  {
    title: "UROC Researcher",
    org: "CSU Monterey Bay",
    dates: "June 2026 — August 2026",
    bullets: [
      "Researched the impact of gamification in K–12 education, examining engagement, cognitive load, and comprehension through Self-Determination Theory, Flow Theory, and Vygotsky’s ZPD.",
      "Designed and prototyped an i-Ready game feature combining diagnostic testing, adaptive difficulty, team challenges, and formative assessment supports.",
    ],
  },
  {
    title: "Resident Advisor",
    org: "CSU Monterey Bay Housing Department",
    dates: "September 2025 — May 2026",
    bullets: [
      "Mentored and supported a residential community of 36 students, fostering an inclusive and safe living environment.",
      "Organized weekly community events to promote student engagement, wellness, and academic success.",
      "Enforced university housing policies and served as a first point of contact for conflict resolution.",
      "Provided on-call support and crisis management to ensure student safety and well-being.",
    ],
  },
  {
    title: "Data Science Teaching Assistant",
    org: "CSU Monterey Bay School of Computing",
    dates: "August 2025 — May 2026",
    bullets: [
      "Supported 76 students by debugging code and clarifying programming concepts to improve assignment completion.",
      "Guided students through Python, Matplotlib, NumPy, Seaborn, K-Nearest Neighbors, logistic regression, and decision trees.",
      "Facilitated weekly four-hour in-person lab sessions and four weekly office hours.",
    ],
  },
  {
    title: "Bloomberg Tech Insights Participant",
    org: "Bloomberg",
    dates: "June 2025 — August 2025",
    bullets: [
      "Selected as 1 of 98 participants from 400+ applicants for a selective seven-week summer program.",
      "Completed 90+ hours of algorithmic practice, weekly coding sessions, and mock interviews with Bloomberg engineers.",
    ],
  },
  {
    title: "Logic with Reasoning Teaching Assistant",
    org: "CSU Monterey Bay Extended Education Department",
    dates: "May 2025 — June 2025",
    bullets: [
      "Supported 30+ students in mastering complex logical frameworks and abstract problem-solving skills.",
      "Graded coursework and delivered required materials accurately and on time.",
      "Led office hours and 1:1 sessions, translating technical concepts into approachable language.",
    ],
  },
  {
    title: "Innovation (Apple) Scholar Researcher",
    org: "CSU Monterey Bay Computer Science Department",
    dates: "September 2024 — May 2026",
    bullets: [
      "Conducted independent research with Apple mentors on the effects of AI auto-completion tools under Dr. Joshua Gross.",
      "Designed a JavaScript Visual Studio Code extension that replicates GitHub Copilot autocomplete while deliberately injecting erroneous suggestions for research.",
      "Curated an ePortfolio that showcases research and professional identity for graduate-school and employer audiences.",
    ],
  },
  {
    title: "Front-End Research Assistant",
    org: "CSU Monterey Bay Computer Science Department",
    dates: "April 2024 — September 2025",
    bullets: [
      "Developed front-end features for Frankenweb, the counterpart to Draculog, an energy consumption approximation program.",
      "Enabled backend programs to analyze data and produce graphs and scores reflecting code time complexity.",
      "Debugged and built with JavaScript, React, and MySQL while using Mocha, Chai, and Postman for testing.",
    ],
  },
];

export default function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-hero">
        <div>
          <p className="eyebrow">Resume · 2026</p>
          <h1>Achsah Jojo</h1>
          <p className="resume-intro">
            Computer science student, researcher, and software builder interested
            in thoughtful technology and the people it serves.
          </p>
        </div>
        <div className="resume-actions">
          <a className="resume-email" href="mailto:achsahmaria.jojo@gmail.com">
            achsahmaria.jojo@gmail.com
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="print-button"
          >
            Print / save PDF <span>↗</span>
          </button>
        </div>
      </section>
      <div className="resume-grid">
        <aside className="resume-sidebar">
          <section className="resume-section">
            <p className="section-label">Education</p>
            <div className="education-entry">
              <div className="resume-date">2022 — 2026</div>
              <h2>Bachelor of Science</h2>
              <p>Computer Science · Software Engineering</p>
              <p>California State University, Monterey Bay</p>
              <p>Seaside, CA</p>
              <p className="gpa">
                GPA <strong>3.93</strong>
              </p>
            </div>
          </section>
          <section className="resume-section">
            <p className="section-label">Relevant coursework</p>
            <ul className="course-list">
              {[
                "Data Structures and Algorithms",
                "Advanced Machine Learning",
                "Software Engineering",
                "Data Science",
                "Database Management",
                "Operating Systems",
                "Computer Networks",
              ].map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </section>
          <section className="resume-section">
            <p className="section-label">Awards & honors</p>
            <ul className="honor-list">
              {honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </section>
        </aside>
        <div className="resume-content">
          <section className="resume-section skills-section">
            <p className="section-label">Technologies</p>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div className="skill-group" key={category}>
                  <h3>{category}</h3>
                  <p>{items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="resume-section experience-section">
            <p className="section-label">Experience</p>
            <div className="experience-list">
              {experience.map((role) => (
                <article className="experience-entry" key={`${role.title}-${role.org}`}>
                  <div className="experience-heading">
                    <div>
                      <h2>{role.title}</h2>
                      <p className="organization">{role.org}</p>
                    </div>
                    <p className="resume-date">{role.dates}</p>
                  </div>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
