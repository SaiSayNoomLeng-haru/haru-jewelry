import classNames from 'classnames'
import React from 'react'

export default function Button({className = '', children, ...props}) {

    const buttonClass = classNames(
        'rounded-lg font-semibold py-2', className
    )
  return (
    <button className={buttonClass} {...props}>
        {children}
    </button>
  )
}
