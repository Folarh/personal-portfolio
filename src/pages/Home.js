import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
         <div className='home__info'>
            <h3>Hi, My Name is</h3>
            <h1 className='home__name'>TAIWO OJO</h1>
            <h1 className='home__stack'>A FRONTEND DEVELOPER</h1>
            <p>I build things for the web, I like to craft solid and </p>
            <p>Scalable FRontend Products with great user experience</p>
            <button className="home__btn">Download Resume</button>

        </div>
        <About/>
        <Skills/>
        <Contact/>
      
    </div>
  )
}
