import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='flex justify-center items-center bg-[#6c86f9] w-full sm:h-[80vh] h-[60vh]'>
        <div className='bg-white w-[80%]
        sm:h-[60vh] h-[45vh] rounded-[25px] flex'>
          <div className='w-[50%] h-full bg-[#ccd4f7] rounded-l-[25px]'>

          </div>

          <div className='w-[50%] h-full rounded-l-[25px] flex flex-col justify-center items-center sm:p-7 p-2'>
            <h1 className='text-[#3f37c9] font-bold sm:text-[1.7rem] text-[1.1rem]'>Student Login</h1>
            <p className='sm:text-[0.7rem] text-[0.6rem] font-bold'>Enter your details here.</p>

            <input type="email" name="email" id="" placeholder='Enter your username/email' className='input sm:mt-6 mt-2 sm:text-[0.7rem] text-[0.6rem]' />

            <input type="password" name="email" id="" placeholder='Enter your password' className='input sm:mt-2 mt-1 sm:text-[0.7rem] text-[0.6rem]' />

            <div className='flex flex-col sm:m-4 m-2 w-[75%] sm:p-4 p-2'>
              <p className='sm:text-[0.7rem] text-[0.6rem]'>Having trouble in sign in?</p>
              <button className='bg-[#3f37c9] text-white sm:mt-3 mt-1 pt-1 pb-1 rounded-[7px] font-bold text-[0.8rem] sm:text-[1.2rem]' >Login In</button>
            </div>

            <p className='sm:text-[0.7rem] text-[0.6rem] font-bold'>Or Sign in with</p>
            <div className='flex justify-evenly w-full sm:m-2 m-1'>
              <button className='but2'>Google</button>
              <button className='but2'>Facebook</button>
            </div>

            <p className='text-[0.7rem] m-1'>Don't have an account? <a className='text-[#3f37c9] font-bold' href="">Sign up Now</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

