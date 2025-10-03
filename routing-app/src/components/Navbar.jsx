import React from 'react'
import { Link } from 'react-router-dom'   //used the package:- react-router-dom

const Navbar = () => {                           
  return (
 <nav className='bg-slate-700 text-white p-4'>
    <ul className='text-2xl flex gap-15'>

  {/* <li className='cursor-pointer'>
          <a href="/">Home</a>                //used the anchor tag all page reaload the output
                                               But Used the Link to not reaload the page
            </li>

            <li className='cursor-pointer'>
          <a href="/services">Services</a>
            </li> */}

        <li className='cursor-pointer'>
            <Link to="/">Home</Link> 
            </li>
        <li className='cursor-pointer'>
            <Link to="/services">Services</Link>
            </li>
        <li className='cursor-pointer'>
            <Link to="/about">About</Link>
            </li>
        <li className='cursor-pointer'>
            <Link to="/contact">Contact</Link>
            </li>
    </ul>

 </nav>
  )
}

export default Navbar