import React from 'react';
import './PopUpSignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function PopUpSignIn({ isPopupOpen, handleClosePopup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const   
 [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});   


  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (add more as needed)
    const validationErrors = {};
    if (!email) validationErrors.email = 'Email is required';
    if (!password) validationErrors.password = 'Password is required';
    setErrors(validationErrors);   


    if (Object.keys(validationErrors).length   
 === 0) {
      // Perform login logic here
      console.log('Login with:', email, password, rememberMe);
      // Clear form fields after successful login
      setEmail('');
      setPassword('');
      setRememberMe(false);
    }
  };
  return (
    <div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            

        
          <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address<br/></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}   

        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password<br/></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div>
        <input
          type="checkbox"   

          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <button type="submit">Login</button>   


      <div className="signup">
        <span>Don't have an account?</span>
        <Link to="/Signup">Signup Now?</Link>
      </div>
    </form>
          



            <button onClick={handleClosePopup} className='close'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUpSignIn;
