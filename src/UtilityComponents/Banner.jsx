import classNames from 'classnames'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { LuPackageOpen } from 'react-icons/lu'
import { MdOutlineCreditCard } from 'react-icons/md'

export default function Banner() {

    const bannerClass = classNames(
        'flex flex-col items-center justify-center md:flex-row md:max-w-[80%] mx-auto gap-5'
    )

    const banner = classNames(
        'flex items-center gap-3'
    )
  return (
    <div className={bannerClass}>
        <div className={banner}>
            <div className='relative'>
                <LuPackageOpen 
                    className='text-fs-700 relative z-10'
                />
                <div className='absolute bottom-[-5px] right-[-10px] w-14 aspect-square rounded-full bg-custom-dark-orange opacity-55'>
                </div>
            </div>
            <div>
                <p className="font-semibold">Free Shipping</p>
                <p className='text-fs-200 opacity-80'>Free shipping for order above $100</p>
            </div>
        </div>

        <div className={banner}>
            <div className='relative'>
                <MdOutlineCreditCard 
                    className='text-fs-700 relative z-10'
                />
                <div className='absolute bottom-[-5px] right-[-10px] w-14 aspect-square rounded-full bg-custom-dark-orange opacity-55'>
                </div>
            </div>
            <div>
                <p className="font-semibold">24/7 Support</p>
                <p className='text-fs-200 opacity-80'>Free shipping for order above $100</p>
            </div>
        </div>

        <div className={banner}>
            <div className='relative'>
                <BiSupport 
                    className='text-fs-700 relative z-10'
                />
                <div className='absolute bottom-[-5px] right-[-10px] w-14 aspect-square rounded-full bg-custom-dark-orange opacity-55'>
                </div>
            </div>
            <div>
                <p className="font-semibold">24/7 Support</p>
                <p className='text-fs-200 opacity-80'>Free shipping for order above $100</p>
            </div>
        </div>


    </div>
  )
}
