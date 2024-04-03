import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center h-[50px] bg-green-600 text-white text-xl list-none'>
                <div className='ml-4'>
                    <h1>
                        DietDex
                    </h1>
                </div>
                <div className='flex gap-10 mr-6 cursor-pointer'>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Diet Program</li>
                    <li>Login</li>
                    <li>Get Started</li>
                </div>
            </div>

        </>
    )
}
