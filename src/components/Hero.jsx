import { profile } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import Avatar from "./Avatar";
import "../styles/Hero.css";

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <header className="hero wrap">
      <div className="hero-grid">
        <div>
          <div className="editor">
            <div className="editor-top">
              <div className="dot r"></div>
              <div className="dot y"></div>
              <div className="dot g"></div>
              <div className="editor-file">amit.profile.js</div>
            </div>
            <div className="editor-body">
              <div>
                <span className="ln">1</span>
                <span className="kw">const</span> <span className="key">developer</span>{" "}
                <span className="punc">= {"{"}</span>
              </div>
              <div>
                <span className="ln">2</span>&nbsp;&nbsp;name<span className="punc">:</span>{" "}
                <span className="str">"{profile.name}"</span>
                <span className="punc">,</span>
              </div>
              <div>
                <span className="ln">3</span>&nbsp;&nbsp;role<span className="punc">:</span>{" "}
                <span className="str">"{typed}"</span>
                <span className="cursor"></span>
              </div>
              <div>
                <span className="ln">4</span>&nbsp;&nbsp;based<span className="punc">:</span>{" "}
                <span className="str">"{profile.location}"</span>
                <span className="punc">,</span>
              </div>
              <div>
                <span className="ln">5</span>&nbsp;&nbsp;stack<span className="punc">:</span>{" "}
                <span className="punc">[</span>
                {profile.stack.map((s, i) => (
                  <span key={s}>
                    <span className="str">"{s}"</span>
                    {i < profile.stack.length - 1 && <span className="punc">, </span>}
                  </span>
                ))}
                <span className="punc">],</span>
              </div>
              <div>
                <span className="ln">6</span>&nbsp;&nbsp;
                <span className="com">// CS engineering grad, ex-instructor, builds things that run</span>
              </div>
              <div>
                <span className="ln">7</span>
                <span className="punc">{"};"}</span>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Get in touch →
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
          </div>
        </div>

        <Avatar />
      </div>
    </header>
  );
}
