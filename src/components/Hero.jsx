import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex flex-col bg-[#097855] pt-2 pb-2 h-[47vh] sm:h-[70vh] overflow-hidden'>
        {/* image */}
        <div className='w-full h-[50%] bg-red-700'>
            
        </div>

        {/* text */}
        <div className='flex w-full h-[50%] flex-col items-center justify-center pt-[90px] pb-[90px] sm:p-[60px] p-[25px] text-white'>
            <div className='flex flex-1 flex-col items-center justify-center sm:max-w-[90%] text-center'>
                <h1 className='sm:mb-6 mb-2 font-bold text-[1.1rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem]'>WELCOME TO THE ALUMINI ASSOCIATION GCOEA</h1>
                <div className='gap-4'>
                 <p className='leading-relaxed gap-4 text-[0.8rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>A registered body of the Alumini members of the Government College of Engineering in Amravati where you connect with fellow members and experience the growing spirit of GCOEA</p>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
