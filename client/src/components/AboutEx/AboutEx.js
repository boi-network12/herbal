import React from 'react'
import "./AboutEx.css"
import { Link } from "react-router-dom"

const AboutEx = () => {
  return (
    <div className='AboutExContainer'>
        <div className='box firstBox'>
            <img src={require("../../assets/leaveMolter.jpg")} alt="" />
        </div>
        <div className='box secondBox'>
            <span>About</span>

            <h2>The Ultimate Herbal Experience</h2>

            <p>
            Lorem ipsum dolor sit amet consectetur. Morbi cursus diam morbi elit consequat pretium sollicitudin. Facilisi sit eget in massa nibh in turpis. Enim quisque leo eleifend vel. Scelerisque purus praesent aenean laoreet diam.
            </p>
            
            <Link to="/about-us">
                <button>
                    Read More About
                </button>
            </Link>
            
        </div>
    </div>
  )
}

export default AboutEx