import classNames from 'classnames'
import React from 'react'

export default function ProductCard({children}) {

    const productCardContainer = classNames(
        'flex p-2 flex-col max-w-[200px]  gap-2 text-fs-300 border rounded-md hover:border-custom-dark-blue  transition-all duration-500'
    )
  return (
    <div className={productCardContainer}>
        {children}
    </div>
  )
}
