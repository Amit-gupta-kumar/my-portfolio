import { projects } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Projects.css";

export default function Projects() {
  const sectionRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="projects" className="wrap reveal" ref={sectionRef}>
      <div style={{ height: '80px' }}></div>
      <h2 className="title">Projects</h2>
      <p className="section-sub">A few things built for fun and to learn by doing.</p>

      <div className="grid-3 reveal-stagger" ref={gridRef}>
        {projects.map((p) => (
          <div className="pcard" key={p.title}>
            
            {/* 🔗 STRETCHED LINK: Covers the entire grid box if a liveLink exists */}
            {p.liveLink && (
              <a 
                href={p.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="stretched-link"
                title={`Open ${p.title}`}
              />
            )}

            <div className="pcard-head">
              <span className="pcard-icon">{p.icon}</span>
              {p.liveLink && <span className="project-arrow">↗</span>}
            </div>

            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}