import type { FormEvent } from "react";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Hello Achsah"));
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
    window.location.href = `mailto:achsahmaria.jojo@gmail.com?subject=${subject}&body=${body}`;
  }

  return <main className="contact-page">
    <section className="contact-hero"><p className="eyebrow">Get in touch</p><h1>Let’s start<br /><em>a conversation.</em></h1><p>Whether you have a question, an opportunity, or simply want to talk technology and community, I’d love to hear from you.</p></section>
    <div className="contact-grid"><aside className="contact-details"><p className="section-label">Contact details</p><a href="mailto:achsahmaria.jojo@gmail.com">achsahmaria.jojo@gmail.com</a><p>California State University,<br />Monterey Bay<br />Seaside, CA</p><div className="contact-note"><span>Usually replies within</span><strong>1–2 business days</strong></div></aside><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label></div><label>Subject<input name="subject" type="text" placeholder="What would you like to talk about?" required /></label><label>Message<textarea name="message" rows={7} placeholder="Write your message here..." required /></label><button type="submit">Send message <span>↗</span></button><p className="form-note">This opens your default email app with your message ready to send.</p></form></div>
  </main>;
}
