
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const CTA: React.FC = () => {
    const [ref, isVisible] = useFadeIn({ threshold: 0.3, triggerOnce: true });

    return (
        <section id="contact" className="py-24 md:py-40 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-center">
            <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-6xl font-thin text-[#c8aa78] tracking-wider mb-6">
                    Let's Create Something Extraordinary
                </h2>
                <p className="text-xl text-white/60 font-light mb-12">
                    Transform your space into a masterpiece that stands the test of time.
                </p>
                <a 
                    href="#" 
                    className="group relative inline-block px-12 py-4 text-sm font-medium tracking-[3px] text-[#c8aa78] uppercase border border-[#c8aa78] transition-colors duration-300 hover:text-black"
                    onClick={e => e.preventDefault()}
                >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-[#c8aa78] transition-transform duration-500 ease-in-out origin-bottom scale-y-0 group-hover:scale-y-100"></div>
                </a>
            </div>
        </section>
    );
};

export default CTA;
