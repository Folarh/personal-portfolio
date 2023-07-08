import React, { useEffect } from "react";
import "./User.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function User() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="home__info" data-aos="zoom-out">
      <div className="home_about">
        <span>Hello 👋</span>
        <span className="home__name">I'm Taiwo Ojo</span>
        <span className="home__stack">Full-Stack Developer</span>
      </div>

      <div className="home_btn">
        <button>
          <a href="https://github.com/Folarh">Github</a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/taiwo-ojo-2b021b1a6">LinkedIn</a>
        </button>
        <button>
          <a href="https://twitter.com/hardey_folarin?t=0sEflXoUgR5ByRO8enzrTA&s=09">
            Twitter
          </a>
        </button>
      </div>
    </div>
  );
}
