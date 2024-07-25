import React from 'react'
import "./contactHeading.css"

const ContactUsHeading = () => {
  return (
    <div className='contactHeadingContainer'>
        <div className='secContainerOnContactHeading'>
            <img src={require("../../assets/flying.png")} alt="" className='firstImg'/>
            <h1>Contact us</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur. Morbi cursus diam morbi elit consequat pretium sollicitudin. Facilisi siteget in
            </p>
            <img src={require("../../assets/Group-1.png")} alt="" className='secondImg'/>
        </div>
    </div>
  )
}

export default ContactUsHeading