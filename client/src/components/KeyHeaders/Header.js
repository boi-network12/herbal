import React, { useState } from 'react';
import "./Header.css";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTimes, FaTwitter } from 'react-icons/fa';
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SideCart from '../SideCart/SideCart';
import Search from '../search/Search';
import { useAuth } from '../../context/authContext';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [cart, setCart] = useState(false);
    const [searchBtn, setSearchBTn] = useState(false);
    const { currentUser, logout } = useAuth(); // Access currentUser here

    const toggleCart = () => {
        setCart(!cart);
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const toggleSearch = () => {
        setSearchBTn(!searchBtn);
    };

    return (
        <div className='container'>
            <img
                src={require("../../assets/logo.png")}
                alt=''
                className='image'
            />
            <div className='iconMenuContainer'>
                <div className='iconsSocial'>
                    <p><FaFacebook/></p>
                    <p><FaTwitter/></p>
                    <p><FaInstagram/></p>
                    <p><FaLinkedin/></p>
                </div>
                <div className='menuCart'>
                    <div>
                        <p onClick={toggleNav} className='barTime'>
                            {navOpen ? <FaTimes/> : <FaBars/>}
                        </p>
                        <p onClick={toggleCart}><BiCart/><span>0</span> $0</p>
                        <p></p>
                        <p onClick={toggleSearch}><FaSearch/></p>
                    </div>

                    <ul className={`navBar ${navOpen ? "open" : "closed"}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                        <li><Link to="/terms">Terms & Condition</Link></li>
                        {currentUser ? (
                            <li>
                                <Link to="/profile">Shop</Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                        {currentUser && currentUser.role === "admin" && (
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                        )}
                        {currentUser && 
                        <li style={{color: "red"}} onClick={logout}>
                            Logout
                        </li>}
                    </ul>
                </div>
            </div>
            {cart && <SideCart onClose={toggleCart}/>}
            {searchBtn && <Search onClose={toggleSearch}/>}
        </div>
    );
};

export default Header;
