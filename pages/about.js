import React from 'react'
import { motion } from "framer-motion"
import AboutHeader from '../components/AboutHeader'
import AboutBody from '../components/AboutBody'

const About = () => {
  return (
    <div className='bg-[#eee7e1] h-full w-full sm:px-16 px-6' >
        <AboutHeader />
        <AboutBody />
    </div>
  )
}

export default About