import { useState, useEffect } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setTimeout(() => setMounted(true), 50) }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className='jetbrains-mono-font fixed inset-x-0 top-0 z-50 px-4 sm:px-10 py-4 bg-black/80 backdrop-blur-sm'
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <div className='text-white flex flex-row gap-3 items-center'>
          <a href="#" className='text-xl sm:text-2xl uppercase' style={{ fontFamily: 'fantasy' }}>
            Ti<span className='text-font'>t</span>h<span className='text-font'>y</span>
          </a>
          <p className='hidden sm:block text-4xl'> | </p>
          <div className='hidden sm:block'>
            <a href="#" className='text-md text-font uppercase leading-snug'>Frontend<br />Developer</a>
          </div>
        </div>

        {/* Desktop nav */}
        <ul className='hidden lg:flex border text-white/50 gap-4 px-6 py-2 rounded-2xl shadow-sm hover:shadow-[#8B5CF6] border-white/10'>
          {['home','about','skills','projects','contact'].map((id, i) => (
            <li key={id} className='hover:text-[#06B6D4] transition-colors duration-200'
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
                transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
              }}
            >
              <button onClick={() => scrollTo(id)} className='bg-transparent border-none cursor-pointer text-inherit capitalize'>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <div className='hidden lg:block'
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.5s ease 0.45s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.45s',
          }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2 uppercase
            hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#06B6D4]
            hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
            active:scale-95 hover:-translate-y-1.5
            transition-all duration-300 hover:text-black text-xs sm:text-sm'
            style={{ fontFamily: 'ui-rounded' }}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer'
          aria-label='Toggle menu'
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='lg:hidden mt-4 flex flex-col items-center gap-3 py-6 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md'>
          {['home','about','skills','projects','contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)}
              className='text-white/70 hover:text-[#06B6D4] text-sm uppercase tracking-wider py-2 bg-transparent border-none cursor-pointer'>
              {id}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2 uppercase text-xs mt-2
              hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#06B6D4] transition-all duration-300 cursor-pointer'
            style={{ fontFamily: 'ui-rounded' }}>
            Hire Me
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
