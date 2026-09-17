const conferences = [
  {
    number: "01",
    title: "AfroTech Conference",
    location: "Houston, TX · 2025",
    intro: "A room full of builders, founders, researchers, and possibility.",
    images: ["/afrotech.png", "/afrotech_me.png"],
    points: ["Built meaningful connections with founders, peers, and 20+ recruiters while gaining career-shaping insights.", "Spoke with founders like Dr. Stevens Bonhomme and collaborated with fellow researchers and attendees.", "Networked with recruiters from Google, GE HealthCare, Mars, Wells Fargo, and Johnson & Johnson, then followed up with new connections from Invesco, Audible, Bayer, and F5."]
  },
  {
    number: "02",
    title: "California Conference for Women",
    location: "California · 2025",
    intro: "Representing CSUMB and learning from women who lead with conviction.",
    images: ["/cali_women_conf.png"],
    points: ["Attended as President of the Women in Computer Science Club and an advocate for women in technology.", "Heard powerful talks from Jane Fonda, Brittney Griner, Padma Lakshmi, and role model Simone Biles, whose message on unity and mental health deeply resonated.", "Connected with inspiring women at the Career Girls booth, leadership coach Rachel Ernst, and Women of Impact from Notre Dame San Jose High School.", "Left motivated to strengthen opportunities and representation for women in STEM, especially in underrepresented communities."]
  },
  {
    number: "03",
    title: "SJSU Women in Engineering",
    location: "San Jose, CA · 2025",
    intro: "A reminder that meaningful careers are built through meaningful connections.",
    images: ["/sjsu_women.png"],
    points: ["Attended as President of CSUMB’s Women in Computer Science Club, learning from engineering leaders including Sally Benson, Rose Castanares, Savi Boggarapu, and Suchreet Dhaliwal.", "Built meaningful connections with peers during networking sessions and lunch, staying in touch with new contacts on LinkedIn.", "Took away practical lessons: opportunities often come through relationships, consistent follow-ups matter, and small talk can lead to lasting impact.", "Gained career advice to maintain a master resume and use strong technical keywords, leaving motivated after attending with the WICS board."]
  },
  {
    number: "04",
    title: "Google Leadership Symposium",
    location: "Atlanta, GA · 2025",
    intro: "Leadership lessons that turned into a renewed mission for community.",
    images: ["/google_team.png", "/google_frnds.png"],
    points: ["Attended the Google Leadership Symposium while representing CSUMB’s Women in Computer Science Club.", "Learned from impactful leaders like Gale King, Suzanne Lesko, and Jeanine Banks, with keynote lessons on character, adaptability, and growth.", "Connected with peers from Howard and Bowie State and began planning a potential Google-sponsored hackathon through an introduction from Suzanne Lesko.", "Returned with a renewed mission to strengthen the club through mentorship circles, mental-health check-ins, and continued leadership development."]
  }
];

export default function Conferences() {
  return <main className="conferences-page">
    <section className="conference-hero"><p className="eyebrow">Conferences · 2025</p><h1>Every conference is<br /><em>a doorway.</em></h1><p>Each one opens into new ideas, new people, and new possibilities. These are the rooms that shaped how I think about leadership, technology, and community.</p></section>
    <div className="conference-list">{conferences.map((conference) => <article className="conference-entry" key={conference.number}><div className="conference-meta"><span>{conference.number}</span><p>{conference.location}</p></div><div className="conference-info"><p className="eyebrow">Conference experience</p><h2>{conference.title}</h2><p className="conference-intro">{conference.intro}</p><ul>{conference.points.map((point) => <li key={point}>{point}</li>)}</ul></div><div className={`conference-images images-${conference.images.length}`}>{conference.images.map((image) => <img key={image} src={image} alt={`${conference.title} experience`} />)}</div></article>)}</div>
    <section className="conference-reflection"><p className="eyebrow">What I carry forward</p><h2>Show up curious.<br /><em>Leave room for connection.</em></h2><p>From recruiter conversations to leadership keynotes, every conference reminded me that growth is rarely a solo process. I want to keep building spaces where more students can see themselves in technology—and see a path forward.</p></section>
  </main>;
}
