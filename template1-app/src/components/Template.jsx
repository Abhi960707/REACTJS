import React from 'react'
import '../assets/styles/Style.css'
const Template = () => {
  return (
   <section>
    <nav className='Navbar'>
        <h2>DevFolio</h2>
        <ul className='ul-list'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Price</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </nav>

    <div className='textdata'>
        <div className='textdata1'>
    <h3>I'm</h3>
    <h1> Abhijeet Narsale</h1>
    <h2>Full Stack Developer</h2>
    <button>Hire Me</button>
    <button>Contact Me</button>
    </div>
<img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="" />
    
    </div>

<div className='btn'>

</div>
   </section>
  )
}

export default Template