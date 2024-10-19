import React from 'react';
import axios from 'axios';

import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './style/AdminLogin.css'
import { useData } from './AgentData';

function Login() {
  const navigate = useNavigate();
  const { Data, setData } = useData();

   const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password } = Data;
    try {
      const response = await axios.post('/LoginAgent', {email,password});
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        
        navigate('/orderDetails')
        console.log(Data.email)
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div>
      <div className='Sign-up'>
        <form onSubmit={handleSubmit}>
          <h1>Agent Login </h1>
          <label>Email Address<br /></label>
          <input
            type="email"
            id="email"
            value={Data.email}
            onChange={(e) => setData({ ...Data, email: e.target.value })}
          /><br/><br/>
          <div>
            <label className='create-pass'>Password<br /></label>
            <input
              type="password"
              id="password"
              value={Data.password}
              onChange={(e) => setData({ ...Data, password: e.target.value })}
            /><br/><br/>
          </div>
          <button type="submit">Login </button><br/><br/>
          <p> not a Agent ? <Link to ="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
