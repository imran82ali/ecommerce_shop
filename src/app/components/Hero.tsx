'use client'

import Image from 'next/image'
import React from 'react'
import heroimage from '../../../public/heroimage.avif'
import { motion } from 'framer-motion'

const variants = {
  hidden : {x:0,y:70,opacity:0.25},
  visible:{x:0,y:-10,opacity:1,transition:{delay:0.05}},
}

const Hero = () => {
  return (
    <div className='w-full h-[600px] flex item-center px-4'>
        <div className='h-full md:max-w-[1024px] maw-w-[600px] m-auto flex'>
        <div >
            <h1 className="leading-7 mt-6
      bg-gradient-to-r from-pink-900 to-pink-400 hover:text-pink-500
      bg-clip-text text-transparent md:leading-loose
      md:text-6xl text-2xl " >
            The ultimate shopping experience
            </h1>
          </div>
          <motion.div
          initial ='hidden'
          animate='visible'
          variants={variants}
          > 
            <div className='max-h-[300px] object-cover'>
                <Image src={heroimage} 
                alt="Hero Image"
                width={2000}
                height={600}
              

                /> 

            </div>
            </motion.div>
         
        </div>
    </div>
  )
}

export default Hero