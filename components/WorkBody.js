import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const WorkBody = () => {
  return (
    <div className='w-full h-full  grid md:grid-flow-col gap-6'>
        <motion.div 
        className='pt-5 md:mt-28'
        initial={{
            y:200,
            opacity:0,
            scale:0.5
          }}
          animate={{
            y:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration: 1.5
          }} 
        >
            <h1 className='uppercase text-md font-poppins tracking-[1px]'>Work</h1>
            <p className='py-7 font-poppins tracking-[1px] leading-8'>This is a showcase of my best work in a variety of fields, from Web Design to Web Development and management</p>
            <p className='py-5 font-poppins tracking-[1px] leading-8'>The world of Digital Design has grown at an extremely rapid rate over the last 10 years and my aim has been to evolve with it. I&apos;m learning and gaining new skills every day.</p>
        </motion.div>
        <div>
            <Link href="/work/music">
            <h1 className='text-[2rem] md:text-[4rem] py-3 uppercase font-cormorant tracking-[1px] strike-throughtwo'>
            Music Player
            </h1>
            </Link>

            <Link href="/work/restaurant">
            <h1 className='text-[2rem] py-3 md:text-[4rem] uppercase font-cormorant tracking-[1px]'>
            Restaurant
            </h1>
            </Link>

            <Link href="">
            <h1 className='text-[2rem] md:text-[4rem] py-3 uppercase font-cormorant tracking-[1px]'>
            News App
            </h1>
            </Link>

            <Link href="">
            <h1 className='text-[2rem] md:text-[4rem] py-3 uppercase font-cormorant tracking-[1px]'>
            Portfolio Website
            </h1>
            </Link>

            <Link href="">
            <h1 className='text-[2rem] md:text-[4rem] py-3 uppercase font-cormorant tracking-[1px]'>
            Quiz App
            </h1>
            </Link>

            <Link href="">
            <h1 className='text-[2rem] md:text-[4rem] py-3 uppercase font-cormorant tracking-[1px]'>
            Recipe App
            </h1>
            </Link>

            <Link href="">
            <h1 className='text-[2rem] md:text-[4rem] py-3 uppercase font-cormorant tracking-[1px]'>
            Pokemon Cards
            </h1>
            </Link>
        </div>
    </div>
  )
}

export default WorkBody