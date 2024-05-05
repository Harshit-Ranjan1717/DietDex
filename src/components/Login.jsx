import React, { useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post('http://localhost:5487/login', {
                email,
                password
            })

            if (response.data.user) {
                navigate('/input');
            } else {
                console.error(response.data);
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login