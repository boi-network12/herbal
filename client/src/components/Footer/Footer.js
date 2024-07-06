import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    const sub = (e) => {
        e.preventDefault();
    } 

  return (
    <div className='footer'>
        <div className="topAbsolute">
            <form onSubmit={sub}>
                <input type="email" placeholder='Type Your Email here'/>
                <button>Send</button>
            </form>
        </div>
        <div className="topFooter">
                <img src={require("../../assets/Group-1.png")} alt="" />
            <div className='topFooterImg'>
                <img src={require("../../assets/Logo-2.png")} alt="" />
                <h1>
                    Grow Up Your Healthy Fitness With Herbs
                </h1>
            </div>
            <div className='topFooterGrid'>
                <ul>
                    <li><h3>Links</h3></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><h3>Shop</h3></li>
                    <li><Link to="/">Sick</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><h3>Supports</h3></li>
                    <li><Link to="/">Privacy policy</Link></li>
                    <li><Link to="/">Return Policy</Link></li>
                    <li><Link to="/">Helps && FAQs</Link></li>
                </ul>
            </div>
        </div>
        <div className="downFooter">
            <p>Copyright &copy; {getCurrentYear()} Sanfak's Natures Healing DeLight. All Rights Reserved.</p>
            <p>Powered by  <Link to="https://x.com/kamdi_dev?t=8jH1K0RNHrNHzGgW-nZLeQ&s=09">kamdi_Dev</Link></p>
        </div>
    </div>
  )
}

export default Footer