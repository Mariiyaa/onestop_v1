import React from 'react'
import '../LandStyle.css'
import logo from "./images/onestop_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';   
import { Link} from "react-router-dom"
import { useState } from 'react';
import PopUpSignIn from './PopUpSignIn';
function Navbar() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleIconClick = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };


  return (
    <nav className='navbar flex'>
        <img src= {logo} alt="logo_img" className='logo'/>

        <div className='Options flex'>

            <ul className='nav-opt flex'>
            <Link to="/"className='linkr'>  <li>Home</li></Link>
            <Link to="/Services"className='linkr'><li>Services</li></Link>
            <Link to="/AboutUs"className='linkr'> <li>About Us</li></Link>
            <Link to="/Testimonials"className='linkr'> <li>Blogs</li></Link>
            </ul>

            <div className='buttons flex'>
                <button className='con button-style '> Contact Us</button>
                <button className='sign button-style' onClick={handleIconClick}><FontAwesomeIcon icon={faUser} className='icon'/></button>
                <PopUpSignIn isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup}/>
            </div>
        </div> 
      
    </nav>
  )
}

export default Navbar;
