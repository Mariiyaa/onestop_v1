import logo from './logo.svg';
import './App.css';
import './SignUp'
import Signup from './SignUp';
import axios from 'axios'
import { Toaster} from 'react-hot-toast'
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import OrderPage from './OrderPage';
import { AgentData } from './AgentData';


axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {
  return (
    
    <div className="App">
      <AgentData>
    <Toaster position='top-right' toastOptions={{duration:2000}} />
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/orderDetails' element={<OrderPage/>} />
      </Routes>
      </AgentData >
    </div>
  );
}

export default App;
