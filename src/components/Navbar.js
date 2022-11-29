import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className=' navbar'>
        <div className='navbar__logo'>
            
                <span className='logo'>TAIWO</span>
           
            
      
      </div>

      <div className='navbar__navigation'>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Skills</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>

      </div>

    </div>
  )
}
