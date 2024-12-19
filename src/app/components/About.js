import React from 'react'
import Image from 'next/image'
import spotify from '../../../public/Images/spotify.png'
import google from '../../../public/Images/Google.png'
import microsoft from '../../../public/Images/Microsoft.png'
import shopify from '../../../public/Images/shopify.png'
import Evernote from '../../../public/Images/Evernote.png'

import Adobe from '../../../public/Images/Adobe.png'
import paypal from '../../../public/Images/paypal.png'
import amazon from '../../../public/Images/amazon.png'
import asana from '../../../public/Images/asana.png'
import { FaArrowRight } from "react-icons/fa";


const About = () => {
  return (
      <div className='md:container mx-auto'>
    <div className='bg-[#FAFAFA] lg:py-12'>
        <h1 className='lg:text-[36px] text-center py-6 font-semibold' >Companies we Work with</h1>
        <div className='py-6 lg:px-24 md:px-12 px-6  lg:gap-32 md:gap-24 gap-12  flex lg:flex-nowrap flex-wrap lg:text-satrt text-center'>
            <Image src={spotify} alt="Description" className='w-[140px] h-[48px]'/>
            <Image src={google} alt="Description" className='w-[113px] h-[48px]'/>
            <p className=' text-[30px] font-bold'>Uber</p>
            <Image src={microsoft} alt="Description" className='w-[113px] h-[48px]'/>
            <Image src={shopify} alt="Description" className='w-[113px] h-[48px]'/></div>
            {/* 2ndimage */}
            <div className='py-12 lg:px-24 md:px-12 px-6 lg:gap-32 md:gap-24 gap-12 flex lg:flex-nowrap flex-wrap lg:text-start text-center'>
              <Image src={Evernote}alt="Description" className='h-[48px] w-[110px]'/>
              <Image src={Adobe}  alt="Description"className='h-[48px] w-[110px]'/>
              <Image src={paypal} alt="Description" className='h-[48px] w-[110px]'/>
              <Image src={amazon} alt="Description" className='h-[48px] w-[110px]'/>
             <Image src={asana} alt="Description" className='h-[48px] w-[110px]'/>




              
            

            </div>
    </div>
    {/* 3 Section */}
    <section className='py-12 lg:px-24 md:px-12 px-6'>
      <div className='flex'>
        <div className='flex lg:gap-24 md:gap-12 gap-6 lg:flex-nowrap flex-wrap lg:text-start text-center'>
          <div>
          <p className='font-bold lg:text-[64px] text-[32px]'>245%</p>
          <p className='font-semibold lg:text-[16px]'>More revenues for the brand</p>
          </div>
          <div>
          <p className='font-bold lg:text-[64px] text-[32px]'>130K+</p>
          <p className='font-semibold lg:text-[16px]'>Audiences reached </p>
        </div>
        <div >
          <h1 className='lg:text-[64px] text-[32px] font-bold'>Commitments</h1>
          <p className='font-semibold lg:text-[16px] '>We are committed to working with you collaboratively to understand
             your goals and create a strategy that will achieve them.</p>
        </div>
        </div>
        </div>
        {/* 2nd */}
        <div className='flex lg:gap-32 md:gap-24 gap-6 py-12  lg:flex-nowrap flex-wrap lg:text-start text-center'>
        <div>
          <p className='font-bold lg:text-[64px] text-[32px]'>50+</p>
          <p className='font-semibold lg:text-[16px] text-[14px]'>brands trust us </p>
        </div>
        <div>
          <p className='font-bold lg:text-[64px] text-[32px]'>24+</p>
          <p className='font-semibold lg:text-[16px] text-[14px]'>Worldwide awards</p>
        </div>
        <button className=' text-[#3461FF] lg:pt-24 flex gap-2'>Learn more<FaArrowRight/></button>
        
        </div>
       </section>
    </div>
  )
}

export default About