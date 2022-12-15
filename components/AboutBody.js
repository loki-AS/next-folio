import Image from 'next/image'
import React from 'react'
import { myPic } from "../public"
import { motion } from "framer-motion"
import Link from 'next/link'

const AboutBody = () => {
  return (
    <div className='flex flex-col mt-10'>
      <div>
      <div className='absolute right-0 sm:px-16 px-6'>
        <Image src={myPic} alt="mypic" height={250} width={250} />
      </div>
      <div className='pt-32'>
        <motion.h1 
            initial={{
              y:500,
              opacity:0,
              scale:0.5,
          }}
          animate={{
              y:0,
              opacity:1,
              scale:1
          }}
          transition={{
              duration: 1.5
          }}
        className='text-[5rem] uppercase font-cormorant tracking-[2px]'>
        About
        </motion.h1>

        <motion.h1 
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
        className='text-3xl font-cormorant tracking-[1px] font-semibold '>I'm Lohith. A designer, maker and problem solver.</motion.h1>

        <p className='py-3 pt-6 text-md leading-10 text-gray-700 font-poppins'>I'm a front-end web developer with over a years' of experience. I work to create high performance & rich interactive websites that work across all platforms & devices.</p>

        <p className='py-3 pt-6 text-md leading-10 text-gray-700 font-poppins'>Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, React Js & JavaScript. With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</p>
        </div>

        <div>
          <p className='py-3 pt-6 text-md leading-10 text-gray-700 font-poppins'>One of my favourite quote :</p>

          <h1 className='text-[3rem] font-cormorant tracking-[2px] font-semibold leading-20'>“A dream does not become reality through magic, it takes sweat, determination, and hard work.”</h1>
        </div>

        <div>
          <h1 className='text-3xl uppercase font-cormorant tracking-[2px] py-6'>Skills</h1>
          <div
          className='font-poppins text-md tracking-[1px] text-gray-700 leading-10 px-4'>
            <p>- HTML</p>
            <p>- CSS</p>
            <p>- JavaScript</p>
            <p>- React JS</p>
            <p>- Next JS</p>
            <p>- Redux</p>
            <p>- Node JS</p>
            <p>- Mongo DB</p>
            <p>- SQL</p>
            <p>- Sanity</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center py-6'>
          <button className='bg-[#1a1818] text-[#eee7e1] text-xl px-4 py-2 tracking-[2px] font-poppins rounded-full w-[10rem] mb-5 md:mb-0 hover:scale-110 '>My CV</button>
          <button className='bg-[#1a1818] text-[#eee7e1] text-xl px-4 py-2 tracking-[2px] font-poppins rounded-full mb-5 md:mb-0 hover:scale-110 '><Link href="/contact">Contact Me</Link></button>
        </div>
      </div>
    </div>
  )
}

export default AboutBody