import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionAndHistory from './components/MissionAndHistory';
import ServiceCards from './components/ServiceCards';
import Packages from './components/Packages';

function App() {
  return (
    <div className='landing-page'>
    <Navbar />
   <HeroSection />
   <MissionAndHistory />
   <ServiceCards />
   <Packages />
</div>
  )
}

export default App;
