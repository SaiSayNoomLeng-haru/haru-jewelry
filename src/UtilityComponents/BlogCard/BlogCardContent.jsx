import classNames from 'classnames'
import React from 'react'
import CallToAction from '../CallToAction'

export default function BlogCardContent() {

    const blogCardContentClass = classNames(
        'flex flex-col text-fs-300 items-start'
    )
  return (
    <div className={blogCardContentClass}>
        <p className="font-semibold text-fs-500">
            Title
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ex?
        </p>
        <CallToAction 
            desc='Read More'
            to=''
            className='hover:text-custom-pale-red transition-all' />
    </div>
  )
}
