import classNames from 'classnames'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function Dropdown({question, answer}) {
    const [ isExpanded, setIsExpanded] = useState(false)

    // classes and styles
    const questionComponent = classNames(
        'flex justify-between items-center px-3 bg-gray text-black',
        {
            'bg-custom-dark-green text-white' : isExpanded
        }
    )

    const answerComponent = classNames(
        'opacity-0 h-0 px-3 text-fs-300 transition-all duration-700',
        {
            'opacity-100 h-max py-3 bg-custom-dark-green text-white' : isExpanded
        }
    )

    const dropdownToggle = classNames(
        'text-black cursor-pointer',
        {
            'animate-rotateReverse': !isExpanded,
            'text-white animate-rotate' : isExpanded
        }
    )
  return (
    <div className='m-10 mx-auto px-10 md:max-w-[70%]'>
        <div className={questionComponent}>
            <p>Question</p>
            {
                isExpanded ? 
                <FaMinus 
                    className={dropdownToggle} 
                    onClick={() => setIsExpanded(prevState => !prevState)}
                    aria-expanded='false'/> : 
                <FaPlus 
                    className={dropdownToggle} 
                    onClick={() => setIsExpanded(prevState => !prevState)}
                    aria-expanded='true'/>
            }
        </div>
        <div className={answerComponent}>
            <p>Answers</p>
        </div>
    </div>
  )
}
