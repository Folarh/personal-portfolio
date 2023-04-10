import React from 'react'
import User from '../components/User'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Project from '../components/Project'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <User/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      
    </div>
  )
}
