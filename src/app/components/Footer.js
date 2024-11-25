import React from 'react'
import { IoCamera } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import {Home} from '../../../public/icons/icons';
import {Circle} from '../../../public/icons/icons';






export const Footer = () => {
  return (
    <section className='lg:px-24 md:px-12 px-6'>

<div className='grid grid-cols-1 md:grid-cols-5  bg-[#FAFAFA] mt-6'>
    <div className='flex flex-col px-6'>
        <div className='flex items-center justify-center mb-4 '>
            <div className='flex'>
                <Circle className="h-[18px] w-[21px]" />
                <Home className='h-[18px] w-[21px]' />
            </div>
            <h1 className='text-[36px] font-bold'>Embrace</h1>
        </div>
        <div className='flex gap-6 py-6 px-6'>
            <IoCamera  className='h-[28px] w-28px'/>
            <FaTwitter className='h-[28px] w-28px'/>
            <FaFacebookF className='h-[28px] w-28px'/>
        </div>
        <button className='bg-[#3461FF] rounded-2xl text-white text-[24px]'>Contact us</button>
    </div>
    <div></div>
    
    <div className='flex flex-col space-y-6'>
        <p className='font-semibold text-[16px]'>Work With Us</p>
        <p className='font-semibold text-[16px]'>Advertise With Us</p>
        <p className='font-semibold text-[16px]'>Support Us</p>
        <p className='font-semibold text-[16px]'>Business Advices</p>
    </div>

    <div className='flex flex-col space-y-6'>
        <p className='font-semibold text-[16px]'>Business Advices</p>
        <p className='font-semibold text-[16px]'>Our Work</p>
        <p className='font-semibold text-[16px]'>Our Commitment</p>
        <p className='font-semibold text-[16px]'>Our Team</p>
    </div>

    <div className='flex flex-col space-y-6'>
        <p className='font-semibold text-[16px]'>About Us</p>
        <p className='font-semibold text-[16px]'>FAQs</p>
        <p className='font-semibold text-[16px]'>Report a Bug</p>
    </div>
</div>

    </section>
  )
}
