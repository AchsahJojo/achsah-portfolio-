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
          <a className="home-primary" href="/projects">
            View my projects <span>↗</span>
          </a>
          <a className="home-secondary" href="/contact">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
