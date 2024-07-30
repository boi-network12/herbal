import React, { useEffect, useState } from 'react';
import "./ProductDisplay.css";
import { useAuth } from '../../context/authContext';
import { productsCollectionRef } from "../../Firebase";
import { getDocs } from "firebase/firestore";

const ProductDisplay = () => {
    const { currentUser } = useAuth();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(productsCollectionRef);
            const productList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProduct(productList);
        };

        fetchProducts();
    }, []);

    // Limit products to 4
    const displayedProducts = product.slice(0, 4);

    const handleAddToCart = (item) => {
        // Retrieve current cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add new item to cart
        cart.push(item);

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Product added to cart!');
    };

    return (
        <div className='productDWrapper'>
            <img src={require("../../assets/flying.png")} alt="Product banner" />
            <h1>Discover Our Product</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
            <div className='productContent'>
                {displayedProducts.map((item) => (
                    <div key={item.id} className='productItem'>
                        <img src={item.imageUrl} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p> {item.name}</p>
                        <p>&#8358; {item.price}</p>
                        <button onClick={() => handleAddToCart(item)}>
                            {currentUser ? "Add to cart" : "Log in to add to cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;
