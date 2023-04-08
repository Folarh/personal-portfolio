import React,{useEffect} from 'react'
import "./User.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function User() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
 
  return (
    <div className='home__info' data-aos="zoom-out" >
    <h3>Hi, My Name is</h3>
    <h1 className='home__name'>TAIWO OJO</h1>
    <h1 className='home__stack'>A FRONTEND DEVELOPER</h1>
    <p>I build things for the web, I like to craft solid and </p>
    <p>Scalable frontend Products with great user experience</p>
   
  </div>
  )
}
  
   

 
  
