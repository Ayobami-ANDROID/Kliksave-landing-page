import React from 'react'
import Store from '../assets/store.png'
import iphone from '../assets/iphone.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-[40px] lg:px-0 px-[24px]'>
        <div>
            <div className='flex flex-col items-center justify-center text-center gap-[24px] '>
                <h1 className='lg:text-[72px] text-[48px]  leading-[120%] font-bold  tracking-[-2%]'>A More Rewarding way 
                <br/> to Save!</h1>
                <p className='lg:text-[24px] text-[18px] leading-[150%] font-[400] tracking-[0.2%] text-[#444A5A]'>We set out to simplify privacy compliance for every business. </p>
                <img src={Store}></img>
            </div>
            <img src={iphone}></img>
        </div>
    </div>
  )
}

export default Hero