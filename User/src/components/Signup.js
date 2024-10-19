import React from 'react';
import axios from 'axios';
import './PopUpSignIn.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useData } from '../UserData';

function Signup() {
  const navigate = useNavigate();
  const { Data, setData } = useData(); // Ensure you call useData()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = Data;
    try {
      const response = await axios.post('/Signup', { name, email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: "", email: "", password: "" }); // Reset data after signup
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during signup.");
    }
  };

  return (
    <div>
      <div className='Sign-up'>
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <p>"Crafting Memories, One Event at a Time."</p>
          <label>Name<br /></label>
          <input
            type="text"
            id="name"
            value={Data.name}
            onChange={(e) => setData({ ...Data, name: e.target.value })}
          />
          <label>Email Address<br /></label>
          <input
            type="email"
            id="email"
            value={Data.email}
            onChange={(e) => setData({ ...Data, email: e.target.value })}
          />
          <div>
            <label className='create-pass'>Create Password<br /></label>
            <input
              type="password"
              id="email"
              value={Data.password}
              onChange={(e) => setData({ ...Data, password: e.target.value })}
            />
          </div>
          <button type="submit">Sign up</button>
          <div className='pass-cond'>
            password:
            <li>Require a minimum of 8 characters</li>
            <li>Include at least one uppercase letter (A-Z)</li>
            <li>Include at least one lowercase letter (a-z).</li>
            <li>Include at least one numeric digit (0-9).</li>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
