import React from 'react'
import ContactHeader from "../../components/ContactHeader"
import WorkBody from "../../components/WorkBody"

const Work = () => {
  return (
    <div className='bg-[#1a1818] text-[#eee7e1] h-full w-full sm:px-16 px-6'>
    
    <div className='py-10 pt-5'>
     <ContactHeader />   
    </div>

    <WorkBody />
    </div>
  )
}

export default Work