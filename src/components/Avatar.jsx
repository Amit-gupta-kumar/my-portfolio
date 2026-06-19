import { profile } from "../data/content";
import "../styles/Avatar.css";

export default function Avatar() {
  return (
    <div className="avatar-card">
      <div className="avatar-frame">
        <img src="/profile.jpg" alt={profile.name} />
      </div>
      <div className="avatar-name">{profile.name}</div>
      <div className="avatar-role">Software Engineer · Java Trainer</div>
      <div className="status">open to opportunities</div>
      <div className="social-row">
        <a href={`mailto:${profile.email}`} title="Email">@</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">GH</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} title="Phone">☏</a>
      </div>
    </div>
  );
}
