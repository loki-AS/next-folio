import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div 
    className='flex md:flex-row flex-col mt-10 h-screen justify-center items-center'
    >
    <motion.div
    initial={{
        x:-500,
        opacity: 0,
        scale:0.5
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5,
    }}
    >
      <h1 className='uppercase tracking-[3px] font-poppins py-3 font-semibold'>Lohith kumar</h1>
      <p className='tracking-[1px] text-sm font-poppins py-3 opacity-75 '>Strategic Product Designer and Webflow Developer</p>
      <p className='text-sm font-poppins tracking-[1px] py-3 opacity-75'>Currently working as a Senior Product Designer at Detail Technologies</p>
    </motion.div>
    <motion.div 
    initial={{
        x:500,
        opacity:0,
        scale:0.5,
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration: 1.5
    }}
    className='text-[4.5rem] md:text-[7rem] py-0 uppercase ml-0 md:ml-10'>
      <Link href="/work"> <h1 className='font-cormorant strike-through'>Work</h1> </Link>
      <Link href="/about"> <h1 className='font-cormorant strike-through'>About</h1> </Link>
      <Link href="/contact"> <h1 className='font-cormorant strike-through'>Contact</h1> </Link>
    </motion.div>
  </div>
  )
}

export default Hero