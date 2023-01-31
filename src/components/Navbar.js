import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
const [toggle, setToggle]=useState(false)
  return (
    <div className=' navbar'>
        <div className='navbar__logo'>
            <span className='logo'>TAIWO</span>
           </div>
            <div className='links' >
      <div className='navbar__navigation' id={toggle?"hidden": ""} >
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/skills" >Skills</Link>
        <Link to="/projects" >Projects</Link>
        <Link to="/contact" >Contact</Link>
         </div>
         <button className='btn' onClick={()=>setToggle(!toggle)}>
          {toggle? <CloseIcon/> : <MenuIcon/>}
         </button>
         </div>
        
    </div>
  )
}
