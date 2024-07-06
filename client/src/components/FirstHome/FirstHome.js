import React from 'react'
import "./FirstHome.css"
import { Link } from 'react-router-dom'
import { BiStar } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"

const FirstHome = () => {


  return (
    <div className='FirstHomeWrapper'>
        <div className='FirstDiv'>
            <span>New Arrival</span>
            <h1>SanFak's Natures Healing delight</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Morbi cursus diam morbi elit consequat pretium sollicitudin. Facilisi sit eget in massa nibh in turpis. Enim quisque leo eleifend vel. Scelerisque purus praesent aenean laoreet diam.
            </p>
            <aside>
                <Link>
                    <button>Read More About</button>
                </Link>
                <Link>
                    <p><FaArrowRight/> Shop Now</p>
                </Link>
            </aside>
        </div>
        <div className='secondDiv'>
            <img className='bgImg' alt='' src={require("../../assets/Oil.jpg")}/>
            <img className='leafImg' alt='' src={require("../../assets/Group-3-1.png")}/>
            <div className='FistPop'>
                <img src={require("../../assets/Layer_1.png")} alt="" />
                <p>
                    <h3>Hygienic Soap</h3>
                    <span><BiStar/> 2145 Reviews</span>
                </p>
                <aside>
                    &#8358;5000
                </aside>
            </div>
            <div className='SecondPop'>
                <img src={require("../../assets/Group-1000002716-1.png")} alt="" />
                <p>
                    <h3>Vitamins</h3>
                    <span><BiStar/> 2145 Reviews</span>
                </p>
                <aside>
                    &#8358;3500
                </aside>
            </div>
        </div>
    </div>
  )
}

export default FirstHome