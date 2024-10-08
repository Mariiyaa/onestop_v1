import React ,{useState} from 'react';
import axios from 'axios'
import './PopUpSignIn.css';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


function Signup() {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name,email,password}=data 
    try {
      const {data} = await axios.post('/Signup',{ name,email,password})
      if(data.error) {
        toast.error(data.error) 
      }
        else {
          setData({})
        navigate('/')
      }
      }


    catch (e) {
      console.log(e)
    }

  };

  
  return (
    <div>
       <div className='Sign-up'>
      
      <form onSubmit={handleSubmit}>
      <h1>Sign up </h1>
      <p>"Crafting Memories, One Event at a Time."</p>
      <label>Name<br/></label>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}   
        />

        <label>Email Address<br/></label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => setData({...data,email:e.target.value})}   

        />


      <div>
        <label className='create-pass'>Create Password<br/></label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={(e) => setData({...data,password: e.target.value})}
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
  )
}

export default Signup;
