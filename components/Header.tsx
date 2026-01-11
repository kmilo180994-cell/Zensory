
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none">
      <div id="header-container" className="relative w-full h-full flex justify-between items-center px-6 py-6 md:px-12 pointer-events-auto">

        {/* Background layer if needed */}
        <div id="header-background" className="absolute inset-0 z-[-1] opacity-0"></div>

        {/* Logo */}
        <a id="header-logo" href="#inicio" onClick={handleLinkClick} className="flex items-center gap-3 mix-blend-exclusion z-50 text-white hover:text-[#00f2ff] transition-colors">
          {/* Simple SVG Logo Placeholder based on Zensory */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className="w-10 h-10">
            <path d="M20 80 L50 20 L80 80" stroke="currentColor" strokeWidth="8" fill="none" />
            <path d="M40 50 L60 50" stroke="#00f2ff" strokeWidth="8" />
          </svg>
          <span className="text-xl font-black tracking-tighter uppercase font-heading hidden sm:block">ZENSORY</span>
        </a>

        {/* Center - usually for navigation or back button */}
        <div id="header-center" className="absolute left-1/2 transform -translate-x-1/2">
          {/* Placeholder for center content */}
        </div>

        {/* Right Controls */}
        <div id="header-right" className="flex items-center gap-4">

          {/* Talk Button (Hablemos) */}
          <a
            id="header-right-talk-btn"
            href="https://wa.me/573208191724"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#00f2ff] transition-colors"
          >
            <span>Hablemos</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </a>

          {/* Menu Button */}
          <button
            id="header-right-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col items-end gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-[2px] w-6 bg-white transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block h-[2px] w-4 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-6 bg-white transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>

        {/* Full Screen Menu */}
        <div
          id="header-menu"
          className={`fixed inset-0 bg-[#020022] z-40 flex flex-col justify-center items-center transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div id="header-menu-links" className="flex flex-col gap-6 text-center">
            {[
              { label: 'Inicio', href: '#inicio' },
              { label: 'Servicios', href: '#especialidades' },
              { label: 'Tecnología', href: '#tech' },
              { label: 'Nuestro Reel', href: '#reel' },
              { label: 'Contacto', href: '#contacto' }
            ].map((item) => (
              <a
                key={item.label}
                className="header-menu-link text-5xl md:text-7xl font-black font-heading text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00f2ff] hover:to-[#76ff03] transition-all cursor-pointer"
                href={item.href}
                onClick={handleLinkClick}
              >
                <span className="header-menu-link-text">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
