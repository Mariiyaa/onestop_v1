import axios from 'axios';
import '../Style/userDashboard.css';
import logo from './images/onestop_logo.png';
import { Toaster, toast } from 'react-hot-toast';
import { useData } from '../UserData';
import { Link,useNavigate } from 'react-router-dom';

function Dashboard() {
  const { Data,setData } = useData(); // Ensure no arguments are passed here
  const navigate=useNavigate()
  const logOut = () => {
    let prompt = window.confirm("Logging out your account?");
    if (prompt) {
      setData(null)
      window.location.reload();
      navigate('/')

    }
  };

  const Delete = async () => {
    let prompt = window.confirm("Deleting your account?");
    try {
      if (prompt) {
        await axios.delete(`/delete/${Data.email}`);
        toast.success("Account deleted!");
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting account:', error.response ? error.response.data : error.message);
    }
  };

  // Add a check to see if Data is available
  if (!Data) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className='dashboard'>
      <div className='dash-logo-div'>
        <img src={logo} alt="logo_img" className='dash-logo' />
      </div>

      <div className='name'>
        {Data.name ? <p className='welcome'>Welcome, {Data.name}!</p> : <p>Loading...</p>}
      </div>
      <ul>
        <Link to="/Booking"><li>Your bookings</li></Link>
        <Link to="/Tracking"><li>Order Tracking</li></Link>
        <li onClick={Delete}>Delete account</li>
      </ul>
    </div>
  );
}

export default Dashboard;
