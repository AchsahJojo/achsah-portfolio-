export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-6 py-20 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-purple-600">
        Software engineer & researcher
      </p>
      <h1 className="mb-6">Hi, I&apos;m Achsah Jojo.</h1>
      <p className="max-w-2xl text-lg">
        I build thoughtful software and explore technology that makes complex
        problems easier to solve.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a className="rounded-full bg-purple-600 px-5 py-3 text-white" href="/projects">
          View my projects
        </a>
        <a className="rounded-full border px-5 py-3" href="/contact">
          Get in touch
        </a>
      </div>
    </main>
  );
}
