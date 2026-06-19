import { education } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Education.css";

export default function Education() {
  const sectionRef = useScrollReveal();
  const listRef = useScrollReveal();

  return (
    <section id="education" className="wrap reveal" ref={sectionRef}>
      <div style={{ height: '60px' }}></div>
      <h2 className="title">Education</h2>

      <div className="edu-list reveal-stagger" ref={listRef}>
        {education.map((edu) => (
          <div className="edu-item" key={edu.degree}>
            <div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
            </div>
            <div>
              <span className="edu-year">{edu.year}</span>
              <span className="edu-score">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
