import React from 'react'
import {Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center h-[50px] bg-[#0ACB8B] text-white text-lg list-none'>
                <div className='ml-4'>
                    <h1>
                        DietDex
                    </h1>
                </div>
                <div className='flex gap-10 mr-6 cursor-pointer'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><a href='#diet'>Diet Program</a></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Get Started</Link></li>
                </div>
            </div>
        </>
    )
}
