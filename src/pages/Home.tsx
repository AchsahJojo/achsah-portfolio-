import { Link } from "react-router";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <p className="eyebrow">Software engineer & researcher</p>
        <h1>
          Hi, I&apos;m <em>Achsah Jojo.</em>
        </h1>
        <p className="home-lede">
          I build thoughtful software and explore technology that makes complex
          problems easier to solve.
        </p>
        <div className="home-actions">
          <Link className="home-primary" to="/projects">
            View my projects <span>↗</span>
          </Link>
          <Link className="home-secondary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
