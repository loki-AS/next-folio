import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

const ContactHeader = () => {
  return (
    <div className='flex justify-between items-center py-6 pt-10'>
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
    className='flex'
    >

    <Link href="/">
        <h1 className='px-3 tracking-[3px] text-xs cursor-pointer font-poppins strike-throughtwo'>Home</h1>
    </Link>

    <div className='line ml-5 w-32 bg-[#eee7e1] rounded-sm text-sm' />
    </motion.div>

    <motion.div
        initial={{
            x:10,
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
    <h1 className='tracking-[3px] text-xs font-poppins'>©/2022</h1>
    </motion.div>
  </div>
  )
}

export default ContactHeader