import React from 'react'
import "./Skills.css"
import Bootstrap from '../assets/bootstrap.png'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Js from '../assets/js.png'
import ReactLogo from '../assets/react.png'

export default function Skills() {
  return (
    <div className='skills'>
        <div className='skills__header'>
        <h3>Skills.........................</h3>
        </div>

        <div className='skills__images'>
            <div className='skills__images__img'>
                <img src={Html} alt="htmllogo"/>
                <span>HTML</span>
            </div>
            <div className='skills__images__img'>
            <img src={Css} alt="htmllogo"/>
            <span>CSS</span>
            </div>
            
            <div className='skills__images__img'>
            <img src={Js} alt="htmllogo"/>
            <span>JAVASCRIPT</span>
            </div>

            <div className='skills__images__img'>
            <img src={Bootstrap} alt="htmllogo"/>
            <span>BOOTSTRAP</span>
            </div>

            <div className='skills__images__img'>
            <img src={ReactLogo} alt="htmllogo"/>
            <span>REACT</span>
            </div>
        </div>
      
    </div>
  )
}
