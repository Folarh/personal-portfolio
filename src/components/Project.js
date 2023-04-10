
import Gracey from "../assets/gracey.png";
import Github from "../assets/github clone1.png";
import Ecommerce from "../assets/ecommerce1.png";
import ForCommerce from "../assets/com.png"
import SingleProject from "./SingleProject";
import "./Project.css";


export default function Project() {
 
  return (
    <div className="project" >
      <div className="title">
      <h2 >Projects</h2>
      </div>
     

<SingleProject 
     link= "https://forcommerce.netlify.app"
     img={ForCommerce}
      title="Ecommerce App"
      stack="React"
      description= " A simple ecoomerce web app with an add to cart and remove fromcart functinality"
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
     link= "https://mygithubclone-altschool.netlify.app"
     img={Github}
      title="Github repository fetch"
      stack="React"
      description= "implemented an Api fetch from github Api to fetch repository of a particular user and also implemented proper SEO"
    
      />

<SingleProject 
     link= "https://beautycom.netlify.app"
     img={Ecommerce}
      title="Ecommerce webpage"
      stack="React"
      description= " Created a simple ecoomerce web app with an add to cart and remove fromcart functinality"
    />
      </div>
  );
}
