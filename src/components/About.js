import React from 'react'
import './About.css'
import Photo from '../assets/photo.jpg'

export default function About() {
  return (
    <div className='about'>
       <div className='about__info'>
       
       <h3>About me.........................</h3>
           
            <p>
                i am a web developer that specializes in frontend development, experienced in all the stages of the devlopment cycle for dynamic web projects
                well versed in numerous  frontend tools.
                </p>

        </div>

        <div className="about__image">
            <img className='about__img' src={Photo} alt="my-pic"></img>
        </div>
      
    </div>
  )
}
