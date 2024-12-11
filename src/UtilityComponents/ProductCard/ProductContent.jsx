import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import Button from '../Button'
import CallToAction from '../CallToAction'


export default function ProductContent() {
  return (
    <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
            <p className='opacity-50'>Ring</p>
            <p className='flex items-center gap-2'>
                <FaStar  className='text-custom-dark-blue'/>
                4.8
            </p>
        </div>
        <p className='font-semibold'>Name</p>
        <p className='font-semibold'>
            $450 &nbsp;
            <span className='line-through font-normal opacity-50'>$400</span>
        </p>
        <div className='flex gap-2'>
            <Button 
                className=' border border-custom-dark-green text-fs-200 px-2 flex-1 hover:bg-custom-dark-green hover:text-white transition-all duration-300'
            >Add to Cart</Button>
            <Button 
                className=' border border-custom-pale-red text-fs-200 px-2 flex-none hover:bg-custom-pale-red hover:text-custom-dark-orange transition-all duration-300'
            >
                <FaHeart />
            </Button>
        </div>
        <CallToAction desc='Product Detail' linkTo='' className=' hover:border rounded-lg hover:border-custom-dark-orange transition-all' />
    </div>
  )
}
