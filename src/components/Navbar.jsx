import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <div className="logo">
          amit<span>.dev</span>
        </div>
        <ul className="navlinks">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                <span className="tag-num">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
