import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div 
    className="w-full h-full  grid md:grid-flow-col gap-6 pt-20 px-10"
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

    className="flex flex-col md:justify-end md:text-start pb-0 md:pb-32"
    >
      <h1 className='uppercase tracking-[3px] font-poppins py-3 font-semibold hover:underline'>Lohith kumar</h1>
      <p className='tracking-[1px] text-sm font-poppins py-3 opacity-75 '>Strategic Product Designer, Webflow Developer and Application Developer</p>
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
      <Link href="/work"> <h1 className='font-dancing hover:scale-105 hover:animate-pulse'>Work</h1> </Link>
      <Link href="/about"> <h1 className='font-dancing hover:scale-105 hover:animate-pulse'>About</h1> </Link>
      <Link href="/contact"> <h1 className='font-dancing hover:scale-105 hover:animate-pulse'>Contact</h1> </Link>
    </motion.div>
  </div>
  )
}

export default Hero