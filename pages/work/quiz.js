import React from 'react'
import WorkHeader from "../../components/WorkHeader"
import { motion } from "framer-motion"

const Quiz = () => {
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
        Quiz App
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
            This mobile application is used to test your random Quiz skills. This application consits of 10 questions, the user needed to answer all the questions and their result for the 10 questions is displayed at the end. 
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
            Quiz App is built using the technologies such as React Native, Trivia API
            </motion.h1>
        </div>

        <div className='px-5 pb-10'>
            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700'>role</h1>
            <p className='text-md font-poppins py-4 text-gray-700 tracking-[2px]'>Android Development</p>

            <h1 className='uppercase text-lg font-poppins tracking-[2px] underline font-medium text-gray-700 pb-4'>Github</h1>
            <a className='text-md font-poppins py-4 text-gray-700 tracking-[2px] hover:underline' href="https://github.com/loki-AS/Quiz_native">https://github.com/loki-AS/Quiz_native</a>

        </div>

    </div>
  )
}

export default Quiz