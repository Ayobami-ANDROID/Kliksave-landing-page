import React from 'react'
import mock from '../assets/mock.png'
import profile from '../assets/profile.png'
import list from '../assets/list.png'
import optimize from '../assets/optimize.png'

const Work = () => {
    return (
        <div className='lg:px-[89px] px-[24px] lg:my-[89px] my-[32px]'>
            <h3 className='lg:text-[64px] text-[32px] lg:text-left text-center leading-[100%] font-[600] mb-4'>How It Works</h3>
            <div className='flex gap-[8px] '>
                <div className='flex gap-[4px] items-center rounded-[90px] border-[1px] lg:py-[10px]   lg:px-[16px] px-[8px] overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M10 17.7539C5.85775 17.7539 2.5 14.3962 2.5 10.2539C2.5 6.11166 5.85775 2.75391 10 2.75391C14.1423 2.75391 17.5 6.11166 17.5 10.2539C17.5 14.3962 14.1423 17.7539 10 17.7539ZM8.9665 7.56516C8.92136 7.53504 8.8689 7.51773 8.8147 7.51507C8.76051 7.51241 8.7066 7.5245 8.65873 7.55005C8.61086 7.5756 8.57082 7.61366 8.54287 7.66017C8.51492 7.70668 8.5001 7.75989 8.5 7.81416V12.6937C8.5001 12.7479 8.51492 12.8011 8.54287 12.8476C8.57082 12.8942 8.61086 12.9322 8.65873 12.9578C8.7066 12.9833 8.76051 12.9954 8.8147 12.9927C8.8689 12.9901 8.92136 12.9728 8.9665 12.9427L12.6258 10.5037C12.6669 10.4763 12.7006 10.4391 12.724 10.3956C12.7473 10.352 12.7595 10.3033 12.7595 10.2539C12.7595 10.2045 12.7473 10.1558 12.724 10.1122C12.7006 10.0687 12.6669 10.0315 12.6258 10.0042L8.96575 7.56516H8.9665Z" fill="#2D333A" />
                    </svg>
                    <p>Download for IOS</p> 
                </div>
                <div className='flex gap-[4px] rounded-[90px] border-[1px] lg:py-[10px] items-center py-[5px] lg:px-[16px] px-[8px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M10 17.7539C5.85775 17.7539 2.5 14.3962 2.5 10.2539C2.5 6.11166 5.85775 2.75391 10 2.75391C14.1423 2.75391 17.5 6.11166 17.5 10.2539C17.5 14.3962 14.1423 17.7539 10 17.7539ZM8.9665 7.56516C8.92136 7.53504 8.8689 7.51773 8.8147 7.51507C8.76051 7.51241 8.7066 7.5245 8.65873 7.55005C8.61086 7.5756 8.57082 7.61366 8.54287 7.66017C8.51492 7.70668 8.5001 7.75989 8.5 7.81416V12.6937C8.5001 12.7479 8.51492 12.8011 8.54287 12.8476C8.57082 12.8942 8.61086 12.9322 8.65873 12.9578C8.7066 12.9833 8.76051 12.9954 8.8147 12.9927C8.8689 12.9901 8.92136 12.9728 8.9665 12.9427L12.6258 10.5037C12.6669 10.4763 12.7006 10.4391 12.724 10.3956C12.7473 10.352 12.7595 10.3033 12.7595 10.2539C12.7595 10.2045 12.7473 10.1558 12.724 10.1122C12.7006 10.0687 12.6669 10.0315 12.6258 10.0042L8.96575 7.56516H8.9665Z" fill="#2D333A" />
                    </svg>
                    <p>Download for Android</p>
                </div>
            </div>
            <div>
                <img src={mock}></img>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-[24px]'>
                <div className='flex flex-col gap-[24px]'>
                    <img className='rounded-[16px] h-[360px]' src={profile}></img>
                    <div className='flex flex-col gap-10px'>
                        <h3 className='text-[24px] leading-[140%] font-[600]'>Set Up Your Profile</h3>
                        <p className='font-[400] text-[16px] leading-[160%] text-[#6D6D6D]'>Add your preferences and customize your privacy settings</p>
                    </div>

                </div>
                <div className='flex flex-col gap-[24px]'>
                    <img  className='rounded-[16px] h-[360px]' src={list}></img>
                    <div className='flex flex-col gap-10px'>
                        <h3 className='text-[24px] leading-[140%] font-[600]'>Build Your First List</h3>
                        <p className='font-[400] text-[16px] leading-[160%] text-[#6D6D6D]'>Start adding items with descriptions, prices, and store information.</p>
                    </div>

                </div>
                <div className='flex flex-col gap-[24px]'>
                    <img className='rounded-[16px] h-[360px]' src={optimize}></img>
                    <div className='flex flex-col gap-10px'>
                        <h3 className='text-[24px] leading-[140%] font-[600]'>Optimize  Lists and Shop Smarter</h3>
                        <p className='font-[400] text-[16px] leading-[160%] text-[#6D6D6D]'>Optimize your list, select the best shopping path, Use your lists while shopping and check off items as you go</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work