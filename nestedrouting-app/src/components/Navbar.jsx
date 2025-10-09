import React from 'react'
import { Link } from 'react-router-dom'   //used the package:- react-router-dom

const Navbar = () => {                           
  return (
 <nav className='bg-slate-700 text-white p-4'>
    <ul className='text-2xl flex gap-15'>

  {/* Example:- <li className='cursor-pointer'>
          <a href="/">Home</a>                //used the anchor tag all page reaload the output
                                               But Used the Link to not reaload the page
            </li>

            <li className='cursor-pointer'>
          <a href="/services">Services</a>
            </li> */}
            <li className='cursor-pointer'>
            <Link to="/react">React</Link>
            </li>


        <li className='cursor-pointer'>
            <Link to="/history">History</Link>
            </li>
        <li className='cursor-pointer'>
            <Link to="/">Components</Link> 
            </li>
        <li className='cursor-pointer'>
            <Link to="/state">State</Link>
            </li>
             <li className='cursor-pointer'>
            <Link to="/props">Props</Link> 
            </li>
        <li className='cursor-pointer'>
            <Link to="/hooks">Hooks</Link>
            </li>

    </ul>

 </nav>
  )
}

export default Navbar