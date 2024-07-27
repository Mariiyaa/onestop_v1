import React from 'react'
import '../LandStyle.css'
import logo from "./images/onestop_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';   


function Navbar() {
  return (
    <nav className='navbar flex'>
        <img src= {logo} alt="logo_img" className='logo'></img> 

        <div className='Options flex'>

            <ul className='nav-opt flex'>
                <li>About Us</li>
                <li>Services</li>
                <li>Packages</li>
                <li>Testimonials</li>
            </ul>

            <div className='buttons flex'>
                <button className='con button-style '> Contact Us</button>
                <button className='sign button-style'><FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon></button>
            </div>
        </div> 
      
    </nav>
  )
}

export default Navbar;
