import React from 'react'
import Header from '../../components/KeyHeaders/Header';
import "./Home.css"
import FirstHome from '../../components/FirstHome/FirstHome';
import ProductCategories from '../../components/ProductCat/productCategories';
import Footer from '../../components/Footer/Footer';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Test from '../../components/Blog/Test';

const Home = () => {
  return (
    <div className='homeContainer'>
      <Header/>
      <FirstHome/>
      <ProductCategories/>
      <ProductDisplay/>
      <Test/>
      <Footer/>
    </div>
  )
}

export default Home