
import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href === '#!' || href === '#') {
      e.preventDefault();
    }
  };

  return (
    <>
      {/* End Section (CTA) - Corresponds to Lusion's #end-section */}
      <div id="end-section" className="section py-48 px-6 md:px-12 relative overflow-hidden text-white">

        {/* Video Background */}
        <video
          src="/Recuperat.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-0"></div>

        <div id="end-section-outer" className="max-w-[1600px] mx-auto text-center relative z-10">
          <div id="end-section-content">

            {/* Cross decorations - adjusted for dark background */}
            <div id="end-section-content-crosses" className="hidden md:flex justify-between absolute top-0 w-full opacity-50">
              {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 border-l border-t border-white"></div>)}
            </div>

            <div id="end-section-subtitle" className="mb-10">
              <div id="end-section-subtitle-text" className="text-xs uppercase tracking-[0.5em] text-gray-200 font-bold">
                ¿Listo para transformar tu salud?
              </div>
            </div>

            <div id="end-section-title">
              <a
                id="end-section-title-link"
                href="https://wa.me/573208191724?text=Hola%20Zensory,%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-6xl md:text-[10rem] font-black font-heading hover:text-[#00f2ff] transition-all cursor-pointer leading-none tracking-tighter text-white"
              >
                ¡Hagámoslo<br />realidad!
              </a>
            </div>
          </div>

          <div id="end-bottom" className="mt-24 flex flex-col items-center gap-6 text-gray-300 animate-bounce">
            <div id="end-bottom-text-container">
              <div id="end-bottom-text" className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">CONTINUE TO SCROLL</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Footer Section - Corresponds to Lusion's #footer-section */}
      <div id="footer-section" className="section relative bg-white border-t border-gray-100 text-black px-6 md:px-12 pb-12 pt-24">
        <div id="footer-bg" className="absolute inset-0 bg-white z-0"></div>
        <div id="footer-top"></div>

        <div id="footer-middle" className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

          <div id="footer-middle-contact" className="contents">
            {/* Using 'contents' to keep grid layout or wrap them */}
            {/* But Lusion has nested divs. I'll wrap them in col divs to match Zensory grid visually but try to assign IDs */}

            {/* Column 1: Address */}
            <div>
              <div className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-gray-400">Atención</div>
              <a id="footer-contact-address" href="#!" className="block not-italic text-gray-600 leading-loose text-lg hover:text-[#00f2ff] transition-colors">
                <div className="footer-address-line">Servicio a Domicilio</div>
                <div className="footer-address-line">Tecnología de Rehabilitación</div>
                <div className="footer-address-line">Bogotá / Internacional</div>
                <div className="footer-address-line">Zensory Health</div>
              </a>
            </div>

            {/* Column 2: Socials (and Enquiries logic in Zensory) */}
            <div>
              <div className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-gray-400">Canales</div>
              <div id="footer-contact-socials" className="flex flex-col gap-5 text-gray-600 font-bold">
                <a className="footer-socials-line hover:text-[#00f2ff] transition-colors flex items-center gap-3" href="https://www.instagram.com/zensory_rehab" target="_blank">
                  <span className="footer-socials-text">Instagram</span>
                </a>
                <a className="footer-socials-line hover:text-[#00f2ff] transition-colors flex items-center gap-3" href="https://wa.me/573208191724" target="_blank">
                  <span className="footer-socials-text">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Column 3: Business/Contact */}
            <div>
              <div className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-gray-400">Consultas</div>
              <div id="footer-contact-enquires" className="mb-8">
                <div id="footer-enquires-header" className="text-[10px] text-gray-300 uppercase tracking-widest mb-3 font-black">Contacto</div>
                <a id="footer-enquires-link" href="mailto:zensoryrehab@gmail.com" className="text-xl font-bold hover:text-[#00f2ff] transition-colors">zensoryrehab@gmail.com</a>
              </div>
            </div>

          </div>

          {/* Newsletter could be here if we want to match Lusion exactly, but Zensory design didn't feature it prominently in footer grid. 
                I'll omit or hide it to match Zensory's original footer content priorities. 
            */}
        </div>

        <div id="footer-bottom" className="relative z-10 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
          <div id="footer-bottom-copyright">©2025 ZENSORY SALUD AVANZADA</div>

          <div className="flex gap-10">
            <a href="#!" onClick={handleLinkClick} className="hover:text-black transition-colors">Privacidad</a>
            <a href="#!" onClick={handleLinkClick} className="hover:text-black transition-colors">Cookies</a>
          </div>

          <div id="footer-bottom-tagline" className="flex items-center gap-2">
            Built by ZENSORY <span className="text-[#76ff03] text-lg leading-none">⚡</span>
          </div>

          <div id="footer-bottom-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer hover:bg-black hover:text-white p-2 rounded transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M12 22a1 1 0 0 1-1-1V5.857l-6.223 6.224a1 1 0 0 1-1.415-1.415l7.9-7.9a1 1 0 0 1 1.414 0v.001l7.9 7.9a1 1 0 0 1-1.414 1.414L13 5.919V21a1 1 0 0 1-1 1Z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
