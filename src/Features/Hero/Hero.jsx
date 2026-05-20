import React from 'react'
import HeroLeftContent from './HeroLeftContent'
import HeroRightContent from './HeroRightContent'

const Hero = () => {
  return (
    <div id="home" className='pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-10 min-h-screen flex flex-col lg:flex-row items-center justify-between relative overflow-hidden sora-font gap-10 lg:gap-8'>
      <HeroLeftContent />
      <HeroRightContent/>
    </div>
  )
}

export default Hero
