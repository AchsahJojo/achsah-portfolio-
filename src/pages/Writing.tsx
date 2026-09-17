import { useMemo, useState } from "react";

type Post = { title: string; date: string; readTime: string; image?: string; category: string; linkedinUrl?: string };
const posts: Post[] = [
  { title: "First WiCS x ChatGPT Event at California State University, Monterey Bay! 🎉", date: "Nov 9, 2025", readTime: "1 min read", category: "Community", image: "/google_team.png" },
  { title: "Met my former interviewer from Bloomberg on the last day?!", date: "Nov 9, 2025", readTime: "2 min read", category: "Reflections", image: "/afrotech_me.png" },
  { title: "Internship season grind", date: "Nov 9, 2025", readTime: "1 min read", category: "Career", image: "/research_presenting.png" },
  { title: "Over 20 recruiters in one day?!", date: "Nov 9, 2025", readTime: "1 min read", category: "Career", image: "/afrotech.png" },
  { title: "I met a founder and CEO at AFROTECH!", date: "Nov 9, 2025", readTime: "1 min read", category: "Networking", image: "/afrotech_me.png" },
  { title: "🦦 OtterHacks 3.0 Recap", date: "Nov 9, 2025", readTime: "1 min read", category: "Hackathons", image: "/otterhacks_team.png" },
  { title: "Diversity in Graduate Education", date: "Nov 9, 2025", readTime: "1 min read", category: "Education" },
  { title: "Summer Research Symposium", date: "Aug 16, 2025", readTime: "2 min read", category: "Research", image: "/research_present_1st_time.png" },
  { title: "My First Ever Technical Interview – Uber SWE 🚀", date: "Jul 14, 2025", readTime: "2 min read", category: "Career" },
  { title: "Reflections on the 2025 California Conference for Women", date: "Jul 14, 2025", readTime: "1 min read", category: "Reflections", image: "/cali_women_conf.png" },
  { title: "Takeaways from the SJSU Women in Engineering Conference 2025 👩‍💻", date: "Jul 14, 2025", readTime: "2 min read", category: "Conferences", image: "/sjsu_women.png" },
  { title: "Presented my research at CSUMB’s Spring Showcase!", date: "Jul 14, 2025", readTime: "1 min read", category: "Research", image: "/research_presenting_oral.png" },
  { title: "OtterHacks is back—and better than ever!", date: "Dec 27, 2024", readTime: "2 min read", category: "Hackathons", image: "/otterhacks_leading.png" },
  { title: "🚀 OtterHacks: CSUMB’s First-Ever Hackathon 🚀", date: "Dec 27, 2024", readTime: "2 min read", category: "Hackathons", image: "/otterhacks_team.png" },
  { title: "Tackling New Challenges in a Familiar Open Source Project", date: "Dec 27, 2024", readTime: "11 min read", category: "Engineering" },
  { title: "Committing To A Large Codebase", date: "Dec 27, 2024", readTime: "5 min read", category: "Engineering" },
];

export default function Writing() {
  const [query, setQuery] = useState("");
  const filteredPosts = useMemo(() => posts.filter((post) => `${post.title} ${post.category}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const featured = filteredPosts[0];
  return <main className="writing-page">
    <section className="writing-hero"><div><p className="eyebrow">Writing · Notes from the field</p><h1>Ideas in<br /><em>progress.</em></h1><p>Reflections on technology, community, research, and the small moments that make a career feel real.</p></div><div className="writing-count"><strong>{posts.length}</strong><span>posts &<br />counting</span></div></section>
    <section className="writing-toolbar"><label htmlFor="post-search">Find a post</label><input id="post-search" type="search" placeholder="Search writing..." value={query} onChange={(event) => setQuery(event.target.value)} /><span>{filteredPosts.length} results</span></section>
    {featured && <article className="featured-post"><div className="featured-image">{featured.image ? <img src={featured.image} alt="" /> : <div className="image-placeholder">Achsah<br />Jojo</div>}</div><div className="featured-copy"><p className="post-category">Featured · {featured.category}</p><h2>{featured.title}</h2><p className="post-meta">{featured.date} · {featured.readTime}</p><p className="featured-note">A collection of personal notes and professional reflections, originally shared through Achsah’s writing and social updates.</p><span className="post-link">Read the post <b>↗</b></span></div></article>}
    <section className="post-section"><div className="post-section-heading"><p className="section-label">All posts</p><p>Stories about learning in public, finding community, and building a future in tech.</p></div><div className="post-grid">{filteredPosts.slice(1).map((post) => <article className="post-card" key={post.title}><div className="post-card-image">{post.image ? <img src={post.image} alt="" /> : <div className="image-placeholder small">A / J</div>}</div><div className="post-card-copy"><p className="post-category">{post.category}</p><h3>{post.title}</h3><p className="post-meta">{post.date} · {post.readTime}</p><span className="post-link">View post <b>↗</b></span></div></article>)}</div>{filteredPosts.length === 0 && <p className="no-posts">No posts match “{query}”.</p>}</section>
    <section className="writing-cta"><p className="eyebrow">Follow along</p><h2>More thoughts,<br /><em>in real time.</em></h2><p>New reflections and updates are shared on LinkedIn. Add your post links to the Writing data when you’re ready to connect each card directly.</p><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Visit LinkedIn <span>↗</span></a></section>
  </main>;
}
