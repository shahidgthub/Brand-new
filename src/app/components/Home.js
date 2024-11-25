import React from 'react'
import Image from 'next/image'
import rectangle1 from '../../../public/Images/rectangle1.png'
import rectangle2 from '../../../public/Images/rectangle2.png'
import pencile from '../../../public/Images/pencile.png'
import rectangle4 from '../../../public/Images/rectangle4.png'
import rectangle5 from '../../../public/Images/rectangle5.png'
import laptop from '../../../public/Images/laptop.png'
import gold from '../../../public/Images/Gold.png'




const Home = () => {
  return (
    <section className='lg:px-24 md:px-12 px-6'>

      <div className='md:container mx-auto px-4'>
    <div className='flex justify-between lg:flex-nowrap flex-wrap lg:text-start text-center'>
        <div className='py-6'>
            <p className='lg:text-[70px] md:text-[40px] text-[20px] font-bold'>We Take<br/> Care of<br/> 
Your Brand</p>
<p className='lg:text-[20px] text-[14px] font-semibold lg:py-12'>We care about our work and we care about our clients.</p>
<div className=' flex gap-6 py-6 lg:flex-nowrap flex-wrap '>
<button className='border lg:px-10  px-6 lg:py-2  rounded-full bg-[#FAFAFA]'> Enter Your Email</button>
<button className='text-white bg-[#3461FF] px-6  py-2 rounded-2xl'> LetTalk</button>
</div>
</div>
{/* right */}
 
        <div className=''>
             <div className='flex py-6 lg:flex-nowrap flex-wrap lg:text-start text-cen'>
                 <Image src={rectangle1} alt="Description"/>
                 <Image src={rectangle2}alt="Description"/>
             </div>
              {/* 2nd */}
              <div className='flex lg:flex-nowrap flex-wrap lg:-mt-6 '>
            <div className='bg-hero-rectangle3 bg-no-repeat h-[190px] w-[241px]  shrink-0 flex justify-center items-center'>
    <Image src={pencile} alt="decription" className="h-[105px] w-[84px] text-center"/>
                </div>
                <Image src={rectangle4} alt="Description" className="my-3 "/>
         </div>
         {/* 3rd*/}
         <div className='flex lg:flex-nowrap flex-wrap -mt-3'>
           <Image src={rectangle5} alt="Description"/>
         <div className='bg-hero-rectangle6 bg-no-repeat h-[240px]  w-[183px] shrink-0 flex justify-center items-center'>
         <Image src={laptop} alt="decription" className="text-[96px] "/>
          </div>
          <div className='bg-hero-rectangle7 bg-no-repeat h-[240px] w-[183px] shrink-0 flex justify-center items-center'>
         <Image src={gold} alt="decription" className="text-[96px] "/>
          </div>
         

        </div>
        
         </div>
        
     </div>
     
     </div>
     </section>
  )
}

 export default Home