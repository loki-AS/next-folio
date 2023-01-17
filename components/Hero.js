import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div 
    className="w-full h-screen grid md:grid-flow-col gap-6 pt-20 px-10"
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

    className="flex flex-col md:justify-center md:text-start"
    >
      <h1 className='uppercase tracking-[3px] font-poppins py-3 font-semibold hover:underline'>Hi, I&apos;m Lohith kumar</h1>
      <p className='tracking-[1px] text-sm font-poppins py-3 opacity-75 leading-8 '>Strategic Product Designer, Webflow Developer, frontend Developer and Application Developer</p>
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
    className='text-[4.5rem] md:text-[8rem] py-0 uppercase ml-0 md:ml-10 flex flex-col md:justify-center md:text-start'>
      <Link href="/work"> <h1 className='font-dancing hover:scale-105 hover:animate-pulse animate-pulse'>Work</h1> </Link>
      <Link href="/about"> <h1 className='font-dancing hover:scale-105 hover:animate-pulse'>About</h1> </Link>
      <Link href="/contact"> <h1 className='font-dancing hover:scale-105 hover:animate-pulse'>Contact</h1> </Link>
    </motion.div>
  </div>
  )
}

export default Hero