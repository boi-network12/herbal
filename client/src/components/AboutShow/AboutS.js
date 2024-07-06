import React from 'react'
import "./AboutS.css"

const AboutS = () => {
  return (
    <div className='AboutSWrapper'>
        <img src={require("../../assets/herb-bill.png")} alt="" />
        <div>
            <h1>About Us</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </div>
        <img src={require("../../assets/herbl-tea.png")} alt="" />
    </div>
  )
}

export default AboutS