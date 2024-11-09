import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-[#00ab7b] p-[12px] pb-0 items-center w-full ">
        <div className="flex justify-between w-full">
          {/* image */}
          <div className="flex basis-[90%]">
            <img
              src="src\assets\college_logo.png"
              alt=""
              className="w-[70px] h-[70px] mr-1 sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] xl:w-[120px] xl:h-[120px] sm:mr-2"
            />

            {/* text */}
            <div className="sm:text-[1rem]">
              <h1 className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem] font-bold">
                GCoEA AMRAVATI - ALUMINI ASSOCIATION
              </h1>
              <h2 className="text-red-600 text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem]">
                GOVERNMENT COLLEGE OF ENGINEERING, AMRAVATI
              </h2>
            </div>

            {/* buttons */}
          </div>
          <div className="flex basis-[10%] relative align-baseline items-end mb-2">
            <button className="but sm:text-[0.9rem] md:text-[1.1rem]">
              REGISTER
            </button>
            <button className="but sm:text-[0.9rem] md:text-[1.1rem]">
              LOGIN
            </button>
          </div>
    

        </div>

        {/* navigation menu */}
        <div className="sm:w-[70%] w-[95%]  p-2 bg-zinc-200 mt-3 rounded-t-[4px]">
          <ul className="flex justify-around font-semibold text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] ">
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">ALUMINI FUNDS</a>
            </li>
            <li>
              <a href="">ACHIEVERS</a>
            </li>
            <li>
              <a href="">NEWSROOM</a>
            </li>
            <li>
              <a href="">MORE</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
