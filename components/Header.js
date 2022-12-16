import React from 'react'
import { motion } from "framer-motion"

const Header = () => {

    const year = new Date()
    
  return (
    <div className='flex justify-between items-center py-3 pt-10'>
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
    <h1 className='px-3 tracking-[3px] text-xs cursor-pointer font-poppins'><span className='strike-through'>LI</span></h1>
    <h1 className='px-4 tracking-[3px] text-xs cursor-pointer font-poppins'><span className='strike-through'>TW</span></h1>
    <h1 className='px-4 tracking-[3px] text-xs cursor-pointer font-poppins'><a href="https://github.com/loki-AS"  className='strike-through'>GH</a></h1>
    <div className='line w-28 bg-black rounded-sm text-sm' />
    </motion.div>

    <motion.div
        initial={{
            x:50,
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
    <h1 className='tracking-[3px] text-xs font-poppins'>©/{year.getFullYear()}</h1>
    </motion.div>
  </div>
  )
}

export default Header