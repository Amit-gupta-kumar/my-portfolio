import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        built by <a href="#">amit.dev</a> — {profile.location}
      </div>
    </footer>
  );
}
