import React, { useState, useEffect } from 'react';
import "./sideCart.css";
import { FaRegTimesCircle, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"

const SideCart = ({ onClose }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setItems(cartItems);
    }, []);

    

    return (
        <div onClick={onClose} className='cartMainWrapper'>
            <div onClick={(e) => e.stopPropagation()} className='cartWrapper'>
                <span onClick={onClose}><FaRegTimesCircle /></span>
                {items.map(item => (
                    <div key={item.id} className='content'>
                        <img src={item.imageUrl} alt="" />
                        <div className='textContent'>
                            <h3>{item.name}</h3>
                            <p>&#8358; {item.price}</p>
                            <aside>
                                <button>
                                    <Link style={{textDecoration: "none"}} to="https://wa.me/+012345679">
                                        <FaWhatsapp color='#f2f2f2' size={22}/>
                                    </Link>
                                </button>
                            </aside>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideCart;
