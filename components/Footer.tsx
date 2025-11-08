import React from 'react';

const LogoIcon: React.FC = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 96 102"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#c8aa78]"
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


const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <LogoIcon />
                        <span className="text-xl tracking-widest uppercase text-white/90">Diseño de Interior</span>
                    </div>
                    <nav className="flex items-center gap-6 md:gap-8">
                        <a href="#" className="text-sm tracking-widest uppercase text-white/50 hover:text-[#c8aa78] transition-colors duration-300">Instagram</a>
                        <a href="#" className="text-sm tracking-widest uppercase text-white/50 hover:text-[#c8aa78] transition-colors duration-300">Pinterest</a>
                        <a href="#" className="text-sm tracking-widest uppercase text-white/50 hover:text-[#c8aa78] transition-colors duration-300">LinkedIn</a>
                    </nav>
                </div>
                <p className="text-xs text-white/40 tracking-widest">
                    © {new Date().getFullYear()} Diseno de Interior. All Rights Reserved.
                </p>
                <p className="text-xs text-white/40 tracking-widest mt-2">
                    Designed and Developed by <a href="https://webeez.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c8aa78] transition-colors duration-300">webeez.io</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;