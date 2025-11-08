import React, { useState, useEffect } from 'react';
import useScroll from '../hooks/useScroll';

const LogoIcon: React.FC = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 96 102"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#c8aa78] transition-colors duration-300 group-hover:text-white"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.3 6.5C42.7 6.5 55.2 10.7 64.6 19C74.1 27.3 78.8 38.5 78.8 52.5V55.7C78.8 69.7 74.1 80.9 64.6 89.2C55.2 97.5 42.7 97.5 27.3 97.5H5.5V6.5H27.3ZM25.5 13.3C36.7 13.3 45.4 16.9 51.7 24.1C58 31.3 61.2 39.9 61.2 49.1V50.8C61.2 60 58 68.6 51.2 75.8C44.4 83 34.8 86.6 22.6 86.6H5.5V13.3H25.5Z"
        />
        <path d="M71.3 6.5H81.8V89.5H71.3V6.5Z" />
        <path d="M85.1 6.5H95.6V89.5H85.1V6.5Z" />
    </svg>
);


const Header: React.FC = () => {
    const isScrolled = useScroll(50);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };
    
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg shadow-lg shadow-black/20 py-4' : 'py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="group flex items-center gap-3 cursor-pointer">
                        <LogoIcon />
                        <span className="font-semibold text-lg tracking-wider uppercase transition-colors duration-300 text-white/90 group-hover:text-[#c8aa78]">Diseño de Interior</span>
                    </a>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm uppercase tracking-[3px] font-light text-white/80 hover:text-[#c8aa78] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#c8aa78] after:transition-all after:duration-300 hover:after:w-full">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(true)} className="text-white/80 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black/60 z-[51] transition-opacity duration-500 md:hidden ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Slide-in Menu */}
            <div
              className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#0a0a0a] z-[52] shadow-2xl shadow-black/40 transform transition-transform duration-500 ease-in-out md:hidden ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
                <div className="p-6 flex justify-end">
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#c8aa78] transition-colors">
                         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-2xl uppercase tracking-[4px] font-light text-white/80 hover:text-[#c8aa78] transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;