
import React from 'react';

const ReelSection: React.FC = () => {
  return (
    <div id="home-reel" className="section relative py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">

        {/* Left Content Block */}
        <div className="sticky top-40 flex flex-col items-start">
          <h4 id="home-reel-title" className="mb-8">
            <div id="home-reel-title-inner">
              <div id="home-reel-title-line-1" className="text-xs uppercase tracking-[0.5em] text-[#76ff03] font-bold">
                Nuestro Reel
              </div>
              <div id="home-reel-title-line-2"></div>
            </div>
          </h4>

          <div id="home-reel-content">
            <h2 id="home-reel-desc" className="text-5xl md:text-7xl font-black font-heading mb-12 tracking-tighter leading-none text-white">
              Visiones sin<br />
              límites.
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mb-12 font-light">
              ZENSORY es una empresa de rehabilitación integral comprometida con tu bienestar. Conéctate con nuestra comunidad en redes sociales y descubre cómo transformamos la recuperación física a través de la tecnología y el cuidado experto.
            </p>

            <a
              id="home-reel-cta"
              href="https://www.instagram.com/zensory_rehab?igsh=d2lwaGJsdGhtMXhh&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <span id="home-reel-cta-dot" className="w-16 h-16 rounded-full border border-[#00f2ff]/30 flex items-center justify-center group-hover:bg-gradient-to-r from-[#00f2ff] to-[#76ff03] group-hover:border-transparent transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                <span id="home-reel-cta-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </span>
              </span>
              <span id="home-reel-cta-text" className="text-sm uppercase tracking-[0.3em] font-black group-hover:text-[#00f2ff] transition-colors text-white">
                SÍGUENOS EN INSTAGRAM
              </span>
            </a>
          </div>
        </div>

        {/* Right Content - Box Container */}
        <div id="home-reel-container">
          <div id="home-reel-container-inner">
            <div id="home-reel-thumb-wrapper"></div>

            {/* Main Video Container */}
            <div id="home-reel-video-container" className="relative aspect-[9/16] md:aspect-[16/10] bg-[#030712] rounded-xl overflow-hidden group border border-white/5 shadow-2xl">

              <video
                src="/Reel1.mp4"
                controls
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1635331707251-54bc753f5383?q=80&w=2070&auto=format&fit=crop"
              >
                Tu navegador no soporta el video.
              </video>

              {/* Decorations */}
              <div id="home-reel-video-container-decoration" className="pointer-events-none">
                <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[#00f2ff]/30"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[#76ff03]/30"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReelSection;
