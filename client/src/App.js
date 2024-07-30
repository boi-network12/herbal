import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AlertProvider } from "./context/AlertContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Key/Login";
import About from './pages/About/About';
import ContactUs from './pages/Contact/ContactUs';
import Terms from './pages/TermsCondition.js/Terms';
import { LoadingProvider } from './context/LoadingContext';
import Shop from './pages/Shop/Shop';
import AdminDashboard from './Admin/Dashboard/Dashboard';
import PrivateRoute from './private/PrivateRoute'; // Adjust the path accordingly
import { ModalProvider } from './context/ModalContext';

function App() {
    return (
        <LoadingProvider>
            <ModalProvider>
              <AlertProvider>
                  <Router>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/about-us" element={<About />} />
                          <Route path="/contact-us" element={<ContactUs />} />
                          <Route path="/terms" element={<Terms />} />

                          {/* Protected Routes */}
                          <Route  
                            path="/shop/product"
                            element={
                              <PrivateRoute
                                element={<Shop />}
                              />
                          } />

                          <Route  
                            path="/admin/dashboard"
                            element={
                              <PrivateRoute
                                element={<AdminDashboard />}
                              />
                          } />
                          
                      </Routes>
                  </Router>
              </AlertProvider>
            </ModalProvider>
        </LoadingProvider>
    );
}

export default App;
