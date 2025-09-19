import React, { useState } from 'react'
import Logo from '../assets/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='px-4 py-4 md:px-[89px] md:py-[22px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={Logo} alt='Kliksave Logo'></img>
        </div>

        <ul className='hidden md:flex list-none gap-[8px] text-[16px] font-[500] leading-[24px] tracking-[-0.6%]'>
          <li>Products</li>
          <li>About us</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>

        <button className='hidden md:inline-block bg-[#E24B26] text-[#fff] rounded-[90px] py-[10px] px-[16px] text-[16px] font-[500] leading-[24px] tracking-[-0.6%]'>
          Request Demo
        </button>

        <button
          className='md:hidden inline-flex items-center justify-center rounded-[8px] p-2 outline-none'
          aria-label='Toggle menu'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-7 w-7'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-7 w-7'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5' />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden mt-4'>
          <ul className='list-none flex flex-col gap-4 text-[16px] font-[500] leading-[24px] tracking-[-0.6%]'>
            <li className='py-2'>Products</li>
            <li className='py-2'>About us</li>
            <li className='py-2'>FAQ</li>
            <li className='py-2'>Contact us</li>
          </ul>
          <button className='mt-4 w-full bg-[#E24B26] text-[#fff] rounded-[12px] py-[12px] px-[16px] text-[16px] font-[600] leading-[24px] tracking-[-0.6%]'>
            Request Demo
          </button>
        </div>
      )}
    </div>
  )
} 

export default Header