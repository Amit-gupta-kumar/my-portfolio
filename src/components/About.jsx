import { profile } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/About.css";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="wrap reveal" ref={ref}>
      <h2 className="title">About</h2>
      <p className="about-text">{profile.about}</p>
    </section>
  );
}
