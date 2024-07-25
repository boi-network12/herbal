import React from 'react'
import "./Lines.css"
import { Link } from "react-router-dom"
import { FaMapMarkedAlt, FaRegEnvelope } from "react-icons/fa"
import { AiOutlinePhone } from "react-icons/ai"

const Lines = () => {
  return (
    <div className='LinesContainer'>
        <div className='box'>
            <div className='icons'>
            <AiOutlinePhone size={25} className='icon' />
            </div>
            <div className='text'>
                <p>phone</p>
                <Link to="tel:+234000000000">+234 00 000 0000</Link>
            </div>
        </div>

        <div className='box'>
            <div className='icons'>
                <FaRegEnvelope size={25} className='icon' />
                </div>
                <div className='text'>
                    <p>Email</p>
                    <Link to="mailto:example@gmail.com">example@gmail.com</Link>
            </div>
        </div>

        <div className='box'>
            <div className='icons'>
                <FaMapMarkedAlt size={25} className='icon'/>
                </div>
                <div className='text'>
                    <p>Address</p>
                    <Link to="https://www.google.com/maps/search/?api=1&query=Metallurgical+Training+Institutes+(MTI)">Metallurgical Training institutes(MTI)</Link>
            </div>
        </div>
    </div>
  )
}

export default Lines