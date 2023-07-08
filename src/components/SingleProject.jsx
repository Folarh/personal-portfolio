import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SingleProject({
  link,
  img,
  title,
  stack,
  description,
}) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    // data-aos="zoom-out"
    <div className="single-project">
      <div className="project-image">
        <a href={link}>
          <img src={img} alt="grace" />
        </a>
      </div>
      <div className="project-title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
