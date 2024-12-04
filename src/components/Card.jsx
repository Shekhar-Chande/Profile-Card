import React from 'react'
import Profile from '../assets/profile.png'
import Button from './Button'
import Social from './Social'

function Card({name, designation, message}) {
  return (
    <>
        <div className='w-[400px] bg-white flex flex-col justify-center items-center gap-6 pt-8 pb-8 pl-4 pr-4 rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35)]'>
            <img src={Profile} alt="Profile" />
            <div className='flex flex-col items-center'>
                <span className='text-[25px] font-semibold'>{name}</span>
                <span className='text-[18px] text-[#525252]'>{designation}</span>
            </div>
             <div className='text-center text-[20px]  text-[#525252]'>
                <span>{message}</span>
            </div>
            <div className='w-[80%]'>
                <Button name="Contact Me"/>
            </div>
            <div>
                <Social />
            </div>
        </div>
    
    </>
  )
}

export default Card