import React from 'react'
import phone from '../assets/Handheld.png'
import noise from '../assets/noise.png'
import backgroundShopping from '../assets/background-shopping.jpg'

const Shopping = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundShopping})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                 
            }}
            className='w-full flex flex-col pt-[80px] lg:px-0 px-[24px] text-[#FFFFFF]'
        >
            <div style={{backgroundColor:`linear-gradient(to bottom, #0F1012 0%, #0D1117 100%)`}}>
            <div className='lg:w-[746px] mx-auto text-center flex flex-col items-center gap-[32px]'>
                <h1 className='text-[60px] font-[600] leading-[100%]'>Simplify Your Shopping,<br/> Save Your Time</h1>
                <p className=' text-center'>Transform your grocery shopping experience with GroceryChamp – the intelligent mobile app that organizes your lists, tracks your spending, and remembers your favorite stores.</p>
                <div className='flex lg:flex-row flex-col items-center gap-[8px]'>
                    <div className='flex items-center gap-[4px] rounded-[90px] border-[1px] py-[10px] px-[16px] bg-white/70 lg:w-fit w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10 17.7539C5.85775 17.7539 2.5 14.3962 2.5 10.2539C2.5 6.11166 5.85775 2.75391 10 2.75391C14.1423 2.75391 17.5 6.11166 17.5 10.2539C17.5 14.3962 14.1423 17.7539 10 17.7539ZM8.9665 7.56516C8.92136 7.53504 8.8689 7.51773 8.8147 7.51507C8.76051 7.51241 8.7066 7.5245 8.65873 7.55005C8.61086 7.5756 8.57082 7.61366 8.54287 7.66017C8.51492 7.70668 8.5001 7.75989 8.5 7.81416V12.6937C8.5001 12.7479 8.51492 12.8011 8.54287 12.8476C8.57082 12.8942 8.61086 12.9322 8.65873 12.9578C8.7066 12.9833 8.76051 12.9954 8.8147 12.9927C8.8689 12.9901 8.92136 12.9728 8.9665 12.9427L12.6258 10.5037C12.6669 10.4763 12.7006 10.4391 12.724 10.3956C12.7473 10.352 12.7595 10.3033 12.7595 10.2539C12.7595 10.2045 12.7473 10.1558 12.724 10.1122C12.7006 10.0687 12.6669 10.0315 12.6258 10.0042L8.96575 7.56516H8.9665Z" fill="#2D333A" />
                        </svg>
                        <p>Download for IOS</p>
                    </div>
                    <div className='flex items-center gap-[4px] rounded-[90px] border-[1px] py-[10px] px-[16px] bg-white/70 lg:w-fit w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10 17.7539C5.85775 17.7539 2.5 14.3962 2.5 10.2539C2.5 6.11166 5.85775 2.75391 10 2.75391C14.1423 2.75391 17.5 6.11166 17.5 10.2539C17.5 14.3962 14.1423 17.7539 10 17.7539ZM8.9665 7.56516C8.92136 7.53504 8.8689 7.51773 8.8147 7.51507C8.76051 7.51241 8.7066 7.5245 8.65873 7.55005C8.61086 7.5756 8.57082 7.61366 8.54287 7.66017C8.51492 7.70668 8.5001 7.75989 8.5 7.81416V12.6937C8.5001 12.7479 8.51492 12.8011 8.54287 12.8476C8.57082 12.8942 8.61086 12.9322 8.65873 12.9578C8.7066 12.9833 8.76051 12.9954 8.8147 12.9927C8.8689 12.9901 8.92136 12.9728 8.9665 12.9427L12.6258 10.5037C12.6669 10.4763 12.7006 10.4391 12.724 10.3956C12.7473 10.352 12.7595 10.3033 12.7595 10.2539C12.7595 10.2045 12.7473 10.1558 12.724 10.1122C12.7006 10.0687 12.6669 10.0315 12.6258 10.0042L8.96575 7.56516H8.9665Z" fill="#2D333A" />
                        </svg>
                        <p>Download for Android</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <img src={phone} alt='App preview' className='max-w-full h-auto' />
            </div>
            </div>
           
        </div>
    )
}

export default Shopping