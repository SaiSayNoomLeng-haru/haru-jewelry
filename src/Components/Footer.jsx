import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router'
import ScrollToTop from './ScrollToTop'

export default function Footer() {
    // classes and styles
    const footerClass = classNames(
        'grid p-5 bg-custom-accent text-fs-300 gap-2 place-items-center',
        'md:grid-cols-4 md:grid-rows-[repeat(3, min-content)] md:place-items-start'
    )

    const linksComponent = classNames(
        'flex flex-col gap-2 text-center md:text-left'
    )
  return (
    <ScrollToTop>
        <footer className={footerClass}>
            <Link to='/'>
                <img src="/assets/images/logo-dark.png" alt="haru jewlery logo"
                    aria-label='A diamond-shaped Haru Jewelry Logo'
                    loading='lazy'
                    className='max-w-[80px] md:max-w-[100px]' 
                />
            </Link>

            <p className='text-justify md:col-span-3 md:place-self-center'>We are rather than just E-commerce store. We crafted every product with our talented designers and deliver to you with highest quality you can get.</p>

            <div className={linksComponent}>
                <p className="font-semibold">Company</p>
                <Link to='about-us'>About Us</Link>
                <Link to='blogs'>Blog</Link>
                <Link to='contact-us'>Contact Us</Link>
                <Link to='career'>Career</Link>
            </div>

            <div className={linksComponent}>
                <p className="font-semibold">Customer Services</p>
                <Link to='profile'>My Account</Link>
                <Link to=''>Track Your Order</Link>
                <Link to=''>Return</Link>
                <Link to='faq'>FAQ</Link>
            </div>

            <div className={linksComponent}>
                <p className="font-semibold">Our Information</p>
                <Link to=''>Privacy</Link>
                <Link to=''>User Terms & Conditions</Link>
                <Link to=''>Return Policy</Link>
            </div>

            <div className={linksComponent}>
                <p className="font-semibold">Contact Info</p>
                <p>+1 234 567 1234</p>
                <p>example@mail.com</p>
                <p>8502, Preston Rd, Inglewood, Maine, 98380</p>
            </div>

            <div className="custom-divider md:hidden"></div>

            <p className='md:col-span-full md:place-self-end'>Copyright &copy; {new Date().getFullYear()} <span className='text-custom-pale-red font-bold'>Sai Say Noom Leng.</span> &nbsp; All Rights Reserved.</p>
        </footer>
    </ScrollToTop>
    
  )
}
