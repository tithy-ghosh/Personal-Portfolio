import React from 'react'

const Navbar = () => {
  return (
    <nav className='jetbrains-mono-font fixed inset-x-0 top-0 left-0 right-0 z-50 px-10 py-4 bg-black opacity-50'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <div className='text-white flex flex-row gap-3 items-center'>
                <a href="#" className='text-2xl uppercase'style={{fontFamily: 'fantasy'}}>
                    Ti
                    <span className='text-font'>t</span>
                    h
                    <span className='text-font'>y</span>
                </a>
                <p className='text-4xl'> | </p>
                <div>
                    <a href="#" className='text-md text-font uppercase leading-snug'>Frontend<br />Developer</a></div>
                
            </div>
            <ul className='flex border border-l text-white/50 gap-4 px-6 py-2 rounded-2xl shadow-sm hover:shadow-[#8B5CF6]'>
                <li className='hover:text-[#06B6D4] transition-colors duration-200'>
                    <a href="#home">Home</a>
                    </li>
                <li className='hover:text-[#06B6D4] transition-colors duration-200'>
                    <a href="#about">About</a>
                    </li>
                <li className='hover:text-[#06B6D4] transition-colors duration-200'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='hover:text-[#06B6D4] transition-colors duration-200'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='hover:text-[#06B6D4] transition-colors duration-200'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div>
                <button 
                        className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2 uppercase 
                        shadow-sm hover:shadow-[#8B5CF6]
                        hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#06B6D4]
                        hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                        active:scale-95 hover:-translate-y-1.5 
                        transition-all duration-300 hover:text-black'
                        style={{fontFamily: 'ui-rounded'}}
                        >
                        Hire Me
                    </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
