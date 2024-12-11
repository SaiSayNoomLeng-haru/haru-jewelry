import React from 'react'
import { FaHeart } from 'react-icons/fa'
import Button from '../Button'
import CallToAction from '../CallToAction'


export default function ProductContent() {
  return (
    <div className='flex flex-col gap-1'>
        <p className='font-semibold'>Name</p>
        <p className='font-semibold'>$450</p>
        <div className='flex justify-between gap-2'>
            <CallToAction desc='Product Detail' linkTo='' className='hover:text-custom-pale-red transition-all' />
           
            <Button 
                className='text-fs-400 px-2 flex-none hover:text-custom-pale-red transition-all duration-300'
            >
                <FaHeart />
            </Button>
        </div>
        <Button 
                className=' border border-custom-dark-green text-fs-200 px-2  hover:bg-custom-dark-green hover:text-white transition-all duration-300'
            >Add to Cart
        </Button>
        
    </div>
  )
}
