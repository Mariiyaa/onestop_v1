import React from 'react';
import './PopUpSignIn.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useData } from '../UserData';

function PopUpSignIn({ isPopupOpen, handleClosePopup, setIsLoggedIn }) {
  const { Data, setData } = useData(); // Ensure you call useData()

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = Data;
    try {
      const response = await axios.post('/', { email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ ...Data, ...response.data }); // Update state with response data
        toast.success("You are logged in!");
        handleClosePopup();
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <form onSubmit={handleLogin}>
              <h1>Log in</h1>
              <div>
                <label htmlFor="email">Email Address<br /></label>
                <input
                  type="email"
                  id="email"
                  value={Data.email}
                  onChange={(e) => setData({ ...Data, email: e.target.value })}
                />
              </div>
              <div>
                <label>Password<br /></label>
                <input
                  type="password"
                  id="password"
                  value={Data.password}
                  onChange={(e) => setData({ ...Data, password: e.target.value })}
                />
              </div>
              <button type="submit">Login</button>
              <div className="signup">
                <span>Don't have an account?</span>
                <a href="/Signup">Signup Now?</a>
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
