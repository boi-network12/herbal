import React from 'react'
import "./MapForm.css"

const MapForm = () => {
  return (
    <div className='MapFormContainer'>
        <div className='divContainer map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2166739993054!2d6.798839300000001!3d6.101496099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104394708d19ef39%3A0x392e694dfdb04d41!2sMetallurgical%20Training%20Institute!5e0!3m2!1sen!2sng!4v1721690229546!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Metallurgical Training Institute Map"
        ></iframe>
        </div>
        <div className='divContainer formDiv'>
            <p>Let's Talk </p>
            <span>Feel free to drop us a line below </span>
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="text" placeholder="Phone Number" required/>
                <input type="email" placeholder="Email Address" required/>
                <textarea cols="30" rows="10" placeholder='Write Your Message Here'></textarea>
                <button>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default MapForm
