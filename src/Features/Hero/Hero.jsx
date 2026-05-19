import React from 'react'
import HeroLeftContent from './HeroLeftContent'
import HeroRightContent from './HeroRightContent'

const Hero = () => {
  return (
    <div id="home" className='pt-32 pb-20 px-10 min-h-screen flex items-start justify-between relative overflow-hidden sora-font'>
      <HeroLeftContent />
      <HeroRightContent/>
    </div>
  )
}

export default Hero
