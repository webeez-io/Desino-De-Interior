
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Hero: React.FC = () => {
    const [h1Ref, h1IsVisible] = useFadeIn({ threshold: 0.1, triggerOnce: true });
    const [pRef, pIsVisible] = useFadeIn({ threshold: 0.1, delay: 300, triggerOnce: true });

    return (
        <section id="hero" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center animate-[zoom_20s_ease-in-out_infinite_alternate]">
                <style>{`
                    @keyframes zoom {
                        from { transform: scale(1); }
                        to { transform: scale(1.1); }
                    }
                `}</style>
            </div>
            
            <div className="relative z-20 text-center text-white px-6">
                <h1 ref={h1Ref} className={`uppercase text-5xl md:text-7xl lg:text-8xl font-thin tracking-[0.2em] md:tracking-[0.3em] mb-6 transition-all duration-1000 ease-out ${h1IsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Timeless Spaces
                </h1>
                <p ref={pRef} className={`uppercase text-base md:text-lg text-[#c8aa78] tracking-[0.3em] md:tracking-[0.4em] font-light transition-all duration-1000 ease-out ${pIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Architecture & Interior Design
                </p>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn opacity-0" style={{animationDelay: '1.2s'}}>
                <span className="text-xs uppercase text-[#c8aa78] tracking-[2px]">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-[#c8aa78] to-transparent animate-[scroll-down_2s_ease-in-out_infinite]">
                    <style>{`
                        @keyframes scroll-down {
                            0% { transform: translateY(-100%); }
                            100% { transform: translateY(100%); }
                        }
                         @keyframes fadeIn {
                            to { opacity: 1; }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default Hero;
