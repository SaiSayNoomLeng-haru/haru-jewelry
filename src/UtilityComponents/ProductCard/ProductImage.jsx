import React from 'react'

export default function Image() {
  return (
    <div className='overflow-hidden relative'>
        <img 
          src="/assets/images/sample.png" 
          alt="" 
          loading='lazy'
          className='max-w-[200px] scale-75 hover:scale-125 hover:rotate-45 transition-all cursor-pointer'/>
        <div className='absolute left-2 top-0 bg-custom-pale-red text-white text-fs-200 py-3 rounded-bl-lg rounded-br-lg px-1'>
          10%
        </div>
    </div>
  )
}
