import React from 'react'

function Button({name}) {
  return (
    <>
        <button className='bg-blue-800 text-white px-24 py-2 text-[18px] font-medium rounded-md cursor-pointer'>{name}</button>
    </>
  )
}

export default Button