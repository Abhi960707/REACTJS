import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    navigate("/login");
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-300 from-blue-500 to-purple-600 p-4'>
      <div className='bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
          Create Account
        </h1>
        <form className='flex flex-col gap-5' onSubmit={submit}>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
            <input type='text' placeholder='Enter your name' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all' onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input type='email' placeholder='Enter your email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input type='password' placeholder='Enter a password' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all' onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type='submit' className='w-full bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 mt-2'>Sign Up</button>
        </form>
        <p className='text-center mt-6 text-sm text-gray-600'>
          Already have an account?{' '}
          <Link to="/login" className='text-blue-600 font-semibold hover:underline'>Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup