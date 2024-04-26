import React from 'react'
import { useState } from 'react'
import { Navbar } from './Navbar'
import { MdOutlineFoodBank } from "react-icons/md";
import { Link } from 'react-router-dom';

const DietInput = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // handle login logic here
    }
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-center mb-6">Enter your details:</h2>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age:</label>
                            <input type="text" id="age" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">Weight:</label>
                            <input type="text" id="weight" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="allergy" className="block text-gray-700 font-semibold mb-2">Allergic to:</label>
                            <input type="text" id="allergy" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="disease" className="block text-gray-700 font-semibold mb-2">Diseases (if any):</label>
                            <input type="text" id="disease" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <Link to='plan'><button type="submit" className="flex justify-around items-center w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Generate your Diet Plan <MdOutlineFoodBank size={30}/></button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DietInput