import Link from 'next/link'
import React from 'react'
import { MdMenu } from "react-icons/md";
import {Home} from '../../../public/icons/icons';
import {Circle} from '../../../public/icons/icons';
import Mobilemenu from '../components/Mobilemenu';


export const Header = () => {
  return (
    

    <navbar className="lg:px-24 md:px-12 px-6">
    <div className="md:container mx-auto px-4">
      <div className="flex justify-between lg:px-12 py-6 items-center ">
      
        <div className='flex gap-2 items-center'>
          <div className='flex'>
        <Circle className ="h-[18px] w-[21px]"/>
        <Home className='h-[18px] w-[21px] '/>
        </div>
        <h1 className="text-[28px] font-bold">Embrace</h1>
        </div>
        {/* Navbar items visible on large screens */}
        <ul className="lg:flex hidden gap-6 py-3">
          <li><Link className="text-[15px] font-semibold" href="">How it's Work</Link></li>
          <li><Link className="text-[15px] font-semibold" href="">Our Work</Link></li>
          <li><Link className="text-[15px] font-semibold" href="">Pricing</Link></li>
          <li><Link className="text-[15px] font-semibold" href="">About Us</Link></li>
        </ul>
  
        {/* Book A Call Button - Hidden on small screens, visible on large screens */}
        
     <div className='flex items-center'>
     <button className="lg:flex hidden text-[16px] text-white bg-[#3461FF] rounded-full px-[24px] py-[16px]">
          Book A Call
        </button>
        <Mobilemenu/>
       </div>
        
  
        {/* Hamburger Menu Icon - Visible only on small screens */}
        {/* <MdMenu className="lg:hidden flex text-3xl cursor-pointer mt-2" /> */}
      </div>
      
    </div>
  </navbar>
  
  

  )
}
