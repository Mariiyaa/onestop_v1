import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/userDashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from './images/onestop_logo.png'
import {Toaster,toast} from 'react-hot-toast'
function Dashboard({email,setUserInfo,userInfo}) {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchName = async () => {
          try {
            const res = await axios.get(`/${email}`);
            setName(res.data.name);
          } catch (err) {
            console.error('Error fetching name:', err);
          }
        };
        if (email) {
            fetchName();
          }
        }, [email]);
        console.log(`received ${email} ${name} `)

        const logOut= () =>  {
          let promp=window.confirm("logging out your account ? ");
          if(promp) {
            setUserInfo(null);
            localStorage.removeItem('userInfo');
            window.location.reload();

          }
        }

        const Delete= async () =>  {
          let promp=window.confirm("Deleting your account ? ");
         try { 
          if(promp) {
            await axios.delete(`/delete/${email}`);
            <Toaster position='top-right' toastOptions={{duration:8000}} />
            toast.success("account deleted !!")
             window.location.reload();
            
          // Clean up after successful deletion
         // localStorage.removeItem('userInfo');

      }
    } catch (error) {
          console.error('Error deleting account:', error.response ? error.response.data : error.message);
          // Optionally, display an error message to the user
      }
    }
        

        
  return (
    
    <div>
     <div className='dash-logo-div'>
      <img src= {logo} alt="logo_img" className='dash-logo' />
      </div>

      <div className='name'>
    {name ? <p className='welcome'>Welcome, {name} !</p> : <p>Loading...</p>}
    </div>
    <ul>
      <li>Your bookings</li>
      <li>Order tracking</li>
      <li onClick={logOut}>Log out</li>
      <li onClick={Delete}>Delete account</li>
    </ul>

  </div>
  )
}

export default Dashboard
