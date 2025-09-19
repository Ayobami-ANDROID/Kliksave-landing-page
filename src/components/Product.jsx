
import coinsImage from '../assets/coins.png'
import target from '../assets/target.png'
import graph from '../assets/graph.png'
import human from '../assets/human.png'
import house from '../assets/house.png'

const Product = () => {
  return (
    <div className='mt-[50px] lg:px-[89px] px-[24px] '>
        <div className='flex flex-col  items-center'>
            <h3 className='lg:ext-[56px] text-[32px]  font-[600] leading-[100%] mb-[20px]' >Our Products/Offers</h3>
            <div className='flex flex-col items-center justify-center w-full gap-[20px]'>

                <div 
                  className="lg:h-[560px] h-[280px] w-full lg:pt-[90px] pt-[24px] pl-[40px] rounded-[40px] border-[0.5px] border-[#DEDEDE] bg-cover bg-[55%] bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 45%), url(${coinsImage})`
                  }}
                > 
                <div className='lg:w-[40%] w-[90%]'>
                <h3 className='text-[#fff] font-[600] lg:text-[48px] text-[24px]  tracking-[-2%]'>Privacy Compliance Made Simple</h3>
                <p className='text-[#F5F7F8] text-[18px] font-[400]'>Your customers trust you with their data. KlikSave helps you honor that trust by ensuring full compliance with global privacy regulations like GDPR, CCPA, and more</p>
                </div>
 
                </div>
                
                <div 
                  className="lg:h-[560px] h-[280px] w-full lg:pt-[90px] pt-[24px] pl-[40px] rounded-[40px] border-[0.5px] border-[#DEDEDE] bg-cover bg-no-repeat bg-[75%_70%]"
                  style={{
                    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 45%), url(${target})`
                  }}
                > 
                <div className='lg:w-[40%] w-[90%]'>
                <h3 className='text-[#fff] font-[600] lg:text-[48px] text-[24px]   tracking-[-2%]'>Privacy Compliance Made Simple</h3>
                <p className='text-[#F5F7F8] text-[18px] font-[400]'>Your customers trust you with their data. KlikSave helps you honor that trust by ensuring full compliance with global privacy regulations like GDPR, CCPA, and more</p>
                </div>
 
                </div> 
                <div 
                  className="lg:h-[560px] h-[280px] w-full lg:pt-[90px] pt-[24px] pl-[40px] rounded-[40px] border-[0.5px] border-[#DEDEDE] bg-cover bg-no-repeat bg-[50%_50%]"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.45) 45%), url(${graph})`
                  }}
                > 
                <div className='lg:w-[40%] w-[90%]'>
                <h3 className='text-[#fff] font-[600] lg:text-[48px] text-[24px]    tracking-[-2%]'>Privacy Compliance Made Simple</h3>
                <p className='text-[#F5F7F8] text-[18px] font-[400]'>Your customers trust you with their data. KlikSave helps you honor that trust by ensuring full compliance with global privacy regulations like GDPR, CCPA, and more</p>
                </div>
 
                </div> 
                <div 
                   className="lg:h-[560px] h-[280px] w-full lg:pt-[90px] pt-[24px]  pl-[40px] rounded-[40px] border-[0.5px] border-[#DEDEDE] bg-cover bg-no-repeat bg-center"
                   style={{
                     backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${human})`
                   }}
                > 
                <div className='lg:w-[40%] w-[90%]'>
                <h3 className='text-[#fff] font-[600] lg:text-[48px] text-[24px]    tracking-[-2%]'>Privacy Compliance Made Simple</h3>
                <p className='text-[#F5F7F8] text-[18px] font-[400]'>Your customers trust you with their data. KlikSave helps you honor that trust by ensuring full compliance with global privacy regulations like GDPR, CCPA, and more</p>
                </div>
 
                </div> 
                <div 
                   className="lg:h-[560px] h-[280px] w-full lg:pt-[90px] pt-[24px] pl-[40px] rounded-[40px] border-[0.5px] border-[#DEDEDE] bg-cover bg-no-repeat bg-[45%_30%]"
                   style={{
                     backgroundImage: `linear-gradient(rgba(0,0,0,0.56), rgba(0,0,0,0.56)), url(${house})`
                   }}
                > 
                <div className='lg:w-[40%] w-[90%]'>
                <h3 className='text-[#fff] font-[600] lg:text-[48px] text-[24px]    tracking-[-2%]'>Privacy Compliance Made Simple</h3>
                <p className='text-[#F5F7F8] text-[18px] font-[400]'>Your customers trust you with their data. KlikSave helps you honor that trust by ensuring full compliance with global privacy regulations like GDPR, CCPA, and more</p>
                </div>
 
                </div> 
            </div>

        </div>
    </div>
  )
}

export default Product