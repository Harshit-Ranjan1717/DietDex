import React from 'react'
import Header from './Header'
import Login from './Login'
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

export const Navbar = () => {
    const route = createBrowserRouter([
        {
            path:"/login",
            element: <Login/>
        },
        {
            path: "/",
            element: <Header/>
        }
    ])
    return (
        <>
            {/* <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<h1>Error:404 Page not found</h1>} />
            </Routes> */}
            {/* <RouterProvider router={route} /> */}
            <div className='flex justify-between items-center h-[50px] bg-[#47c640] text-white text-xl list-none'>
                <div className='ml-4'>
                    <h1>
                        DietDex
                    </h1>
                </div>
                <div className='flex gap-10 mr-6 cursor-pointer'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/'>Diet Program</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Get Started</Link></li>
                </div>
            </div>
        </>
    )
}
