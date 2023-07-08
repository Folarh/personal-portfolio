import React, { useEffect } from "react";
import "./Skills.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__header">
        <span>REACT</span>
        <span>VUE</span>
        <span>NODE</span>
        <span>EXPRESS</span>
        <span>MONGODB</span>
      </div>
    </div>
  );
}
