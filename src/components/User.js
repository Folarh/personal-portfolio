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
        <button>Github</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
      </div>
    </div>
  );
}
