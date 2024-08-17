import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import Services from './Services';
import Testimonials from './Testimonials';
import Signup from './components/Signup';
import axios from 'axios';
import { Toaster} from 'react-hot-toast'
import Footer from './components/Footer';
import Marriage from './pages/Marriage'
import Corporate from './pages/Corporate'
import Cultural from './pages/Cultural';
import Ceremonies from './pages/Ceremonies';
import ChatbotWidget from './chatbotWidget';
import BlogContent from './BlogContent';



axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true


function App() {
  return (
    <div className='landing-page'>
      <Navbar />
      <Toaster position='top-right' toastOptions={{duration:2000}} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path="/Marriage" element={<Marriage />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/Cultural" element={<Cultural />} />
        <Route path="/Ceremonies" element={<Ceremonies />} />
        <Route path="/blog/:id" element={<BlogContent />} />
        
      </Routes>
      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;