import React from 'react'
import emma from '../assets/EmmaRoberts.png'
import david from '../assets/David.png'
import olivia from '../assets/oliva.png'
import micheal from '../assets/micheal.png'
import sophia from '../assets/sophia.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Teams = () => {
  const data = [
    {
      name: 'Emma Roberts',
      post: 'Compliance Manager, BrightTech',
      testimony: 'KlikSave has completely transformed our compliance process. Their intuitive platform, combined with exceptional support, made achieving SOC 2 compliance smoother than ever."',
      image: emma
    },
    {
      name: 'David Thompson',
      post: 'CTO, NexGen Solutions',
      testimony: 'We needed a reliable compliance partner, and KlikSave delivered. Their automated workflows and transparent pricing saved us countless hours.',
      image: david
    },
    {
      name: 'Olivia Blackwood',
      post: '@olivia1992',
      testimony: 'KlikSave provided the clarity and automation we needed to manage multiple compliance frameworks effortlessly. Highly recommended!e.',
      image: olivia
    },
    {
      name: 'Emma Roberts',
      post: 'Compliance Manager, BrightTech',
      testimony: 'KlikSave has completely transformed our compliance process. Their intuitive platform, combined with exceptional support, made achieving SOC 2 compliance smoother than ever."',
      image: emma
    },
    {
      name: 'David Thompson',
      post: 'CTO, NexGen Solutions',
      testimony: 'We needed a reliable compliance partner, and KlikSave delivered. Their automated workflows and transparent pricing saved us countless hours.',
      image: david
    },
    {
      name: 'Olivia Blackwood',
      post: '@olivia1992',
      testimony: 'KlikSave provided the clarity and automation we needed to manage multiple compliance frameworks effortlessly. Highly recommended!e.',
      image: olivia
    },
    {
      name: 'Emma Roberts',
      post: 'Compliance Manager, BrightTech',
      testimony: 'KlikSave has completely transformed our compliance process. Their intuitive platform, combined with exceptional support, made achieving SOC 2 compliance smoother than ever."',
      image: emma
    },
    {
      name: 'David Thompson',
      post: 'CTO, NexGen Solutions',
      testimony: 'We needed a reliable compliance partner, and KlikSave delivered. Their automated workflows and transparent pricing saved us countless hours.',
      image: david
    },
    {
      name: 'Olivia Blackwood',
      post: '@olivia1992',
      testimony: 'KlikSave provided the clarity and automation we needed to manage multiple compliance frameworks effortlessly. Highly recommended!e.',
      image: olivia
    },
  ]

  const highlightBrand = (text) => {
    const parts = String(text).split(/(KlikSave)/gi)
    return parts.map((part, index) => {
      if (part.toLowerCase() === 'kliksave') {
        return <span key={index} style={{ color: '#FB923C' }}>{part}</span>
      }
      return <span key={index}>{part}</span>
    })
  }

  const lineData = [
    {
      name: 'Michael Carter',
      post: 'Director of IT, Fortify Systems',
      testimony: 'e switched to KlikSave, and it was the best decision for our compliance strategy. Their platform is powerful, user-friendly, and highly efficient.',
      image: micheal
    },
    {
      name: 'Sophia Martinez',
      post: 'CISO, SecureWave',
      testimony: 'KlikSave simplified our security audits with real-time monitoring and automated evidence collection. Compliance has never been this stress-free!d.',
      image: sophia
    },
    {
      name: 'James Lee',
      post: 'Head of Security, Quantum Data',
      testimony: 'With KlikSave, our compliance process became seamless. Their customer support team is always ready to assist, making them an invaluable partner..',
      image: micheal
    },
    {
      name: 'Michael Carter',
      post: 'Director of IT, Fortify Systems',
      testimony: 'e switched to KlikSave, and it was the best decision for our compliance strategy. Their platform is powerful, user-friendly, and highly efficient.',
      image: micheal
    },
    {
      name: 'Sophia Martinez',
      post: 'CISO, SecureWave',
      testimony: 'KlikSave simplified our security audits with real-time monitoring and automated evidence collection. Compliance has never been this stress-free!d.',
      image: sophia
    },
    {
      name: 'James Lee',
      post: 'Head of Security, Quantum Data',
      testimony: 'With KlikSave, our compliance process became seamless. Their customer support team is always ready to assist, making them an invaluable partner..',
      image: micheal
    },
    {
      name: 'Michael Carter',
      post: 'Director of IT, Fortify Systems',
      testimony: 'e switched to KlikSave, and it was the best decision for our compliance strategy. Their platform is powerful, user-friendly, and highly efficient.',
      image: micheal
    },
    {
      name: 'Sophia Martinez',
      post: 'CISO, SecureWave',
      testimony: 'KlikSave simplified our security audits with real-time monitoring and automated evidence collection. Compliance has never been this stress-free!d.',
      image: sophia
    },
    {
      name: 'James Lee',
      post: 'Head of Security, Quantum Data',
      testimony: 'With KlikSave, our compliance process became seamless. Their customer support team is always ready to assist, making them an invaluable partner..',
      image: micheal
    }


  ]

  return (
    <div className='flex flex-col items-center justify-center py-[80px] bg-[#EEEEEE]'>
      <div className='flex flex-col items-center gap-[24px] pb-[80px]'>
        <h1 className='font-[600] lg:text-[48px] text-[32px]  text-center leading-[114.9%]'>Loved by companies and <br />teams across Africa</h1>
        <p className='font-[400] lg:text-[20px] text-[16px] text-center text-[#71717A]'>Here’s what people are saying about KlikSave</p>
      </div>
      <Swiper
        className='testimonial-swiper w-full'
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={1500}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          1024: { // desktop and above
            slidesPerView: 3,
          },
        }}
        style={{ width: '100%' }}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className='rounded-xl border border-gray-200 p-6 bg-white flex flex-col flex-1'>
              <div className='flex items-center gap-3 mb-3'>
                <img src={item.image} alt={item.name} className='w-10 h-10 rounded-full object-cover' />
                <div>
                  <p className='font-[600] text-[18px] leading-[28px]'>{item.name}</p>
                  <p className='text-[14px] font-[400] text-[#71717A] leading-[24px] teacking-[8px]'>{item.post}</p>
                </div>
              </div>
              <p className='text-sm text-gray-700 leading-relaxed'>{highlightBrand(item.testimony)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='pt-[32px] w-full'>
        <Swiper
          className='testimonial-swiper w-full'
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
          speed={1500}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{ width: '100%' }}
        >
          {lineData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className='rounded-xl border border-gray-200 p-6 bg-white flex flex-col flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <img src={item.image} alt={item.name} className='w-10 h-10 rounded-full object-cover' />
                  <div>
                    <p className='font-[600] text-[18px] leading-[28px]'>{item.name}</p>
                    <p className='text-[14px] font-[400] text-[#71717A] leading-[24px] teacking-[8px]'>{item.post}</p>
                  </div>
                </div>
                <p className='text-sm text-gray-700 leading-relaxed'>{highlightBrand(item.testimony)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Teams