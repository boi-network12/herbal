import React from 'react';
import "./ProductCat.css";
import tabletImage from "../../assets/Tablet.jpg";
import fibroidsImage from "../../assets/fib.jpg";
import diabeticsImage from "../../assets/dia.jpg";

const item = [
    {
        id: 1,
        name: "STDSs/SIs",
        image: tabletImage
    },
    {
        id: 2,
        name: "Fibroids",
        image: fibroidsImage
    },
    {
        id: 3,
        name: "Diabetics",
        image: diabeticsImage
    },
];

const ProductCategories = () => {
  return (
    <div className='secondHomeC'>
        <img className="secondHomeBg" src={require("../../assets/Group-4-1-700x1024.png")} alt="" />
        <div className='first1'>
            <h1>Product Categories</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tellus.
            </p>
        </div>
        <div className='second2'>
            {item.map((items) => (
                <div key={items.id} className='secondDivItem'>
                    <img src={items.image} alt={items.name} />
                    <p>{items.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default ProductCategories;
