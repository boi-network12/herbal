import React from 'react'
import "./ContactUs.css"
import Header from '../../components/KeyHeaders/Header'
import Footer from '../../components/Footer/Footer'
import ContactUsHeading from '../../components/ContactHeading/contactUsHeading'
import Lines from '../../components/Line/Lines'
import MapForm from '../../components/MapForm/mapForm'

const ContactUs = () => {
  return (
    <div className='contactContainer'>
      <Header/>
      <ContactUsHeading/>
      <Lines/>
      <MapForm/>
      <Footer/>
    </div>
  )
}

export default ContactUs