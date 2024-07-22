import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AlertProvider } from "./context/AlertContext"
import Home from "./pages/Home/Home"
import Register from "./pages/Key/register"
import Login from "./pages/Key/Login"
import About from './pages/About/About';
import ContactUs from './pages/Contact/ContactUs';
import Terms from './pages/TermsCondition.js/Terms';


function App() {
  return (
    <AlertProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/terms" element={<Terms/>}/>
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;
