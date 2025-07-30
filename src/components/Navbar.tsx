import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Experience', 'Projects', 'Certificate', 'Contact'];

  return (
        <>
        <header className="fixed top-0 w-full shadow-sm z-50 navbar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="text-2xl font-bold text-red-600 tracking-tight text-white">
            &lt;Cy/&gt;
            </div>

            <nav className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((label) => (
                <a
                key={label}
                href="#"
                className="text-black font-medium hover:text-red-600 transition-colors duration-200"
                >
                {label}
                </a>
            ))}
            </nav>

            {/* Right: Placeholder Button */}
            <div className="hidden md:flex items-center">
            <button className="rounded bg-red-600 px-4 py-1.5 text-white text-sm font-medium hover:bg-red-700 transition">
                Download CV
            </button>
            </div>
            {/* Mobile Menu Toggle */}
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white focus:outline-none focus:ring-0"
            aria-label="Toggle menu"
            >
            {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>

        {/* Mobile Menu */}
        <div
            className={`${
            menuOpen ? 'block' : 'hidden'
            } md:hidden text-white relative z-40`}
        >
            <div className="absolute top-0 left-0 w-full h-2 -mt-2 shadow-md z-[-1]" />
            <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((label) => (
                <a
                key={label}
                href="#"
                className="text-white text-lg font-medium hover:text-red-600 transition-colors focus:outline-none focus:ring-0"
                >
                {label}
                </a>
            ))}
            <button className="rounded bg-red-600 px-4 py-2 text-white text-sm font-medium hover:bg-red-700 transition focus:outline-none focus:ring-0">
                Download CV
            </button>
            </nav>
        </div>
        </header>
    </>
    );
};

export default Navbar;
