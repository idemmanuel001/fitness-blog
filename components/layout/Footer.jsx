import React from 'react';
import Image from 'next/image';


const Footer = () => {

  return (
    <footer className="w-full h-fit">
      <div className="flex flex-col justify-center items-center px-4 py-6 w-full bg-clear-day">
        <div className="w-11/12 h-full max-w-lg flex flex-col justify-center items-center">
          <h2 className="mb-2 font-bold text-center text-raisin-black">
            SUBSCRIBE AND DON'T MISS NEW ARTICLES
          </h2>

          <p className="text-center text-sm w-11/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque sint
            quo nemo pariatur
            expedita nulla maiores tempore, perspiciatis debitis. Similique.
          </p>
        </div>

        {/* subscribtion form */}

        <div className="flex items-center w-full justify-center">

          <form 
          className='flex flex-col w-full max-w-lg  md:flex-row items-center justify-center my-6 '
          >
            <div className="flex flex-col w-11/12 mb-3 md:mb-0 items-start md:mr-4 ">
              <input 
                className='bg-white md:w-32 w-full text-dark-gray p-3 text-sm  md:py-1 md:px-1.5 shadow-inner'
                type="text"
                name="name"
                width={20}
                id="name"
                placeholder="Name"
                required />
            </div>
            <div className="flex flex-col w-11/12 mb-3 md:mb-0 items-start md:mr-4 ">
              <input
                className='bg-white w-full md:w-52 text-dark-gray p-3 md:py-1 md:px-1.5 text-sm shadow-inner'
                type="email"
                name="email"
                width={40}
                id="email"
                placeholder="Email"
                required />
            </div>

            <button 
            className='md:py-1 p-3 md:px-3 w-11/12 bg-dark-green text-white text-sm font-semibold '
            type="submit">
              SEND
            </button>
          </form>
        </div>

        
      </div>
      <div className="flex justify-center items-center h-fit py-4 bg-raisin-black text-lavender ">
         <p className="text-center text-sm py-4 font-semibold md:px-4">
          Built by Idoko Emmanuel, 2022. All rights reserved.
         </p>
        </div>
    </footer>
  );
};

export default Footer;