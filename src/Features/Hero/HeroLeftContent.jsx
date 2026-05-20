import { useEffect, useState } from 'react'

const HeroLeftContent = () => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Each element types/reveals one after another
    const delays = [80, 220, 400, 600]
    const timers = delays.map((d, i) =>
      setTimeout(() => setStep(i + 1), d)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className='sora-font w-full lg:max-w-[55%]'>

      {/* Heading — clip reveal from left */}
      <div style={{ overflow: 'hidden' }}>
        <h1
          className='text-[#E5E7EB] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight'
          style={{
            transform: step >= 1 ? 'translateX(0)' : 'translateX(-60px)',
            opacity: step >= 1 ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease',
          }}
        >
          Hi I'm
          <span className='text-font'> Shrabony <br />Ghosh Tithy ...</span>
        </h1>
      </div>

      {/* Role — fade + letter-spacing collapse */}
      <p
        className='text-gray-500 text-base sm:text-lg font-bold mt-4'
        style={{
          opacity: step >= 2 ? 1 : 0,
          letterSpacing: step >= 2 ? '0em' : '0.3em',
          transition: 'opacity 0.6s ease, letter-spacing 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        Frontend Developer
      </p>

      {/* Bio — fade up */}
      <p
        className='text-gray-500 w-full sm:w-4/5 lg:w-3/4 mt-4 text-sm sm:text-base leading-relaxed'
        style={{
          opacity: step >= 3 ? 1 : 0,
          transform: step >= 3 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        I focus on building modern digital experiences with clarity and usability at the core.
        Ideas are turned into simple, elegant, and user-friendly solutions. Strong attention is
        given to detail, design, and smooth interaction.
      </p>

      {/* Buttons — scale up from center */}
      <div
        className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4'
        style={{
          opacity: step >= 4 ? 1 : 0,
          transform: step >= 4 ? 'scale(1)' : 'scale(0.92)',
          transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <button
          onClick={() => window.open('https://github.com/tithy-ghosh', '_blank', 'noopener,noreferrer')}
          className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2.5 uppercase text-sm
            hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#06B6D4]
            hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
            active:scale-95 transition-all duration-300 hover:text-black w-full sm:w-auto text-center'
          style={{ fontFamily: 'ui-rounded' }}
        >
          View My Work
        </button>
        <a
          href="/SHRABONY%20GHOSH%20TITHY.pdf"
          download="SHRABONY GHOSH TITHY.pdf"
          className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2.5 uppercase text-sm
            hover:bg-neutral-400 active:scale-95 transition-all duration-300
            hover:text-black inline-block w-full sm:w-auto text-center'
          style={{ fontFamily: 'ui-rounded' }}
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default HeroLeftContent
