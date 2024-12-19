import React from 'react'
import Image from 'next/image'
import workimg from "../../../public/Images/workimg1.png"
import work2 from "../../../public/Images/workimg2.png"
import work3 from "../../../public/Images/work3.png"
import work4 from "../../../public/Images/work4.png"
import work5 from "../../../public/Images/work5.png"
import apple from "../../../public/Images/apple.png"
import cocacola from "../../../public/Images/cocacola.png"
import nike from "../../../public/Images/nike.png"







const Work = () => {
  return (
      <section className='px-6 xl:px-24 md:px-12'>
          <div className='container mx-auto'>
          <div className='flex flex-wrap text-center lg:gap-32 lg:flex-nowrap lg:text-start'>
          <div className='px-5'>
              <h1 className='lg:text-[64px] font-bold'>How it Works</h1>
              <p className='font-semi-bold text-[18px]'>We believe that the best way to create successful marketing<br/> 
                  campaigns is to work closely with our clients to understand<br/>
                   their goals and challenges.</p>
                   <Image src={ workimg} className='mt-3 lg:w-420 lg:h-311 '/></div>
                   {/* right */}
                   <div className='flex-wrap mt-6 lg:flex-nowrap' > 
                       <div className='flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap'>
                       <Image src={work2} className='lg:h-106 lg:w-106 '/>
                       <div>
                       <h1 className='font-semibold lg:text-[32px] text-[24]'>Discovery</h1>
                       <p>We meet with you to learn about your business, your goals,<br/> 
                           and your target audience.</p>
                           </div>
                           </div>
                           <div className='flex flex-wrap items-center justify-center gap-2 mt-3 lg:flex-nowrap '>
                       <Image src={work3} className='lg:h-106 lg:w-106'/>
                       <div>
                       <h1 className='font-semibold lg:text-[32px] text-[24]'>Strategy</h1>
                       <p>We develop a customized marketing strategy that is based <br/>
                       on your unique needs and goals.</p>
                           </div>
                           </div>
                           <div className='flex flex-wrap items-center justify-center gap-2 mt-3 lg:flex-nowrap '>
                       <Image src={work4} className='lg:h-106 lg:w-106'/>
                       <div>
                       <h1 className='font-semibold lg:text-[32px] text-[24]'>Execution</h1>
                       <p>We execute our strategy using the latest digital marketing<br/> 
                           tools and techniques.</p>
                           </div>
                           </div>
                           <div className='flex flex-wrap items-center justify-center gap-2 mt-3 lg:flex-nowrap'>
                       <Image src={work5} className='lg:h-106 lg:w-106 '/>
                       <div>
                       <h1 className='font-semibold lg:text-[32px] text-[24]'>Measurement</h1>
                       <p>We track the results of our campaigns so that we can make<br/>
                        adjustments as needed.</p>
                           </div>
                           </div>
                   </div>
                   </div>
                   {/* OurWork */}
                   <div className='py-12'>
                       <h1 className='lg:text-[64px] text-32 text-center'>OurWork</h1>
                       <p className='font-semibold text-[18px] text-center'>A glimpse of our portfolio</p>
                       <div className='flex flex-wrap gap-4 py-6 text-center lg:flex-nowrap lg:text-start'>
                           <Image src={apple}className=' lg:h-[378px] lg:w-[400px] md:h-[300px] md:w-[310px] h-[250px] w-[260px]'/>
                           <Image src={cocacola} className= 'lg:h-[378px] lg:w-[400px] md:h-[300px] md:w-[310px] h-[250px] w-[260px]'/>
                           <Image src={nike} className='lg:h-[378px] lg:w-[400px] md:h-[300px] md:w-[310px] h-[250px] w-[260px]'/></div>
                           <div className='text-center'>
                           <button className='px-6 py-2 bg-[#3461FF] rounded-2xl text-white'>See More</button></div>
                   </div>
                   {/* work last Section */}
                   <div className='py-12'>
                   <div className='lg:w-[1200px]  md:w-[700px]   lg:h-[371px] md:h-[300px] h-[250px] bg-[#3561FF] rounded-[32px]'>
                       <div className='flex flex-wrap items-center justify-center py-12 space-x-6 text-white lg:flex-nowrap '>
                       <p className='lg:text-[64px]'>Elevate your<br/>brand Today!</p>
                       <div className='lg:px-24'>
                       <p className='lg:text-[20px]'>Ready to transform your digital dresence? Let's <br/>
                       create magic together! book our services now!</p>
                       <button className='px-4 py-2 text-black bg-white lg:mt-12 rounded-2xl'>Book Call</button>
                       </div>
</div>
                   </div>
                </div>
                </div>
      </section>
    
  )
}

export default Work