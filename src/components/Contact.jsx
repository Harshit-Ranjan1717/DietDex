import React from 'react'
import { Navbar } from './Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
                        <form className="mb-6">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" id="name" className="w-full border-gray-300 border-2 rounded-lg p-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" className="w-full border-gray-300 border-2 rounded-lg p-2" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea id="message" className="w-full h-44 border-gray-300 border-2 rounded-lg p-2 resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Submit</button>
                        </form>
                        <div className="text-center text-gray-600">
                            <p>CHITKARA UNIVERSITY</p>
                            <p>Rajpura, Punjab</p>
                            <p>Email: dietDex@gmail.com</p>
                            <p>Phone: 9525561347</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact