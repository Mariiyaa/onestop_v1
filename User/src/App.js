import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import { Routes, Route,useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import Services from './Services';
import Testimonials from './Testimonials';
import Signup from './components/Signup';
import axios from 'axios';
import { Toaster} from 'react-hot-toast'
import Footer from './components/Footer';
import ChatbotWidget from './chatbotWidget';
import BlogContent from './BlogContent';
import NextPage from './NextPage'
import PackagesList from './PackagesList';
import {UserData} from './UserData'
import PackageDetails from './PackageDetails';
import BookingSummary from './BookingSummary';
import Payment from './Payment';
import YourBooking from './pages/YourBooking';
import Tracking from './pages/Tracking';
import PaymentSuccess from './PaymentSucess';



axios.defaults.baseURL = "https://onestop-v1.onrender.com"
axios.defaults.withCredentials = true



function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate(); // This hook should be used inside a component rendered by Router

  const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      navigate(`/packages/${category}`);
  };
  fetch('https://onestop-v1.onrender.com/api', {
      method: 'GET',
      credentials: 'include',  // Important if you are sending cookies or authentication headers
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  

  return (
    <div className='landing-page'>
      
      <UserData>  
      <div style={{ padding: '20px' }}>
                <Navbar onSelectCategory={handleCategorySelect} />
            </div>

      <Toaster position='top-right' toastOptions={{duration:2000}} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/Tracking' element={<Tracking />} />
        <Route path='/Booking' element={<YourBooking />} />
        <Route path="/packages/:category" element={<PackagesList category={selectedCategory} />} />
        <Route path="/packages/details/:id" element={<PackageDetails />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog/:id" element={<BlogContent />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
      </UserData>
      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;
