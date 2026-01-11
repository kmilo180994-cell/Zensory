
import React from 'react';

const SPECIALTIES = [
  {
    title: 'Fisioterapia',
    desc: 'Recuperación funcional y movimiento corporal.',
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.505 4.046 3 5.5L12 21l7-7Z" />
  },
  {
    title: 'Terapia Respiratoria',
    desc: 'Cuidado especializado de la función pulmonar.',
    icon: <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
  },
  {
    title: 'Terapia Ocupacional',
    desc: 'Independencia en actividades de la vida diaria.',
    icon: <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10l4 4h6a2 2 0 0 0 2-2v-7" />
  },
  {
    title: 'Fonoaudiología',
    desc: 'Rehabilitación del lenguaje, habla y audición.',
    icon: <path d="M12 6c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6Zm0-4c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" />
  },
  {
    title: 'Psicología',
    desc: 'Apoyo emocional y bienestar mental integral.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  }
];

const Specialties: React.FC = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f2ff] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-white mb-4">
            Especialidades <span className="text-gradient">Domiciliarias</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f2ff] to-transparent mx-auto mt-6" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SPECIALTIES.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:border-[#00f2ff]/50 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] hover:-translate-y-2 cursor-default"
            >
              <div className="mb-8 text-white group-hover:text-[#00f2ff] transition-colors duration-500">
                <svg 
                  viewBox="0 0 24 24" 
                  width="40" 
                  height="40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              
              <h3 className="text-xl font-bold font-heading text-white mb-4 tracking-tight group-hover:text-[#00f2ff] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#00f2ff] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
