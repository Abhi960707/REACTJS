
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-slate-500 text-white p-4">
        <ul className="flex gap-20 text-2xl">
            <li className="cursor-pointer"><Link to="/">Home</Link></li>
            <li className="cursor-pointer"><Link to="/about">About</Link></li>
            <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
            <li className="cursor-pointer"><Link to="/services">Services</Link></li>
            <li className="cursor-pointer"><Link to="/registerForm">RegisterForm</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar