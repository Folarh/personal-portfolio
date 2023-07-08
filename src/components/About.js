import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about__info" data-aos="fade-up">
        <span>
          I’m a creative and result-oriented Full-Stack Developer with
          experience in developing and implementing interactive, user-friendly,
          and feature-rich software platforms. Strong ability in paying
          attention to details, problem-solving and precision at all times which
          are some of my core values and strength. Hardworking and energetic
          individual with excellent communication, goal-getter, team player, and
          leadership skills.
        </span>
      </div>
    </div>
  );
}
