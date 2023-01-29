import React from "react";
import Gracey from "../assets/gracey.png";
import Github from "../assets/github clone1.png";
import Ecommerce from "../assets/ecommerce1.png";
import "./Project.css";

export default function Project() {
  return (
    <div className="project">
      <div className="project-header">
        <h2>Projects</h2>
      </div>
      <div className="project-cover">
          <div className="project-image">
            <a href="https://gracelandej.netlify.app">
            <img src={Gracey} alt="grace" />
            </a>
            
          </div>
          <div className="project-title">
            <h4>Graceland Farm</h4>
            <h4>Html Css & Javascript</h4>
            <p>
              Built a simple and responsive farm website<br/>
               using Html, Css and
              Javascript
            </p>
          </div>
      </div>
       <div className="project-cover">
          <div className="project-image">
          <a href="https://mygithubclone-altschool.netlify.app">
          <img src={Github} alt="grace" />
          </a>
           
          </div>
          <div className="project-title">
            <h4>Github repository fetch</h4>
            <h4>React</h4>
            <p>
              implemented an Api fetch from github<br/>
               Api to fetch repository of a
              particular<br/>
               user and also implemented proper SEO.
            </p>
          </div>
        </div>
        <div className="project-cover">
          <div className="project-image">
          <a href="https://beautycom.netlify.app">
          <img src={Ecommerce} alt="grace" />
          </a>
           
          </div>
          <div className="project-title">
            <h4>Ecommerce webpage</h4>
            <h4>React</h4>
            <p>
              Created a simple ecoomerce web app<br/>
               with an add to cart and remove from <br/>
               cart 
              functinality<br/>
               
            </p>
          </div>
        </div>
        
    </div>
  );
}
