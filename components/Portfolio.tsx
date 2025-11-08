
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

interface PortfolioItem {
    image: string;
    title: string;
    category: string;
    className?: string;
}

const portfolioData: PortfolioItem[] = [
    {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        title: "Serene Residence",
        category: "Contemporary Living",
        className: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
        title: "The Onyx Penthouse",
        category: "Urban Sophistication"
    },
    {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        title: "Villa Azure",
        category: "Coastal Elegance"
    }
];

const PortfolioItem: React.FC<{ item: PortfolioItem, index: number }> = ({ item, index }) => {
    const [ref, isVisible] = useFadeIn({ delay: index * 100, threshold: 0.1, triggerOnce: true });

    return (
        <div ref={ref} className={`relative group overflow-hidden h-80 md:h-auto cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${item.className || ''}`}>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">
                <p className="uppercase text-sm tracking-[3px] text-[#c8aa78] mb-1">{item.category}</p>
                <h3 className="text-3xl lg:text-4xl font-medium">{item.title}</h3>
            </div>
        </div>
    );
}

const Portfolio: React.FC = () => {
    const [headerRef, headerIsVisible] = useFadeIn({ threshold: 0.1, triggerOnce: true });
    
    return (
        <section id="portfolio" className="py-24 md:py-32 bg-[#0f0f0f]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div ref={headerRef} className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${headerIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="uppercase text-sm tracking-[4px] text-white/50 mb-3">Selected Works</p>
                    <h2 className="text-4xl md:text-5xl font-thin text-[#c8aa78] tracking-wider">
                        A Portfolio of Excellence
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(2,_minmax(0,_25rem))] gap-6">
                    {portfolioData.map((item, index) => (
                        <PortfolioItem key={item.title} item={item} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
