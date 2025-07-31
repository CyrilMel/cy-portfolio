import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/mini-logo.png';
import cvFile from '../assets/Cyril_Mel_Macapugas_Resume.pdf';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { label: 'Experience', targetId: 'experience' },
        { label: 'Projects', targetId: 'projects' },
        { label: 'Certificate', targetId: 'certificate' },
        { label: 'Contact', targetId: 'contact' },
    ];


    return (
        <>
        <header className="fixed top-0 w-full shadow-sm z-50 navbar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <img src={logo} alt="Logo" className="h-20 w-auto" />
</div>
            <nav className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map(({ label, targetId }) => (
            <button
                key={label}
                onClick={() => {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
                setMenuOpen(false);
                }}
                className="nav-scroll-link p-0 m-0"
            >
                {label}
            </button>
            ))}
            </nav>

            <div className="hidden md:flex items-center">
            <a
            href={cvFile}
            download="Cyril_Mel_Macapugas_Resume.pdf"
            className="px-4 py-1.5 border border-white text-white hover:bg-white hover:text-black transition font-medium text-sm rounded"
            >
            Download CV
            </a>
            </div>

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
           {navLinks.map(({ label, targetId }) => (
            <button
                key={label}
                onClick={() => {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
                setMenuOpen(false);
                }}
                className="nav-scroll-link p-0 m-0"
            >
                {label}
            </button>
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
