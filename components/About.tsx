
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const About: React.FC = () => {
    const [contentRef, contentIsVisible] = useFadeIn({ threshold: 0.2, triggerOnce: true });
    const [imageRef, imageIsVisible] = useFadeIn({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="about" className="py-24 md:py-32 bg-[#0f0f0f]">
            <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div ref={contentRef} className={`transition-all duration-1000 ease-out ${contentIsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-thin text-[#c8aa78] tracking-wider mb-8">
                        Crafting Timeless Legacies
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed font-light mb-6">
                        At Diseno de Interior, we sculpt environments that breathe timeless elegance. Our philosophy marries European sophistication with a vanguard of contemporary design, forging bespoke residences that are both sanctuaries of comfort and monuments to personal vision.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed font-light">
                        With meticulous attention to materiality and light, we don't just design spaces—we curate legacies.
                    </p>
                </div>
                <div ref={imageRef} className={`relative h-[450px] md:h-[600px] transition-all duration-1000 ease-out ${imageIsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute -top-4 -left-4 w-full h-full border border-[#c8aa78]/30"></div>
                     <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c8aa78]/30"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
