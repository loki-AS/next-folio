import React from 'react'
import WorkHeader from "../../components/WorkHeader"
import { motion } from "framer-motion"
import Image from 'next/image'
import { music } from '../../public'

const Music = () => {
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
        className='py-6 flex justify-center items-end h-96 bg-[#1a1818] text-[#eee7e1] text-[5rem] font-cormorant uppercase px-4'>
        
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
        Music Player
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
            Music player is my first website, which is built using the technologies such as HTML, CSS and JavaScript.
            </motion.h1>
        </div>

        <div className='px-5 pb-10'>
            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700'>role</h1>
            <p className='text-md font-poppins py-4 text-gray-700 tracking-[2px]'>Web Development</p>

            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700 pb-4'>Github</h1>
            <a className='text-md font-poppins py-4 text-gray-700 tracking-[2px] hover:underline' href="https://github.com/loki-AS/js-music-player">https://github.com/loki-AS/js-music-player</a>

            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700 py-4'>URL</h1>
            <a className='text-md font-poppins py-4 text-gray-700 tracking-[2px] hover:underline' href="https://loki-as.github.io/js-music-player/">https://loki-as.github.io/js-music-player/</a>
        </div>

        <div className='relative pb-6'>
            <Image src={music} alt="music" className='rounded-xl'  />
        </div>
    </div>
  )
}

export default Music