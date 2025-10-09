import { Link, Outlet } from 'react-router-dom'

const React = () => {
  return (
    <div className='bg-slate-700 text-white p-4 flex'>
       
       
 <ul className='mb-13 '>
   <li className='cursor-pointer text-5xl  '>
                    <Link to="/">React</Link>
                     </li>
            <li className='cursor-pointer text-bold   '><Link to="history">History</Link></li>
            <li className='cursor-pointer text-bold   '><Link to="components">Components</Link></li>
            <li><Link to="props">Props</Link></li>
            <li><Link to="state">State</Link></li>
            <li><Link to="hooks">Hooks</Link></li>
            
        </ul>   
             
        <Outlet />
    </div>
  )
}

export default React