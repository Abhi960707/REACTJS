import React from 'react'

const Home = () => {
  return (
   <nav>
     <div className='Navbar'>
        <h1>Tote</h1> 
    <h2>Funkey Printed Bags</h2>
       <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                           <li className="nav-item">
                            <a className="nav-link" href="#">Gift Card</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Price</a>
                        </li>
    
      <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search " aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                 
    </div>
   </nav>
  )
}

export default Home