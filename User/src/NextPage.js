import React from 'react';
import './Style/NextPage.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'

const NextPage = () => {
  // Replace with the agent's WhatsApp number
  const agentWhatsAppNumber = '7984694952'; // Example number
  const whatsappLink = `https://wa.me/${agentWhatsAppNumber}`;

  return (
    <div className="next-page-container">
      <h1 className="agent-introduction">Hey, I am your agent!</h1>
      <p className="agent-message">
      You can reach out to me for anything you need. Whether you have questions, suggestions, or instructions, I’m here to assist you every step of the way. Let’s work together to plan your event smoothly—just relax and let me handle the details!
      </p>
      {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" color="#25D366" /> WhatsApp Icon
      </a> */}  <p><Link to="/Booking">click here</Link> to know about your booking</p>    
    </div>
  );
};

export default NextPage;
