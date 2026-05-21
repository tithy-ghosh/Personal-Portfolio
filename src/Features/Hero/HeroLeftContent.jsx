import { useEffect, useState, useRef, useCallback } from 'react'

/* ── Magnetic button wrapper ── */
function MagneticBtn({ children, className, style, onClick, as: Tag = 'button', href, download, target, rel }) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width  / 2) * 0.28
    const y = (e.clientY - rect.top  - rect.height / 2) * 0.28
    ref.current.style.transform  = `translate(${x}px, ${y}px)`
    ref.current.style.transition = 'transform 0.08s ease'
  }, [])

  const onLeave = useCallback(() => {
    ref.current.style.transform  = 'translate(0, 0)'
    ref.current.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)'
  }, [])

  const props = {
    ref,
    onMouseMove:  onMove,
    onMouseLeave: onLeave,
    className:    `magnetic-btn ${className ?? ''}`,
    style,
    onClick,
  }

  if (Tag === 'a') {
    return <a {...props} href={href} download={download} target={target} rel={rel}>{children}</a>
  }
  return <button {...props}>{children}</button>
}

/* ── Word-level reveal — safe for gradient text ── */
function GradientWordReveal({ words, visible, delayBase = 0 }) {
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display:             'inline-block',
            background:          'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip:      'text',
            opacity:             visible ? 1 : 0,
            transform:           visible ? 'translateY(0)' : 'translateY(22px)',
            transition:          `opacity 0.5s ease ${delayBase + i * 110}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delayBase + i * 110}ms`,
            marginRight:         i < words.length - 1 ? '0.28em' : '0',
          }}
        >
          {word}
        </span>
      ))}
    </>
  )
}

/* ── Main component ── */
const HeroLeftContent = () => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const delays = [80, 320, 560, 820]
    const timers = delays.map((d, i) => setTimeout(() => setStep(i + 1), d))
    return () => timers.forEach(clearTimeout)
  }, [])

  const ready = step >= 1

  return (
    <div className='sora-font w-full lg:max-w-[55%]'>

      {/* ── Heading ── */}
      <h1 className='text-[#E5E7EB] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight'>

        {/* "Hi I'm" — slides from left */}
        <span
          style={{
            display:    'inline-block',
            opacity:    ready ? 1 : 0,
            transform:  ready ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'opacity 0.6s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Hi I'm
        </span>

        {/* Gradient name — word-by-word reveal on its own line */}
        <span style={{ display: 'block', marginTop: '0.05em' }}>
          <GradientWordReveal
            words={['Shrabony', 'Ghosh', 'Tithy', '...']}
            visible={step >= 1}
            delayBase={180}
          />
        </span>
      </h1>

      {/* ── Role ── */}
      <p
        className='text-gray-500 text-base sm:text-lg font-bold mt-4'
        style={{
          opacity:       step >= 2 ? 1 : 0,
          letterSpacing: step >= 2 ? '0.06em' : '0.35em',
          transition:    'opacity 0.6s ease 0.1s, letter-spacing 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}
      >
        Frontend Developer
      </p>

      {/* ── Bio ── */}
      <p
        className='text-gray-500 w-full sm:w-4/5 lg:w-3/4 mt-4 text-sm sm:text-base leading-relaxed'
        style={{
          opacity:    step >= 3 ? 1 : 0,
          transform:  step >= 3 ? 'translateY(0)' : 'translateY(20px)',
          filter:     step >= 3 ? 'blur(0px)' : 'blur(4px)',
          transition: 'opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s, filter 0.7s ease 0.05s',
        }}
      >
        I focus on building modern digital experiences with clarity and usability at the core.
        Ideas are turned into simple, elegant, and user-friendly solutions. Strong attention is
        given to detail, design, and smooth interaction.
      </p>

      {/* ── Buttons ── */}
      <div
        className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4'
        style={{
          opacity:    step >= 4 ? 1 : 0,
          transform:  step >= 4 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <MagneticBtn
          onClick={() => window.open('https://github.com/tithy-ghosh', '_blank', 'noopener,noreferrer')}
          className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2.5 uppercase text-sm
            hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#06B6D4]
            hover:shadow-[0_0_24px_rgba(139,92,246,0.55)]
            active:scale-95 transition-colors duration-300 hover:text-black w-full sm:w-auto text-center'
          style={{ fontFamily: 'ui-rounded' }}
        >
          View My Work
        </MagneticBtn>

        <MagneticBtn
          as="a"
          href="/SHRABONY%20GHOSH%20TITHY.pdf"
          download="SHRABONY GHOSH TITHY.pdf"
          className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2.5 uppercase text-sm
            hover:bg-neutral-400 active:scale-95 transition-all duration-300
            hover:text-black w-full sm:w-auto text-center'
          style={{ fontFamily: 'ui-rounded' }}
        >
          Download Resume
        </MagneticBtn>
      </div>
    </div>
  )
}

export default HeroLeftContent