import React from 'react'
import ContactHeader from '../components/ContactHeader'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='bg-[#1a1818] text-[#eee7e1] h-full w-full sm:px-16 px-6'>
      <ContactHeader />
      <div className='h-screen flex flex-col justify-start items-start pt-6'>
        <motion.h1 
        initial={{
          y:500,
          opacity: 0,
          scale:0.5
      }}
      animate={{
          y: 0,
          opacity: 1,
          scale: 1
      }}
      transition={{
          duration: 1.5,
      }}
        className='text-[7rem] md:text-[13rem] font-cormorant tracking-[1px]'
        >
        Hello.
        </motion.h1>
        <motion.div
        initial={{
          opacity:0,
          scale:0.5
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        transition={{
          duration: 1.5
        }}        
        >
          <p className='text-sm md:text-md font-poppins tracking-[2px] leading-7 py-3'>I can help design and build you next website.Let me know what you need?</p>
          <p className='text-sm md:text-md font-poppins tracking-[2px] leading-7 py-3'>Email: <a href="mailto:lohithkumar.rajgopal@gmail.com" className='underline hover:no-underline strike-throughtwo text-md md:text-sm'>lohithkumar.rajgopal@gmail.com</a></p>
          <p className='text-sm md:text-md font-poppins tracking-[2px] leading-7'>On the internet: <a href="https://www.linkedin.com/in/lohith-kumar-rajgopal-0360b0253/" className='underline hover:no-underline strike-throughtwo'>LinkedIn</a> / <a href="https://github.com/loki-AS" className='underline hover:no-underline strike-throughtwo'>Github</a></p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact