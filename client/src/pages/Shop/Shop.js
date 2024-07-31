import React from 'react'
import "./Shop.css"
import Header from '../../components/KeyHeaders/Header';
import ShopProduct from '../../components/Shop/ShopProduct';
import Footer from '../../components/Footer/Footer';

const Shop = () => {
  return (
    <div className='ShopContainer'>
      <Header/>
      <ShopProduct/>
      <Footer/>
    </div>
  )
}

export default Shop