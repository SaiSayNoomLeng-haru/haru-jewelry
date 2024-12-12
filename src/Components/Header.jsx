import classNames from 'classnames';
import React, { useCallback, useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { Link, NavLink, Form } from 'react-router';

export default function Header() {
    const [ isNavExpanded, setIsNavExpanded] = useState(false);

    // classes and styles
    const headerClass = classNames(
        'grid grid-cols-3 text-fs-200 md:text-fs-300 place-items-center h-[80px] py-3'
    )
    
    const searchbarClass = classNames(
        'bg-transparent border rounded-lg outline-none border-gray-300 w-5 transition-all md:rounded-full md:w-10 md:indent-1',
        'focus:w-full focus:indent-4 focus:border-black focus:md:indent-6'
    )

    const mainNavClass = classNames(
        'flex gap-3 pr-5'
    )

    const navToggleBtn = classNames(
        'w-3 relative h-[2px] bg-black rounded-lg align-middle transition-all',
        'before:absolute before:content-[""] before:w-4 before:h-[2px] before:bg-black before:top-[-4px] before:right-0 before:rounded-lg',
        'after:absolute after:content-[""] after:w-2 after:h-[2px] after:bg-black after:bottom-[-4px] after:right-0 after:rounded-lg',
        {
            'rotate-45' : isNavExpanded,
            'before:rotate-90 before:!top-0 before:!w-3' : isNavExpanded,
            'after:hidden' : isNavExpanded,
        }
    )

    const navPages = classNames(
        'flex flex-col gap-3 px-3 py-5 md:text-fs-300 fixed z-10 top-[80px] right-3 bottom-[70vh] md:bottom-[60vh] left-[60vw] md:left-[70vw] bg-custom-gray border translate-x-[150%] transition-all duration-500',
        {
            '!translate-x-0': isNavExpanded
        }
    )

    const navStyle = {
        fontWeight: 'bold',
        borderBottom: '1px solid #0f8fe5'
    }

    const getNavStyle = useCallback(({isActive}) => (
        isActive ? navStyle : null
    ))
  return (
    <header className={headerClass}>
        <div className='justify-self-start px-4 flex items-center gap-2'>
            <Form className='relative '>
            <input 
                type="text"
                className={searchbarClass}/>
            <HiMagnifyingGlass className='absolute top-1 left-[.3rem] md:top-[.3rem] z-10 bg-custom-white'/>
            </Form>
        </div>

        <NavLink 
            to='/'>
            <img src="/assets/images/logo-blue.png" alt="haru jewlery logo"
            aria-label='A diamond-shaped Haru Jewelry Logo'
            loading='lazy'
            className='max-w-[50px] md:max-w-[80px]' 
            onClick={() => setIsNavExpanded(false)}/>
        </NavLink>

        <nav 
            className={mainNavClass} 
            role='navigation'>

            <NavLink
                to='catalogue'
                style={getNavStyle}
                onClick={() => setIsNavExpanded(false)}
                >
                    Catalogue
            </NavLink>

            <NavLink
                to='cart'
                style={getNavStyle}
                onClick={() => setIsNavExpanded(false)}>
                Cart
            </NavLink>

            <NavLink
                to='wishlist'
                style={getNavStyle}
                 onClick={() => setIsNavExpanded(false)}>
                Wishlist
            </NavLink>

            <div>
                <button
                    aria-expanded={isNavExpanded}
                    aria-label='Navigation Toggle Button'
                    className={navToggleBtn}
                    onClick={() => setIsNavExpanded(prevOpen => !prevOpen)}
                    ></button>

                <nav className={navPages}>
                    <NavLink
                        to='/'
                        end
                        style={getNavStyle}
                        onClick={() => setIsNavExpanded(prevOpen => !prevOpen)}>
                            Home
                    </NavLink>

                    <NavLink
                        to='blogs'
                        style={getNavStyle}
                        onClick={() => setIsNavExpanded(prevOpen => !prevOpen)}>
                            Blog
                    </NavLink>

                    <NavLink
                        to='about-us'
                        style={getNavStyle}
                        onClick={() => setIsNavExpanded(prevOpen => !prevOpen)}>
                            About Us
                    </NavLink>

                    <NavLink
                        to='faq'
                        style={getNavStyle}
                        onClick={() => setIsNavExpanded(prevOpen => !prevOpen)}>
                            FAQ
                    </NavLink>

                    <NavLink
                        to='contact-us'
                        style={getNavStyle}
                        onClick={() => setIsNavExpanded(prevOpen => !prevOpen)}>
                           Contact Us
                    </NavLink>
                </nav>
            </div>
        </nav>

    </header>
  )
}
