import { profile } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Contact.css";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="wrap reveal" ref={ref}>
      <div style={{ height: '60px' }}></div>
      <div className="contact-box">
        <h2>Let's build something →</h2>
        <p>Open to roles in Java development, web development, and technical training.</p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
