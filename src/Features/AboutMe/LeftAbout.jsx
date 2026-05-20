import { useInView } from '../../hooks/useInView'

const LeftAbout = () => {
  const [ref, visible] = useInView(0.15)

  return (
    <div ref={ref} className='bg-[#0a0a0f] jetbrains-font px-4 sm:px-10 py-4 w-full flex flex-col h-full'>

      {/* Heading — wipe in from bottom with skew */}
      <div style={{ overflow: 'hidden' }}>
        <h1
          className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) skewY(0deg)' : 'translateY(100%) skewY(4deg)',
            transition: 'opacity 0.7s ease 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s',
          }}
        >
          The dev behind <br />
          <span className='text-font italic'>the commits</span>
        </h1>
      </div>

      {/* Bio — fade in with blur */}
      <p
        className='text-sm sm:text-base text-gray-500 mt-4 leading-relaxed mb-5'
        style={{
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(6px)',
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.7s ease 0.2s, filter 0.7s ease 0.2s, transform 0.7s ease 0.2s',
        }}
      >
        Building features is one part of the process, but understanding the purpose behind them
        is what makes the work meaningful. I try to focus on creating experiences that feel natural
        to use and easy to work with over time. It's not just about getting things done, but doing
        them in a way that stays clear and manageable. The goal is to build things that are useful,
        simple, and thoughtful.
      </p>

      {/* Social icons — bounce in one by one */}
      <div className='flex gap-4 pb-4 mt-8 lg:mt-auto'>
        {[
          { href: 'https://github.com/tithy-ghosh', path: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
          { href: 'https://www.linkedin.com/in/shrabony-ghosh-tithy', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
        ].map(({ href, path }, i) => (
          <a
            key={href}
            href={href}
            target="_blank" rel="noopener noreferrer"
            className='w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110'
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
              transition: `opacity 0.5s ease ${0.4 + i * 0.12}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.4 + i * 0.12}s`,
            }}
          >
            <svg className='w-5 h-5 fill-white' viewBox='0 0 24 24'>
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}

export default LeftAbout
