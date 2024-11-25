import React from 'react'
import { MdMenu } from "react-icons/md";
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Mobilemenu = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger> <MdMenu className="lg:hidden flex text-3xl cursor-pointer mt-2" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <ul className="flex flex-col  gap-y-5 gap-x-5">
          <li><Link className="text-[15px] font-semibold" href="">How it's Work</Link></li>
          <li><Link className="text-[15px] font-semibold" href="">Our Work</Link></li>
          <li><Link className="text-[15px] font-semibold" href="">Pricing</Link></li>
          <li><Link className="text-[15px] font-semibold" href="">About Us</Link></li>
        </ul>
        <div className='mt-6'>
        <button className="text-[16px] text-white bg-[#3461FF] rounded-full px-[24px] py-[16px]">
          Book A Call
        </button>
        </div>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


    </div>
  )
}

export default Mobilemenu