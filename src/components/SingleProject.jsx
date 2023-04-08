import React,{useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SingleProject({link,img,title,stack, description}) {
  useEffect(()=>{
  AOS.init({duration: 2000})
  },[])

  return (
    <div className='single-project' >
      <div className="project-image" data-aos="zoom-in">
            <a href={link}>
            <img src={img} alt="grace" />
            </a>
            
          </div>
          <div className="project-title" data-aos="zoom-out">
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <p>
             {description}
            </p>
          </div>
    </div>
  )
}


