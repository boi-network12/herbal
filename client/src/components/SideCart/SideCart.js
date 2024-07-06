import React, {  } from 'react'
import "./sideCart.css"
import { FaMinus, FaPlus, FaRegTimesCircle } from "react-icons/fa"
import LogoImage from "../../assets/Tablet.jpg"


const items = [
    {
        id: 1,
        image: LogoImage,
        price: "30",
        name: "std drug",
        quantity: 1,
    },
    {
        id: 1,
        image: LogoImage,
        price: "10",
        name: "head drug",
        quantity: 1,
    },
    {
        id: 1,
        image: LogoImage,
        price: "320",
        name: "hiv drug",
        quantity: 1,
    },
]

const SideCart = ({onClose}) => {
    


  return (
    <div onClick={onClose} className='cartMainWrapper'>
        <div onClick={(e) => e.stopPropagation()} className='cartWrapper'>
            <span onClick={onClose}><FaRegTimesCircle/> </span>
            {items.map(item => (
                <div key={item.id} className='content'>
                    <img src={item.image} alt="" />
                    <div className='textContent'>
                        <h3>{item.name}</h3>
                        <p>&#8358;  {item.price}</p>
                        <aside>
                            <button><FaPlus/></button>
                            <input type='number' disabled value={item.quantity}/>
                            <button><FaMinus/></button>
                        </aside>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideCart