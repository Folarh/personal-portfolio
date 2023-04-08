import React,{useEffect} from 'react'
import "./Skills.css"
import Bootstrap from '../assets/bootstrap.png'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Js from '../assets/js.png'
import ReactLogo from '../assets/react.png'
import SKillList from './SKillList'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className='skills' data-aos="zoom-in">
        <div className='skills__header'>
        <h2>Skills</h2>
        </div>
        <div className='skills__images'>
          <SKillList img={Html} stack="Html"/>
          <SKillList img={Css} stack="Css"/>
          <SKillList img={Bootstrap} stack="Bootstrap"/>
          <SKillList img={Js} stack="Javascript"/>
          <SKillList img={ReactLogo} stack="React"/>
           
        </div>
      
    </div>
  )
}
