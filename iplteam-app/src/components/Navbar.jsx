// import React from 'react'
// import { Link } from 'react-router-dom'   //used the package:- react-router-dom

// const Navbar = () => {
//     return (
//         <nav className='bg-slate-700 text-white p-4'>
//             <ul className='text-2xl flex gap-15'>




//                 <li className='cursor-pointer'>
//                     <Link to="/">CSK</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/rcb">RCB</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/dc">DC</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/rr">RR</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/srh">SRH</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/pbks">PBKS</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/lsg">LSG</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/gt">GT</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/kkr">KKR</Link>
//                 </li>
//                 <li className='cursor-pointer'>
//                     <Link to="/mi">MI</Link>
//                 </li>
             
             


//             </ul>

//         </nav>
//     )
// }

// export default Navbar



import React from 'react'
import { Link } from 'react-router-dom'   //used the package:- react-router-dom

const Navbar = () => {
    return (
        <nav className='bg-slate-700 text-white p-4'>
            <ul className='text-2xl flex gap-10'>   {/* changed gap-15 to gap-10 (since Tailwind doesn't have gap-15 by default) */}

                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/">CSK</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/rcb">RCB</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/dc">DC</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/rr">RR</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/srh">SRH</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/pbks">PBKS</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/lsg">LSG</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/gt">GT</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/kkr">KKR</Link>
                </li>
                <li className='cursor-pointer flex items-center gap-2'>
                    <i className="bi bi-0-circle"></i>
                    <Link to="/mi">MI</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
