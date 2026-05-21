import React from 'react'
import HeroLeftContent from './HeroLeftContent'
import HeroRightContent from './HeroRightContent'

const Hero = () => {
  return (
    <div
      id="home"
      className='pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-10 min-h-screen flex flex-col lg:flex-row items-center justify-between relative overflow-hidden sora-font gap-10 lg:gap-8'
    >
      {/* ── Aurora blobs ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.13) 0%, transparent 65%)',
          top: '-180px',
          right: '-180px',
          animation: 'aurora1 10s ease-in-out infinite',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 65%)',
          bottom: '-100px',
          left: '-100px',
          animation: 'aurora2 13s ease-in-out infinite',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.07) 0%, transparent 65%)',
          top: '50%',
          left: '40%',
          animation: 'aurora3 16s ease-in-out infinite',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <HeroLeftContent />
      <HeroRightContent />
    </div>
  )
}

export default Hero