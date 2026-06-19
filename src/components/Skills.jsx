import { skillGroups } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Skills.css";

export default function Skills() {
  const sectionRef = useScrollReveal();
  const groupsRef = useScrollReveal();

  return (
    <section id="skills" className="wrap reveal" ref={sectionRef}>
      <div style={{ height: '60px' }}></div>
      <h2 className="title">Skills</h2>

      <div className="skill-groups reveal-stagger" ref={groupsRef}>
        {skillGroups.map((group) => (
          <div className="skill-box" key={group.title}>
            <h4>{group.title}</h4>
            <div className="chip-row">
              {group.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
