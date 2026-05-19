import React from 'react'
import LeftAbout from './LeftAbout'
import SectionDivide from '../../Components/SectionDivide'
import VerticalLine from '../../Components/VerticalLine'  
import RightAbout from './RightAbout'

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen bg-[#0a0a0f] flex flex-col gap-10 py-10'>
      
      <h1 className='sora-font text-center text-font text-5xl font-bold'>
        About Me
      </h1>
      
      <SectionDivide />

      {/* THIS is what needs to be a flex row */}
      <div className='flex flex-row items-stretch px-10 gap-6'>
        
        <div className='flex-1'>   {/* ← wrap LeftAbout in flex-1 */}
          <LeftAbout />
        </div>

        <VerticalLine />
       
        <div className='flex-1'>   
          <RightAbout/>
        </div>

      </div>
       <SectionDivide />
    </div>
  )
}
export default About;