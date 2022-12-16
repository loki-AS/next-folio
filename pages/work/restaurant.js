import React from 'react'
import WorkHeader from "../../components/WorkHeader"
import { motion } from "framer-motion"
import Image from 'next/image'
import { cook } from '../../public'

const Restaurent = () => {
  return (
    <div className='bg-[#eee7e1] h-full w-full sm:px-16 px-6'>
        <WorkHeader />

        <motion.div
            initial={{
                y:-500,
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
        className='py-6 flex justify-center items-end h-96 bg-[#1a1818] text-[#eee7e1] text-[3rem] md:text-[5rem] font-cormorant uppercase px-4'>
        
        <motion.h1
        initial={{
            y:500,
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
        restaurant
        </motion.h1>

        </motion.div>

        <div className='py-10'>
            <motion.h1 
            initial={{
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
            className='px-5 text-2xl font-poppins text-gray-700 tracking-[1px] leading-10'>
            This Restaurant page is used to display their unique foods that served in their restaurant and the photo gallery of the food they serve.
            </motion.h1>
        </div>        

        <div className='py-10'>
            <motion.h1 
            initial={{
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
            className='px-5 text-2xl font-poppins text-gray-700 tracking-[1px] leading-10'>
            Modern restaurant landing page built using the technologies such as React JS and Tailwind CSS.
            </motion.h1>
        </div>

        <div className='px-5 pb-10'>
            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700'>role</h1>
            <p className='text-md font-poppins py-4 text-gray-700 tracking-[2px]'>Web Development</p>

            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700 pb-4'>Github</h1>
            <a className='text-md font-poppins py-4 text-gray-700 tracking-[2px] hover:underline' href="https://github.com/loki-AS/restaurant-landing-page">https://github.com/loki-AS/restaurant-landing-page</a>

            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700 py-4'>URL</h1>
            <a className='text-md font-poppins py-4 text-gray-700 tracking-[2px] hover:underline' href="https://foodie11.netlify.app/">https://foodie11.netlify.app/</a>
        </div>

        <div className='relative pb-6'>
            <Image src={cook} alt="cook" className='rounded-xl'  />
        </div>
    </div>
  )
}

export default Restaurent