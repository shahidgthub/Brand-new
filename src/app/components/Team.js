import React from 'react'
import Image from 'next/image';
import team1 from '../../../public/Images/Team1.png';
import team2 from '../../../public/Images/Team2.png';
import team3 from '../../../public/Images/Team3.png';
import team4 from '../../../public/Images/Team4.png';
import team5 from '../../../public/Images/Team5.png';
import team6 from '../../../public/Images/Team6.png';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ellipse from '../../../public/Images/ellipse.png';
import  ellipse2 from '../../../public/Images/ellipse2.png';
import ellipse3 from '../../../public/Images/ellipse3.png';
import arrowteam from '../../../public/Images/arrowteam.png';
import dot from '../../../public/Images/dot.png';

const Team = () => {
  return (
    <section className='px-6 lg:px-24 md:px-12'>
   <div className='flex flex-wrap gap-24 lg:flex-nowrap'>     
<div className='flex flex-wrap px-6 lg:flex-nowrap '>
    <Image src={team1} h-190 w-190/>
    <Image src={team2} h-190 w-190/>
    <Image src={team3} h-190 w-190/>
</div>
<div className=''>
    <h1 className='lg:text-[64px] md:text-32 text-24 font-bold '>Meet Our Team</h1>
    <p className='lg:text-[16px] text-[14px]'>Discover the brilliance behind  Embrace.
         Our team blends<br/> innovation and artistry to craft digital wonders that captivate</p>
</div>
</div>
<div className='flex flex-wrap lg:gap-24 lg:flex-nowrap'>
  <div className='flex flex-wrap px-6 lg:flex-nowrap '>
    <Image src={team4} className="h-[190px] w-[190px]" />
    <Image src={team5} className="h-[190px] w-[190px]" />
    <Image src={team6} className="h-[190px] w-[190px]" />
  </div>
  <div className='mx-6 mt-3 '>
  <button className='w-32 h-12 px-5 text-white bg-blue-500 border rounded-full lg:mt-24'>
  Learn More
</button>
</div>

</div>
 {/* ClientAboutus */}
 <div className='flex flex-wrap justify-between py-12 lg:flex-nowrap '>
     <h1 className='lg:text-[64px] text-32'>What Our Client Said about us</h1>
     <div className='flex gap-6 mt-6'>
     <FaArrowLeft className='w-12 h-12 rounded-2xl' />
     <FaArrowRight  className='border h-12 w-24 text-white rounded-full bg-[#3461FF]'/>
</div>
</div>
{/* client2div */}
<div className='flex flex-wrap gap-4 lg:flex-nowrap'>
  <div className=' lg:w-[513px] lg:h-[312px] bg-[#3461FF]  rounded-[30px] relative'>
    <div className='flex gap-2 px-4 py-2 text-white '>
      <Image src={ellipse} className="h-[85px] w-[85px] rounded-full"/>
      <p className='font-bold text-[28px]'>Amelia Joseph <br/> <span className='font-semibold text-[20px]'>Chief Manager</span></p>
    </div>
    <p className='px-4 py-4 text-white font-semibold text-[16px]'>My vision came alive effortlessly. Their blend of casual 
    and professional approach made the process  breeze.
       Creativity flowed, and the results were beyond my expectations.</p>
  </div>
  <div className='lg:w-[513px] lg:h-[312px] bg-[#F8F9FF]  rounded-[30px] relative'>
    <div className='flex gap-2 px-4 py-2 text-white '>
      <Image src={ellipse2} className="h-[85px]w-[85px] rounded-full"/>
      <p className='font-bold text-[28px]'>Jacob Joshua <br/> <span className='font-semibold text-[20px]'>Chief Manager</span></p>
    </div>
    <p className='px-4 py-4  font-semibold text-[16px]'>I found the digital expertise I needed. Their creative professional
     balance exceeded expectations. Friendly interactions, exceptional outcomes.
     For digital enchantment, it's got to be Embrace!</p>
  </div>
  <div className='lg:w-[513px] lg:h-[312px] bg-[#F8F9FF]  rounded-[30px] relative'>
    <div className='flex gap-2 px-4 py-2 text-white '>
      <Image src={ellipse3} className="h-[85px]w-[85px] rounded-full"/>
      <p className='font-bold text-[28px]'>Jacob Joshua <br/> <span className='font-semibold text-[20px]'>Chief Manager</span></p>
    </div>
    <p className='px-4 py-4  font-semibold text-[16px]'>I found the digital expertise I needed. Their creative professional
     balance exceeded expectations. Friendly interactions, exceptional outcomes.
     For digital enchantment, it's got to be Embrace!</p>
  </div>
  
  
</div>

{/* new section */}
<div className='my-20 bg-[#232038] lg:w-[1200px] md:w-[600px] w-[280px] lg:h-[455px] md:h-[300px] h-[300px] rounded-[56px] p-20 flex justify-center items-center'>
 <div className='flex flex-wrap items-center lg:flex-nowrap gap-x-40'>
   <div>
     <h1 className='text-xl font-medium text-white capitalize lg:text-5xl md:text-2xl'>start your journey <br /> with us now</h1>
     <div className='py-6 lg:py-24'><button className='font-bold text-white px-4 py-2 rounded-2xl bg-[#3461FF]'>Start Now</button></div>
   </div>
   <div
  className="lg:w-[300px] lg:h-[300px] md:w-[160px] md:h-[160px] w-[100px] h-[100px] bg-cover bg-[#E0FF22]  bg-center flex-shrink-0 rounded-full flex items-center justify-center"
 
>
<Image src={dot} className='lg:w-[94px] w-[50px]  lg:h-[65px] h-[30px]'/>

  <Image src={arrowteam} className='lg:w-[135px] w-[80px] lg:h-[81px] h-[40px]'/>
  
</div>
 </div>
</div>



{/* newlast */}
<div className='flex flex-wrap justify-between lg:gap-12 lg:flex-nowrap'>
  <div>
  <div className='flex justify-between gap-12 mt-4 border-t-2'>
    <h1 className='font-bold lg:text-[20px] pt-4'>How do i sign up for the project?</h1>
    <p className=' text-center font-bold w-[20px] h-[20px] bg-[#3461FF] rounded-full text-white mt-4'>+</p>
</div>
<div className='flex justify-between gap-12 mt-4 border-t-2'>
    <h1 className='font-bold lg:text-[20px] pt-4'>What thing that i should prepare before starting?</h1>
    <p className='text-center font-bold w-[20px] h-[20px] bg-[#3461FF] rounded-full text-white mt-4'>+</p>
</div>
<div className='flex justify-between gap-12 mt-4 border-t-2 border-b-2'>
    <h1 className='font-bold lg:text-[20px] pt-4'>Does my company need help for marketing advices?</h1>
    <p className='text-center font-bold w-[20px] h-[20px] bg-[#3461FF] rounded-full text-white mt-4'>+</p>
</div>

    </div>
  
  <div>
    <h1 className='lg:text-[40px] md:text-[30px] text-[20px] font-semibold'>How we can help you?
</h1>
<p className='text-[20px] font-semibold lg:py-6'>
Follow our newsletter. We will regulary update our latest project and availability.
</p>
<div className='flex flex-wrap justify-between lg:flex-nowrap'>
  <input type='text' placeholder="Enter your name" className='px-3 border rounded-xl'></input>
  <button className='px-3 py-2 bg-[#3461FF] text-white rounded-2xl '>Lets Talk</button>
</div>
<p className='underline text-[#3461FF] py-6'>More FAQ</p>
  </div>
  </div>



    </section>
  )
}

export default Team;