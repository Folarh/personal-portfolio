import Gracey from "../assets/gracey.png";
import Chatters from "../assets/chatters.png";
import Github from "../assets/github clone1.png";
import ForCommerce from "../assets/com.png";
import SingleProject from "./SingleProject";
import "./Project.css";

export default function Project() {
  return (
    <div className="project">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="all-projects">
        <SingleProject
          link="https://chatterz.netlify.app"
          img={Chatters}
          title="Chatters App"
          stack="React Typscript and firbase"
          description=" A platform where user can create, and have access to their content"
        />
        <SingleProject
          link="https://forcommerce.netlify.app"
          img={ForCommerce}
          title="Ecommerce App"
          stack="React"
          description=" A simple ecoomerce web app with an add to cart and remove fromcart functinality"
        />
        <SingleProject
          link="https://gracelandej.netlify.app"
          img={Gracey}
          title="Graceland Farm"
          stack="Html Css & Javascript"
          description=" Built a simple and responsive farm website
      using Html, Css and
     Javascript"
        />
        <SingleProject
          link="https://mygithubclone-altschool.netlify.app"
          img={Github}
          title="Github repository fetch"
          stack="React"
          description="implemented an Api fetch from github Api to fetch repository of a particular user and also implemented proper SEO"
        />
      </div>
    </div>
  );
}
