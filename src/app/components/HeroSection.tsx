import React from 'react'
import Image from "next/image"
import Button from './Button'
function HeroSection() {
  return (
    <div  className='flex flex-col m-0 pt-5 md:pt-20 md:mt-0 mb-10 md:mb-5 md:flex-row'>
        <div className='md:m-10 lg:w-full lg:h-full '>

        <Image src="/images/developer.webp" alt="image" width="350" height="350"
        className='col-span-5 place-self-center lg:w-[500px] lg:h-[450px] rounded-full  hover:animate-bounce'/>
  </div>
  <div className='md:m-4 md:p-4' >
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-blue-500 font-semibold mb-3 mt-10 text-4xl md:text-4xl font-serif hover:animate-pulse'>Hi I am </h1> 
 
         
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-blue-500 font-semibold mb-3 mt-10 text-4xl md:text-6xl font-serif hover:animate-pulse'> ERUM WARIS</span>
        <br />
        <h2 className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-600 to-purple-500 font-semibold mt-6 md:mt-5 text-2xl md:text-4xl font-serif hover:animate-bounce">I am a Passionate Learner As a Next js enthusiast I focus on fast scalable and efficient websites</h2>

        <Button text="Hire Me" />
        </div>
    </div>
  )
}

export default HeroSection