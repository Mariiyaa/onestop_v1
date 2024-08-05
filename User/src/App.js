import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import Services from './Services';
import Testimonials from './Testimonials';
import Signup from './components/Signup';
import Contact from './Contact';

function App() {
  return (
    <div className='landing-page'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;