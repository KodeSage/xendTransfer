import React from 'react';
import Link from 'next/link';
import { AiFillPlayCircle } from "react-icons/ai";

export default function hero() {
  return (
      <div id="home">
          <div className='Container'>
              <div className="flex mf:flex-row flex-col items-start justify-between md:p-12 py-12 px-4">
                  <div className="flex-1 flex flex-col justify-start items-start ">
                      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Send Crypto with XendTransfer<br /> across africa</h1>
                      <p className="text-white text-left w-11/12 mt-5 font-light md:w-9/12 text-base">
                          Transfer crypto to anybody in the world
                      </p>
                      <Link href="/getstarted">
                       <button
                          type="button"
                          className="flex flex-row justify-center items-center my-5 bg-[#d65f22] hover:bg-[#3309dd] p-3 rounded-full cursor-pointer"
                      >
                          <AiFillPlayCircle className="text-white mr-2" />
                          <p className="text-white text-base font-semibold">Get Started </p>
                          </button> 
                      </Link>
                  </div>
                  <div>
                      <div className="hero_image">
                          <img src="/fg.png" alt="xendlogo" className="img_b"/>
                      </div>
                  </div>
                </div>  
          </div>
         
      </div>
  )
}
