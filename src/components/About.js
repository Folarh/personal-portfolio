import React from 'react'
import './About.css'
import Photo from '../assets/photo.jpg'

export default function About() {
  return (
    <div className='about'>
     <div className='about-header'>
     <h2>About me</h2>
     </div>

     <div className='about-all'>
     <div className='about__info'>
       <p>
           I am a web developer that specializes in frontend development,<br/>
           with a strong foundation in Html Css and Javascript <br/>
           experienced in all the stages of the devlopment cycle <br></br>
           for dynamic web projects
           well versed in numerous  frontend tools.

           </p>
</div>

   <div className="about__image">
       <img className='about__img' src={Photo} alt="my-pic"></img>
   </div>
     </div>

      
      
    </div>
  )
}
