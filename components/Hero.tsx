
import React from 'react';

interface HeroProps {
  progress: number;
}

const Hero: React.FC<HeroProps> = ({ progress }) => {
  // Video logic moved to Global App.tsx video element

  return (
    <div id="home-hero" className="section relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Title Section */}
      <h1 id="home-hero-title" className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-xs font-black tracking-[0.8em] uppercase font-heading mb-6 text-[#00f2ff] animate-pulse drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
          ZENSORY REHAB
        </div>
        <div className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tighter text-white drop-shadow-2xl mix-blend-exclusion">
          Rehabilitación inteligente <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#76ff03]">impulsada por IA</span>
        </div>
      </h1>

      {/* Scroll Container */}
      <div id="home-hero-scroll-container" className="absolute bottom-12 left-0 w-full flex flex-col items-center justify-center pointer-events-none">
        <div id="home-hero-scroll-container-crosses" className="flex gap-4 mb-4 opacity-50">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-3 h-3 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
              <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
        <div id="home-hero-scroll" className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
          scroll to explore
        </div>
      </div>
    </div>
  );
};

export default Hero;
