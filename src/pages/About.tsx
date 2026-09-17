import headshot from "../assets/headshot_achsah.png";
import { Link } from "react-router";

const highlights = [
  { number: "01", slug: "kelp-your-neighbor", title: "Kelp Your Neighbor Hackathon", text: "Led the vision for a large-scale CSUMB hackathon, bringing together 42+ teams, 80+ attendees, and 10+ mentors from Google, Apple, and the wider community." },
  { number: "02", slug: "women-in-stem", title: "Women in STEM podcast", text: "Featured on Lunch with Leaders to discuss visibility and influence in tech, sharing the journey from uninvolved freshman to student leader with 6,000+ listeners." },
  { number: "03", slug: "ottervoices", title: "OtterVoices: Student Spotlight", text: "Recognized by CSUMB for building meaningful campus connections and amplifying the student experience as President of Women in Computer Science." },
  { number: "04", slug: "otterhacks", title: "OtterHacks", text: "Organized CSUMB’s first hackathon, partnered with Google for an #IAMRemarkable workshop, and launched an Unlock Open Source initiative." },
];

export default function About() {
  return <main className="about-page">
    <section className="about-hero"><div className="about-hero-copy"><p className="eyebrow">A little about me</p><h1>Curious by nature.<br /><em>Committed to impact.</em></h1><p className="about-lede">I’m Achsah Jojo, a Computer Science student at California State University, Monterey Bay, specializing in software engineering.</p></div><div className="portrait-wrap"><img src={headshot} alt="Achsah Jojo smiling" /><span className="portrait-note">CSUMB · Seaside, CA</span></div></section>

    <section className="about-story"><p className="section-label">My story</p><div className="story-copy"><p>Computer Science wasn’t my first choice. It became one of those unexpected yet rewarding paths that keeps shaping my future. In college, I developed a deeper interest in technology and began uncovering the software behind the applications we use every day.</p><p>I grew up in Karnataka, India, until the age of 10, surrounded by family members working in healthcare and education. My first experience with programming in high school was difficult, so I assumed I would follow in my parents’ footsteps and pursue healthcare. My dad encouraged me to give Computer Science another chance—he thought college might help me see it differently.</p><p>He was right. The guidance and support of the Computing Talent Initiative cohort and dedicated CSUMB professors helped me find belonging in this field. That community gave me the confidence to persist as one of the few women in a traditionally male-dominated discipline.</p><p>Today, I’m driven by the challenge of making technology work seamlessly for people—whether I’m building front-end and back-end systems or exploring how artificial intelligence can simplify everyday life. I’m excited about what I’m learning and what comes next.</p></div></section>

    <section className="development-section"><div className="development-heading"><div><p className="eyebrow">Personal development</p><h2>Building community<br />along the way.</h2></div><p>Leadership has been another way I’ve learned to design for people: by listening, bringing the right voices together, and making room for others to grow.</p></div><div className="highlight-grid">{highlights.map((item) => <Link className="highlight-card" to={`/about/${item.slug}`} key={item.number}><span>{item.number}</span><h3>{item.title} <b>↗</b></h3><p>{item.text}</p></Link>)}</div></section>

    <section className="about-cta"><p className="eyebrow">Let’s connect</p><h2>Have a shared interest<br />or an idea to explore?</h2><a href="mailto:achsahmaria.jojo@gmail.com">I’d love to hear from you <span>↗</span></a></section>
  </main>;
}
