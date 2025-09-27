import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import Work from './components/Work'
import Teams from './components/Teams'
import Faqs from './components/Faqs'
import Shopping from './components/Shopping'
import Connected from './components/Connected'
import Footer from './components/Footer'

import './App.css'
import background from './assets/background-kliksave.jpg'


function App() {


  return (
    <>
    <div  style={{
      backgroundImage: `url(${background})`,
      // backgroundColor: '#CECFC7',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }} >
    <Header/>
    <Hero/>
    </div>
     
     <Product/>
     <Work/>
     <Teams/>
     <Faqs/>
     <Shopping/>
     <Connected/>
     <Footer/>
    </>
  )
}

export default App
