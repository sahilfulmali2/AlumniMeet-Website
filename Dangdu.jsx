import React from 'react'
 
const Dangdu = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-[30vh] sm:h-[50vh] p-5 sm:p-10'>
        <div className='w-full h-full flex justify-around items-center bg-[#52ba99] text-red-800 font-semibold sm:p-7 p-3'>
            <div className='w-[45%] bg-white h-[100%]'>                
                img
            </div>

            <div className='flex flex-col justify-center items-center w-[55%] sm:max-w-[300px] max-w-[150px]'>           
                <h1 className='sm:text-[3rem] text-[1.2rem] font-bold'>DANGDU</h1>

                <p className='text-[0.8rem] sm:text-[1.1rem] text-center'>ALUMINI MEET OF BATCH 1999 JOIN US TO RELIVE THE COLLEGE MEMORY</p>

                <button className='but text-black sm:text-[0.9rem] mt-3'>REGISTER NOW...</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dangdu
