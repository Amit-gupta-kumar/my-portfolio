import { experience } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Experience.css";

export default function Experience() {
  const sectionRef = useScrollReveal();
  const listRef = useScrollReveal();

  return (
    <section id="experience" className="wrap reveal" ref={sectionRef}>
      <div style={{ height: '60px' }}></div>
      <h2 className="title">Experience</h2>
      <p className="section-sub">A working history, most recent first.</p>

      <div className="timeline reveal-stagger" ref={listRef}>
        {experience.map((job) => (
          <div className="tl-item" key={job.role + job.date}>
            <div className="tl-dot"></div>
            <div className="tl-date">{job.date}</div>
            <div className="tl-role">{job.role}</div>
            <div className="tl-company">{job.company}</div>
            <div className="tl-desc">{job.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
