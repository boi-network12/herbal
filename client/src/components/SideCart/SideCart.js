import React, { useState, useEffect } from 'react';
import "./sideCart.css";
import { FaMinus, FaPlus, FaRegTimesCircle } from "react-icons/fa";

const SideCart = ({ onClose }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setItems(cartItems);
    }, []);

    const handleIncrement = (id) => {
        // Update quantity for the item
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setItems(updatedItems);
        // Save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    const handleDecrement = (id) => {
        // Update quantity for the item
        const updatedItems = items.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setItems(updatedItems);
        // Save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    return (
        <div onClick={onClose} className='cartMainWrapper'>
            <div onClick={(e) => e.stopPropagation()} className='cartWrapper'>
                <span onClick={onClose}><FaRegTimesCircle /></span>
                {items.map(item => (
                    <div key={item.id} className='content'>
                        <img src={item.image} alt="" />
                        <div className='textContent'>
                            <h3>{item.name}</h3>
                            <p>&#8358; {item.price}</p>
                            <aside>
                                <button onClick={() => handleIncrement(item.id)}><FaPlus /></button>
                                <input type='number' disabled value={item.quantity} />
                                <button onClick={() => handleDecrement(item.id)}><FaMinus /></button>
                            </aside>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideCart;
