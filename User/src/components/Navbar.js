import React,{ useState, useEffect } from 'react'
import '../LandStyle.css'
import logo from "./images/onestop_logo.png"
import cerimonies from './images/cerimonies.png'
import culturalLogo from './images/culturalLogo.png'
import marriage from './images/marriage.png'
import corporateLogo from './images/corporateLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faArrowRightToBracket,faPhone}   from "@fortawesome/free-solid-svg-icons"
 
import { Link} from "react-router-dom"
import PopUpSignIn from './PopUpSignIn';
import Dashboard from './Dashboard';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navbar({ onSelectCategory }) {

 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  console.log(`navbar ${email}`)



  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
      onSelectCategory(eventKey);
      navigate(`/packages/${eventKey}`);
  };

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

    useEffect(() => {
        const user = localStorage.getItem('userInfo');
        if (user) {
            setUserInfo(JSON.parse(user));
        }
    }, []);


  return (
    <nav className='navbar flex'>
        <img src= {logo} alt="logo_img" className='logo'/>

        <div className='Options flex'>

            <ul className='nav-opt flex'>
            <Link to="/"className='linkr'><li>Home</li></Link>
            <Link to="/AboutUs"className='linkr'> <li>About Us</li></Link>
            <Link to="/Services"className='linkr'><li>Services</li></Link>

            
            <Dropdown onSelect={handleSelect} className="navbar-item dropdown">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='event-click event-li'>
        Events
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item eventKey="Wedding">
          <img src={marriage} alt="marriage_logo" className='event-icon' />
          Wedding
        </Dropdown.Item>
        <Dropdown.Item eventKey="Cultural">
          <img src={culturalLogo} alt="cultural_logo" className='event-icon' />
          Cultural
        </Dropdown.Item>
        <Dropdown.Item eventKey="Corporate">
          <img src={corporateLogo} alt="corporate_logo" className='event-icon' />
          Corporate
        </Dropdown.Item>
        <Dropdown.Item eventKey="Milestones">
          <img src={cerimonies} alt="ceremony_logo" className='event-icon' />
          Milestones
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          

            <Link to="/Testimonials"className='linkr'> <li>Blogs</li></Link>
            </ul>

            <div className='buttons flex'>
              <div className='contact'>
                <div className='contactClick'>
                   <button className='con button-style ' onClick={toggleDropdown}><section id="contact"> Contact Us</section></button>
                   {isDropdownVisible && (
        <div className='contact-drop'>
         <p><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:oneStopEventsTeam11@gmail.com" >: oneStopEventsTeam11@gmail.com</a></p> 
          <p><FontAwesomeIcon icon={faPhone} /><a href="tel:+917676123456">: +91 7676123456</a></p> 
          
        </div>
      )}
                  </div>
              </div> 

              <PopUpSignIn  isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail}/>
              {!isLoggedIn ? (
                <>
                <button className='sign button-style' onClick={handleIconClick}><FontAwesomeIcon icon={faArrowRightToBracket} className='icon' /></button>
                
                </>) : (
                <button onClick={toggleSidebar}className='sign button-style'><FontAwesomeIcon icon={faUser} className='icon'/></button>
                )}

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    {/* Sidebar content goes here */}
                    <Dashboard email={email} setUserInfo={setUserInfo} userInfo={userInfo} />
                  </div>
            
                </div>
        </div> 
      
    </nav>
  )
}

export default Navbar;
