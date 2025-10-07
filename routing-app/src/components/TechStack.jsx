import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Html from './Html'
import Css from './Css'
import Javascripts from './Javascripts'

const TechStack = () => {
  return (
    <div className='mx-20 my-10 flex gap-10'>

        <ul className='mb-5'>
            <li><Link to="html">Html</Link></li>
            <li><Link to="css">Css</Link></li>
            <li><Link to="javascripts">Javascripts</Link></li>
            
        </ul>
      {/* <Html />
      <Css />
      <Javascripts />                       This is simpple Routing & */}


      <Outlet />            {/*is a special placeholder component that is used for nested child routing. */}
    </div>
    
  )
}

export default TechStack