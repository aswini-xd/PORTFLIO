import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [
    {to: '/about', label: 'About'},
    {to: '/skills', label: 'Skills'},
    {to: '/projects', label: 'Projects'},
    {to: '/testi', label: 'Testimonial'},
    {to: '/contact', label: 'Contact'},
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-cyan-400 flex items-center justify-center text-black font-bold">AD</div>
          <div>
            <NavLink to="/PORTFLIO/about" className="text-xl font-semibold">Aswini</NavLink>
            <div className="text-sm text-gray-300">Web Developer</div>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map(l=> (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) => `px-3 py-2 rounded-md transition-all ${isActive? 'bg-white/10 text-white':'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/PORTFLIO/Aswinii.pdf" className="px-4 py-2 rounded-md bg-gradient-to-r from-sky-400 to-cyan-400 text-black font-semibold">Resume</a>
        </div>

        {/* Mobile menu button */}
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-md text-gray-200 hover:bg-white/5">
          {open ? <FiX size={22}/> : <FiMenu size={22}/>} 
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden ${open? 'block':'hidden'} border-t border-white/5 bg-black/60`}
           onClick={()=>setOpen(false)}>
        <div className="px-6 py-4 space-y-2">
          {links.map(l=> (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) => `block px-3 py-2 rounded-md transition-all ${isActive? 'bg-white/10 text-white':'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
              {l.label}
            </NavLink>
          ))}
          <a href="/PORTFLIO/Aswinii.pdf" className="block mt-2 px-3 py-2 rounded-md bg-gradient-to-r from-sky-400 to-cyan-400 text-black font-semibold">Resume</a>
        </div>
      </div>
    </header>
  )
}