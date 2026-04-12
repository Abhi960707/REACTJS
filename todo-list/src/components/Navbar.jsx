import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ userName = 'User' }) => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg relative">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center p-1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-wide">Todo </span>
      </div>

      <div className="hidden md:flex gap-6 items-center text-sm font-medium">
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Dashboard</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Calendar</a>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center font-bold text-sm shadow-inner">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="hidden sm:block font-medium text-sm">{userName}</span>
          <svg className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden z-50 text-gray-800 border border-gray-100">
            <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-bold text-white shadow-inner">{userName.charAt(0).toUpperCase()}</div>
              <div>
                <p className="font-bold text-sm text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500">abhi@gmail.com</p>
              </div>
            </div>
            <div className="p-2 flex flex-col gap-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg>
              Profile
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg>
              Settings
            </button>
            <div className="my-1 border-t border-gray-100" />
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-red-50 hover:text-red-600 rounded-lg text-sm font-medium transition-colors text-red-500" onClick={logout}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Logout
            </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
