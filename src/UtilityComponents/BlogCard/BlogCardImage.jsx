import React from 'react'

export default function BlogCardImage() {
  return (
    <div className='relative'>
        <img src="/assets/images/blogs/b001.jpg" 
        alt="" 
        aria-label=''
        loading='lazy'
        className='rounded-sm max-w-[80%] mx-auto'/>
        <div className='absolute bg-custom-pale-red text-right pl-5 bottom-3 rounded-tl-3xl rounded-br-lg rounded-bl-sm text-fs-200 font-semibold text-white px-2'>
            15 dec 2025 
        </div>
    </div>
  )
}
