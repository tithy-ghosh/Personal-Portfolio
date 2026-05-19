import React from 'react'

const HeroLeftContent = () => {
  return (
    <div className='sora-font'>
          <h1 className='text-[#E5E7EB] text-7xl font-extrabold'>
              Hi Iam 
              <span className='text-font'> Shrabony <br />
               Ghosh Tithy ...
               </span>
      </h1>
            <p className='text-gray-500 text-xl font-bold mt-4'>Frontend Developer
            </p>
            <p className='text-gray-500 w-3/4 mt-4'>I focus on building modern digital experiences with clarity and usability at the core.Ideas are turned into simple, elegant, and user-friendly solutions. Strong attention is given to detail, design, and smooth interaction. The goal is to create web experiences that feel intuitive and effective.
            </p>
            <div className='mt-3 flex gap-4'>
               <button 
                        className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2 uppercase 
                        shadow-sm hover:shadow-[#8B5CF6]
                        hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#06B6D4]
                        hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                        active:scale-95  
                        transition-all duration-300 hover:text-black'
                        style={{fontFamily: 'ui-rounded'}}
                        >
                       View My Work
                    </button>
                    <button 
                        className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2 uppercase 
                        shadow-sm hover:shadow-[#8B5CF6]
                        hover:bg-neutral-400
                        active:scale-95  
                        transition-all duration-300 hover:text-black'
                        style={{fontFamily: 'ui-rounded'}}
                        >
                        Download Resume
                    </button>
            </div>
    </div>
  )
}

export default HeroLeftContent
