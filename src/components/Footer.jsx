import React from 'react'
import Logo from '../assets/logowhite.png'
import Play from '../assets/play.png'
import LogoLarge from '../assets/LogoLarge.png'

const Footer = () => {
  return (
    <div className='bg-[#000000] lg:pt-[150px] pt-[30px] lg:pb-[120px] pb-[30px] lg:px-[100px] px-[24px] text-[#989898]'>
        <div className='flex justify-between lg:flex-row flex-col mb-[160px]'>
          <div className='flex flex-col lg:w-[307px] gap-[24px] '>
            <img src={Logo} className='w-[163px] h-[32px]'></img>
            <p className='text-[16px] font-[400]'>Our privacy solutions reduce team effort 
            through automation and simple integrations</p>
            <img src={Play}></img>
          </div>
          <div className='flex lg:gap-[160px] gap-[24px] lg:flex-row flex-col '>
            <div className='flex flex-col gap-[16px]'>
                <a className='text-[16px] font-[400] text-[#FFFFFF]'>Product</a>
                <div className='flex flex-col text-[16px] font-[400]'>
                    <a >KlikEsusu</a>
                    <a>KlikSave</a>
                    <a>Pricing</a>
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <a className='text-[16px] font-[400] text-[#FFFFFF]'>Company</a>
                <div className='flex flex-col text-[16px] font-[400]'>
                    <a>Blog</a>
                    <a>Contact us</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <a className='text-[16px] font-[400] text-[#FFFFFF]'>Socials</a>
                <div className='flex flex-col text-[16px] font-[400]'>
                    <a>X(Twitter)</a>
                    <a>Instagram</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
          </div>
        </div>
        <img src={LogoLarge} className='w-full mb-[32px]'></img>
       

    </div>
  )
}

export default Footer