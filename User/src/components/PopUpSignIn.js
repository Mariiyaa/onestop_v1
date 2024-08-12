import React from 'react';
import './PopUpSignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


function PopUpSignIn({ isPopupOpen, handleClosePopup,setIsLoggedIn }) {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:"",
    password:"",
  });
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const {email,password}=data 
    try {
      const {data} = await axios.post('/',{ email,password})
      if(data.error) {
        toast.error(data.error) 
      }
        else {
          setData({})
          toast.success("you are logged in !!!!!")
          handleClosePopup();
          setIsLoggedIn(true);
      }
      }

     catch (error) {
      
     }
    }

  return (
    <div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            

        
          <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email Address<br/></label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => setData({...data,email:e.target.value})}   

        />
      </div>

      <div>
        <label>Password<br/></label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={(e) => setData({...data,password:e.target.value})}
        />
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
