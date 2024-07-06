import React from 'react'
import "./ProductDisplay.css"
import ProductImage from "../../assets/fib.jpg"
import { Link } from "react-router-dom"
import { useAuth } from '../../context/authContext'

const products = [
    {
        id: 1,
        image: ProductImage,
        title: "Fiberglass ",
        price: 300,
        btnText: "Add To Cart",
    },
    {
        id: 2,
        image: ProductImage,
        title: "Fiberglass ",
        price: 100,
        btnText: "Add To Cart",
    },
    {
        id: 3,
        image: ProductImage,
        title: "Fiberglass ",
        price: 350,
        btnText: "Add To Cart",
    },
    {
        id: 4,
        image: ProductImage,
        title: "Fiberglass ",
        price: 400,
        btnText: "Add To Cart",
    },
]

const ProductDisplay = () => {
    const { currentUser } = useAuth();


  return (
    <div className='productDWrapper'>
        <img src={require("../../assets/flying.png")} alt="" />
        <h1>Discover Our Product</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
        <div className='productContent'>
            {products.map((item) => (
                <div key={item.id} className='productItem'>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>&#8358; {item.price}</p>
                    {currentUser ? (
                        <Link to="/"><button>{item.btnText}</button></Link>
                    ) : (
                        <Link to="/register"><button>{item.btnText}</button></Link>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductDisplay