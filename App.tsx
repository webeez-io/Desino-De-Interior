
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8] overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
