import Tithy from '../../assets/Tithy.png'
import { useInView } from '../../hooks/useInView'

const RightAbout = () => {
  const [ref, visible] = useInView(0.15)

  return (
    <div className='flex items-center justify-center lg:justify-end px-4 sm:px-0 py-4'>
      {/* Outer — rotates in */}
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'rotate(0deg) scale(1)'
            : 'rotate(-6deg) scale(0.88)',
          transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}
      >
        <div className='relative'>
          {/* Glow — pulses in after image */}
          <div
            className='absolute inset-0 rounded-2xl blur-2xl'
            style={{
              background: 'radial-gradient(circle, #8B5CF6 0%, #06B6D4 100%)',
              opacity: visible ? 0.35 : 0,
              transition: 'opacity 1.2s ease 0.6s',
            }}
          />
          <img
            src={Tithy}
            alt="Shrabony Ghosh Tithy"
            className='relative rounded-2xl w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] object-cover'
            style={{ border: '1px solid rgba(139,92,246,0.25)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default RightAbout
