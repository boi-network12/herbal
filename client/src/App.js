import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AlertProvider } from "./context/AlertContext"
import Home from "./pages/Home/Home"
import Register from "./pages/Key/register"
import Login from "./pages/Key/Login"
import About from './pages/About/About';


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
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;
