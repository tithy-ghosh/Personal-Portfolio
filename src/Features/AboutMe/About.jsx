import LeftAbout from './LeftAbout'
import SectionDivide from '../../Components/SectionDivide'
import VerticalLine from '../../Components/VerticalLine'
import RightAbout from './RightAbout'
import { useInView } from '../../hooks/useInView'

const About = () => {
  const [headerRef, headerVisible] = useInView(0.2)
  const [leftRef, leftVisible]     = useInView(0.15)
  const [rightRef, rightVisible]   = useInView(0.15)

  return (
    <div id='about' className='w-full min-h-screen bg-[#0a0a0f] flex flex-col gap-10 py-10'>

      {/* Section label */}
      <div
        ref={headerRef}
        className='px-4 sm:px-10 w-full'
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className='flex items-center gap-2 mb-5'>
          <span className='w-5 h-[1px] bg-[#8b5cf6] inline-block' />
          <span className='text-[11px] tracking-[0.15em] uppercase text-[#8b5cf6]' style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            About Me
          </span>
        </div>
      </div>

      <SectionDivide />

      <div className='flex flex-col lg:flex-row items-stretch px-4 sm:px-10 gap-6' style={{ alignItems: 'stretch' }}>

        {/* Left — slides in from left */}
        <div
          ref={leftRef}
          className='flex-1'
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <LeftAbout />
        </div>

        <div className='hidden lg:flex'>
          <VerticalLine />
        </div>

        {/* Right — slides in from right */}
        <div
          ref={rightRef}
          className='flex-1'
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <RightAbout />
        </div>

      </div>
      <SectionDivide />
    </div>
  )
}

export default About
