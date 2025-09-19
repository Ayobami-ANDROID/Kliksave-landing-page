import React, { useState } from 'react'

const Faqs = () => {
    const accordion= [
        {
            title:'What is KlikSave?',
            answer:'KLIKSAVE is an all-in-one field management and sales optimization platform designed to streamline operations, empower field representatives, and enhance business performance across industries.'
        },
        {
            title:'What does KlikSave do?',
            answer:'KLIKSAVE simplifies field operations by offering tools for order management, lead tracking, task reminders, performance monitoring, and seamless communication between field representatives and managers. It bridges the gap between the field and the office, helping businesses stay efficient and focused on growth.'
        },
        {
            title:'How does KlikSave help companies or corporations?',
            answer:'KLIKSAVE empowers companies by providing real-time insights into field activities, enabling better decision-making, improving team productivity, and optimizing sales processes. It helps organizations manage leads, track targets, and ensure timely order fulfillment, all while enhancing communication and reducing inefficiencies.'
        },
        {
            title:'Is KlikSave only for large Organizations?',
            answer:"No, KLIKSAVE is built for businesses of all sizes. Whether you're a small business or a large corporation, KLIKSAVE adapts to your needs, helping you manage field operations effectively and scale with ease.",
        },
        {
            title:'Can/Does KlikSave intergrate with ERPs?',
            answer:'Yes, KLIKSAVE seamlessly integrates with popular ERP systems to ensure smooth data flow between field operations and core business processes, enhancing overall efficiency and accuracy.'

        },
        {
            title:'What ERPs does KlikSave intergrate with?',
            answer:'KLIKSAVE can be integrated to accounting systems or enterprise resource planning systems so the records created by the field sales people (field representatives) can appear in internal operations ERP. Our team can work with you to explore custom integration options'
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(prev => prev === index ? null : index)
    }

    const highlightBrand = (text) => {
        const parts = String(text).split(/(KlikSave|KLIKSAVE)/gi)
        return parts.map((part, idx) => {
            if (part.toLowerCase() === 'kliksave') {
                return <span key={idx} style={{ color: '#FB923C' }}>{part}</span>
            }
            return <span key={idx}>{part}</span>
        })
    }

    return (
    <div className='w-full lg:px-[89px] px-[24px]  lg:py-[160px] py-[32px]'>
        <div className='gap-[24px] text-center mb-[64px]'>
            <h4 className='lg:text-[56px] text-[32px] font-[700] '>Frequently asked questions</h4>
            <p className=' text-[18px] font-[400]'>Everything you need to know about the KLIKSAVE product and how it works.</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {accordion.map((item, index) => {
                const isOpen = openIndex === index
                return (
                    <button
                        key={index}
                        onClick={() => toggle(index)}
                        className='w-full text-left px-[24px] py-[20px] border-[#C6C6C6] border-[0.4px] rounded-[8px] focus:outline-none'
                    >
                        <div className='flex items-start justify-between gap-4'>
                            <p className='font-medium text-[16px] leading-6'>{item.title}</p>
                            <span className='mt-1'>
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                        <path d="M11.6666 17.2537H20.3333M26.8333 17.2537C26.8333 23.2368 21.983 28.0871 16 28.0871C10.0169 28.0871 5.16663 23.2368 5.16663 17.2537C5.16663 11.2707 10.0169 6.42041 16 6.42041C21.983 6.42041 26.8333 11.2707 26.8333 17.2537Z" stroke="#262626" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                        <path d="M25.3336 15.9209V16.5875C25.3336 16.9557 25.0352 17.2542 24.667 17.2542H17.0003V24.9209C17.0003 25.289 16.7018 25.5875 16.3336 25.5875H15.667C15.2988 25.5875 15.0003 25.289 15.0003 24.9209V17.2542H7.33366C6.96547 17.2542 6.66699 16.9557 6.66699 16.5875V15.9209C6.66699 15.5527 6.96547 15.2542 7.33366 15.2542H15.0003V7.58756C15.0003 7.21937 15.2988 6.9209 15.667 6.9209H16.3336C16.7018 6.9209 17.0003 7.21937 17.0003 7.58756V15.2542H24.667C25.0352 15.2542 25.3336 15.5527 25.3336 15.9209Z" fill="#262626" fillOpacity="0.6"/>
                                    </svg>
                                )}
                            </span>
                        </div>
                        {isOpen && (
                            <div className='mt-2 text-[14px] text-[#52525B] leading-6'>
                                {highlightBrand(item.answer)}
                            </div>
                        )}
                    </button>
                )
            })}
        </div>
    </div>
    )
}

export default Faqs