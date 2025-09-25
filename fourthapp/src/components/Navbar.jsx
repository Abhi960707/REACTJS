import React from "react";
import '../styles/Navbar.css';
import { FaSearch } from "react-icons/fa";

const Navbar=()=>{
    // const ulStyle={
    //     display:"flex",
    //     listStyle:"none",
    return(
        <nav className="navbar">
            <h1>Techrel</h1>
            <ul className="nav-list">
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Elements</li>
        </ul>
        <div>
          <FaSearch />
        </div>

        </nav>
    )
        
    }
    export default Navbar