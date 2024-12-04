import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
 
function Social() {
  return (
    <>
     <div className='flex gap-8 cursor-pointer'>
        <FaGithub className='size-[20px] text-blue-800'/> 
        <FaInstagramSquare className='size-[20px] text-blue-800'/>  
        <FaLinkedin className='size-[20px] text-blue-800'/>
        <BsTwitterX className='size-[20px] text-blue-800'/>
     </div>
    </>
  )
}

export default Social