
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// FIX: Moved icon components before their usage to resolve block-scoped variable errors.
// SVG Icon Components
const IconDiamond = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 12l10 10 10-10L12 2z" /></svg>
);
const IconChair = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M17 10V4h-2v6h- soluzione per questo, 2v2h2v2h2v-2h2v-2h-2zM5 20v-8h14v8H5zm-2-8V4h18v8H3z" /></svg>
);
const IconLightbulb = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.707.707M12 21a5 5 0 01-4.243-2.586" /></svg>
);
const IconPalette = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
);

const servicesData: Service[] = [
    {
        icon: <IconDiamond />,
        title: "Interior Architecture",
        description: "We redefine spatial dynamics, seamlessly integrating structure and aesthetics to create intellectually conceived and intuitively experienced interiors."
    },
    {
        icon: <IconChair />,
        title: "Bespoke Furnishings",
        description: "Collaborating with master artisans, we design and commission one-of-a-kind furniture pieces that serve as the soul of your space."
    },
    {
        icon: <IconLightbulb />,
        title: "Lighting Design",
        description: "We paint with light, orchestrating bespoke lighting schemes that sculpt atmosphere, enhance architecture, and evoke profound emotion."
    },
    {
        icon: <IconPalette />,
        title: "Art Curation",
        description: "Our expert curation places significant works of art, transforming your home into a private gallery that reflects your unique cultural narrative."
    }
];

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
    const [ref, isVisible] = useFadeIn({ delay: index * 150, threshold: 0.1, triggerOnce: true });
    
    return (
        <div ref={ref} className={`border border-white/10 p-8 text-center bg-[#0a0a0a]/50 group transition-all duration-500 ease-out hover:border-[#c8aa78]/50 hover:-translate-y-2 hover:bg-[#111111] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-4xl text-[#c8aa78] mb-6 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
            </div>
            <h3 className="text-2xl font-medium tracking-widest uppercase mb-4 text-white/90">
                {service.title}
            </h3>
            <p className="text-white/60 font-light leading-relaxed">
                {service.description}
            </p>
        </div>
    );
}

const Services: React.FC = () => {
     const [headerRef, headerIsVisible] = useFadeIn({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div ref={headerRef} className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${headerIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="uppercase text-sm tracking-[4px] text-white/50 mb-3">Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-thin text-[#c8aa78] tracking-wider">
                        Comprehensive Design Solutions
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
