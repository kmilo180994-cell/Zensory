
import React from 'react';
import { Project } from '../types';

const PROYECTOS: Project[] = [
  {
    id: '1',
    title: 'Digital Genesis',
    tags: ['Web', 'Diseño', '3D'],
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1908&auto=format&fit=crop',
    colorBg: '#020617',
    colorText: '#ffffff'
  },
  {
    id: '2',
    title: 'Ethereal Motion',
    tags: ['Concepto', 'Ilustración 3D', 'Motion'],
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2034&auto=format&fit=crop',
    colorBg: '#0f172a',
    colorText: '#ffffff'
  },
  {
    id: '3',
    title: 'Synthetic Minds',
    tags: ['Interactivo', 'Desarrollo'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    colorBg: '#1e293b',
    colorText: '#ffffff'
  },
  {
    id: '4',
    title: 'Spatial Harmony',
    tags: ['Web', 'Diseño', 'AR'],
    image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop',
    colorBg: '#020617',
    colorText: '#ffffff'
  }
];

const WorkGrid: React.FC = () => {
  return (
    <div id="home-featured" className="section py-24 px-6 md:px-12 bg-white text-black">

      {/* Title Section */}
      <div id="home-featured-title-top" className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8">
        <div id="home-featured-title-wrapper">
          <h4 id="home-featured-title" className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-6 font-bold">Featured Work / Proyectos Destacados</h4>
          <h2 className="text-6xl md:text-8xl font-black font-heading tracking-tighter">Creaciones con Pasión</h2>
        </div>
        <div id="home-featured-disclaimer" className="max-w-xs text-gray-400 uppercase text-[10px] tracking-[0.3em] leading-loose font-bold">
          Una selección de nuestros trabajos más apasionantes realizados para clientes y amigos visionarios.
        </div>
      </div>

      {/* Project List */}
      <div className="project-list max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {PROYECTOS.map((project, idx) => (
          <a // Changed to anchor to match Lusion structure (or div with onClick)
            key={project.id}
            href="#!"
            className={`project-item project-type-website group cursor-pointer block ${idx % 2 !== 0 ? 'md:mt-48' : ''}`}
            data-id={project.id}
          >
            <div className="project-item-main relative aspect-[4/5] overflow-hidden mb-10 bg-[#020022]">
              <div className="project-item-image w-full h-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/20 to-[#76ff03]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Lusion doesn't usually overlay "Ver Caso" button in center, but Zensory design had it. Keeping it as optional or removing if strict adherence. I'll keep it as it's good UX. */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="bg-black text-white px-10 py-4 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-white/10 backdrop-blur-md">Ver Caso</span>
                </div>
              </div>
            </div>

            <div className="project-item-footer overflow-hidden">
              <div className="project-item-line-1 text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-3 font-bold">
                {project.tags.join(' • ')}
              </div>
              <div className="project-item-line-2 flex items-center gap-4">
                <div className="project-item-line-2-icon w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="project-item-line-2-inner text-4xl font-black font-heading tracking-tighter group-hover:text-[#00f2ff] transition-colors duration-300">
                  {project.title}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Bottom */}
      <a id="home-featured-cta" href="#!" className="mt-40 flex justify-center group w-full" target="_blank">
        <button className="flex items-center gap-4 px-16 py-6 border-2 border-black rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 hover:scale-105">
          <span id="home-featured-cta-dot" className="w-2 h-2 bg-black rounded-full group-hover:bg-green-400 transition-colors"></span>
          <span id="home-featured-cta-text">Ver todos los proyectos</span>
          <span id="home-featured-cta-arrow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
              <path d="M1 1L11 6L1 11V1Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      </a>

    </div>
  );
};

export default WorkGrid;
