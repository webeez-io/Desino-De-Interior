
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = (e: MouseEvent) => {
            if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
                setIsHoveringLink(true);
            }
        };

        const onMouseLeave = (e: MouseEvent) => {
             if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
                setIsHoveringLink(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseEnter);
        document.addEventListener('mouseout', onMouseLeave);


        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseEnter);
            document.removeEventListener('mouseout', onMouseLeave);
        };
    }, []);

    return (
        <div 
            className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ease-out hidden md:block ${isHoveringLink ? 'bg-[#c8aa78] scale-150' : 'bg-transparent border border-white/50'}`}
            style={{ 
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                width: isHoveringLink ? '30px' : '25px',
                height: isHoveringLink ? '30px' : '25px'
            }}
        />
    );
};

export default CustomCursor;
