import classNames from 'classnames'
import React from 'react'

export default function BlogCard({children}) {

    const blogCard = classNames(
        'flex flex-col gap-2 max-w-[300px] py-1 px-3 hover:scale-[1.01] transition-all cursor-pointer'
    )
        return (
        <div className={blogCard}>
            {children}
        </div>
    

    )
}
