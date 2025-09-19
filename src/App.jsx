import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import Work from './components/work'
import Teams from './components/Teams'
import Faqs from './components/Faqs'
import Shopping from './components/Shopping'
import Connected from './components/Connected'
import Footer from './components/Footer'

import './App.css'

function App() {


  return (
    <>
     <Header/>
     <Hero/>
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
