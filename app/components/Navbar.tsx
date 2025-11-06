import { useState } from "react";
import { NavLink } from "react-router"; //NavLink
import { LuNavigation } from "react-icons/lu";
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const base = 'transition hover:text-zinc-100';
  const active = 'text-zinc-100';

  return ( 
    <nav className="bg-gray-900  border-b border-gray-800/50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to='/' className='flex items-center gap-2 text-lg font-bold text-zinc-100 hover:text-white'>
          <LuNavigation className="text-indigo-400 text-xl"/>
          <span>JohnTorio</span>
        </NavLink>

        {/* Desktop Navigation */}
        {/* md screen and up display flex, below md hidden */}
        <div className="hidden md:flex items-center gap-5">
          <div className="text-zinc-300  transition-colors space-x-4 text-sm">
            <NavLink to='/' className={({ isActive }) => isActive ? active : base}>Home</NavLink>
            <NavLink to='/blog' className={({ isActive }) => isActive ? active : base}>Blog</NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? active : base}>Projects</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? active : base}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4"> 
          {/* setMenuOpen((prev) => !prev) u can do this as well setMenuOpen(!menuOpen) */}
          <button onClick={() => setMenuOpen((prev) => !prev)} className="text-zinc-100 text-xl cursor-pointer" title="Menu">
            { menuOpen ? <LiaTimesSolid/> : <LiaBarsSolid/>}
          </button>
        </div>
      </div>  

      {/* Mobile Navigation */}
      {
        menuOpen && (
          <div className="fixed w-full max-w-70 left-1/2 transform -translate-x-1/2">
            <div className="md:hidden p-4 rounded text-zinc-300 backdrop-blur-sm bg-gray-900/50 transition-colors border-t border-gray-700 space-y-4 flex flex-col">
              <NavLink onClick={() => setMenuOpen(false)}
              to='/' 
              className={({ isActive }) => isActive ? active : base}>Home</NavLink>

              <NavLink onClick={() => setMenuOpen(false)} 
              to='/blog' 
              className={({ isActive }) => isActive ? active : base}>Blog</NavLink>

              <NavLink onClick={() => setMenuOpen(false)}
              to='/projects' 
              className={({ isActive }) => isActive ? active : base}>Projects</NavLink>

              <NavLink onClick={() => setMenuOpen(false)}
              to='/about' 
              className={({ isActive }) => isActive ? active : base}>About</NavLink>

              <NavLink onClick={() => setMenuOpen(false)}
              to='/contact' 
              className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
            
            </div>
          </div>
        )
      }
    </nav>
   );  
  }
 
export default Navbar;
