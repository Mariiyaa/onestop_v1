import React from 'react'
import '../LandStyle.css'
import logo from "./images/onestop_logo.png"
import cerimonies from './images/cerimonies.png'
import culturalLogo from './images/culturalLogo.png'
import marriage from './images/marriage.png'
import corporateLogo from './images/corporateLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';   
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';   
import { Link} from "react-router-dom"
import { useState } from 'react';
import PopUpSignIn from './PopUpSignIn';
function Navbar() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleIconClick = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
      setDropdownVisible(prevState => !prevState);
    };



  return (
    <nav className='navbar flex'>
        <img src= {logo} alt="logo_img" className='logo'/>

        <div className='Options flex'>

            <ul className='nav-opt flex'>
            <Link to="/"className='linkr'><li>Home</li></Link>
            <Link to="/AboutUs"className='linkr'> <li>About Us</li></Link>
            <Link to="/Services"className='linkr'><li>Services</li></Link>

            <li 
          className="navbar-item dropdown" 
          onClick={toggleDropdown} 
        >
              <div className='event-click'>
               <li>Events</li>
               <FontAwesomeIcon icon={faCaretDown} className='drop-icon'/>
               </div>
               {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><img src= {marriage} alt="marriage_logo" className='event-icon'/><Link to="/Marriage" className='event-link'>Marriage</Link></li>
              <li className="dropdown-item"><img src= {culturalLogo} alt="cultural_logo" className='event-icon'/> <Link to="/Cultural" className='event-link'>Cultural</Link></li>
              <li className="dropdown-item"><img src= {corporateLogo} alt="corporate_logo" className='event-icon'/> <Link to="/Corporate" className='event-link'>Corporate</Link></li>
              <li className="dropdown-item"><img src= {cerimonies} alt="ceremony_logo" className='event-icon'/> <Link to="/Ceremonies" className='event-link'>Ceremonies</Link></li>
              
            </ul>
          )}
            </li>

            <Link to="/Testimonials"className='linkr'> <li>Blogs</li></Link>
            </ul>

            <div className='buttons flex'>
              <div className='contact'>
                <div className='contactClick'>
                   <button className='con button-style '><section id="contact"> Contact Us</section></button>
                  </div>
              </div> 

              <PopUpSignIn  isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup} setIsLoggedIn={setIsLoggedIn}/>
              {!isLoggedIn ? (
                <>
                <button className='sign button-style' onClick={handleIconClick}><FontAwesomeIcon icon={faUser} className='icon'/></button>
                
                </>) : (
                <button onClick={toggleSidebar}>Dashboard</button>
                )}

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    {/* Sidebar content goes here */}
                    <p>Welcome to your dashboard!</p>
                  </div>
            
                </div>
        </div> 
      
    </nav>
  )
}

export default Navbar;
