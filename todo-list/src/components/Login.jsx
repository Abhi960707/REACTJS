import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/todolist");
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-orange-200 to-purple-600 p-4'>
      <div className='bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md'>
        <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8'>
          Welcome Back
        </h1>
        <form className='flex flex-col gap-5' onSubmit={submit}>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input type='email' placeholder='Enter your email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input type='password' placeholder='Enter your password' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all' onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type='submit' className='w-full bg-green-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 mt-2'>Login</button>
        </form>
        <p className='text-center mt-6 text-sm text-gray-600'>
          I Don't have account?{' '}
          <Link to="/" className='text-blue-600 font-semibold hover:underline'>Signup</Link>
        </p>
      </div>
    </div>
  )
}
export default Login