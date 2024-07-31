import React, { useEffect, useState } from 'react';
import "./ShopProduct.css";
import { getDocs } from 'firebase/firestore';
import { productsCollectionRef } from '../../Firebase';

const ShopProduct = () => {
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

    const handleAddToCart = (item) => {
        // Retrieve current cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item is already in the cart
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex > -1) {
            // Item exists, update quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Item does not exist, add new item with quantity 1
            cart.push({ ...item, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Product added to cart!');
    };

    return (
        <div className='ShopProductWrapper'>
            {product.map((item) => (
                <div key={item.id}>
                    <img src={item.imageUrl} alt={item.title} />
                    <div>
                        <h4>{item.name}</h4>
                        <p>&#8358; {item.price}</p>
                    </div>
                    <button onClick={() => handleAddToCart(item)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ShopProduct;
