import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/KeyHeaders/Header'
import AboutS from '../../components/AboutShow/AboutS'
import AboutEx from '../../components/AboutEx/AboutEx'
import "./About.css"

const About = () => {
  return (
    <div className='AboutContainer'>
        <Header/>
        <AboutS/>
        <AboutEx/>
        <Footer/>
    </div>
  )
}

export default About