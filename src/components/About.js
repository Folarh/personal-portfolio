import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Photo from '../assets/photo.jpg'

export default function About() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className='about'>
     <div className='about-header'>
     <h2>About me</h2>
     </div>

     <div className='about-all'>
     <div className='about__info' data-aos="fade-up">
       <p>
           I am a web developer that specializes in frontend development,<br/>
           with a strong foundation in Html Css and Javascript <br/>
           experienced in all the stages of the devlopment cycle <br></br>
           for dynamic web projects
           well versed in numerous  frontend tools.<br/>
           I began my career as a fish farmer,<br/>
           But, I have always been interested in technology ,<br/> so I decided to pursue a career in software development.<br/>
            I took online courses and taught myself the necessary skills<br/> to become a software developer.
            Since then, I've been sharpening my frontend developemnt skils.<br/>
            I'm a recent graduate of AltSchool Africa School of Enigeering<br/>
            I'm seeking internship opportunies and or junior role, so as to garner real life experience.
          

           </p>
</div>

   <div className="about__image" data-aos="fade-down">
       <img className='about__img' src={Photo} alt="my-pic"></img>
   </div>
     </div>

      
      
    </div>
  )
}
