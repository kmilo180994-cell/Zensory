
import React from 'react';

const Telehealth: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 relative overflow-hidden" 
             style={{ background: 'radial-gradient(circle at center, #0a0a3a 0%, #020022 100%)' }}>
      
      {/* Visual background element - Scanning effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-[1px] border-[#00f2ff]/20 rounded-full scale-150 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-screen bg-gradient-to-b from-transparent via-[#00f2ff] to-transparent animate-[scan_4s_linear_infinite]"></div>
      </div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        {/* Badge IA */}
        <div className="inline-block mb-10">
          <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[#00f2ff]/30 bg-[#00f2ff]/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2ff]"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#00f2ff]">Tecnología IA</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-white mb-8 leading-[1.1]">
          Tu recuperación analizada <br />
          en <span className="text-gradient">tiempo real</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-16">
          Nuestra Inteligencia Artificial utiliza la cámara de tu dispositivo para analizar tus movimientos y corregir tu postura al instante, garantizando que cada ejercicio sea seguro y efectivo desde la comodidad de tu hogar.
        </p>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: 'Retroalimentación instantánea',
              desc: 'Corrección automática de postura mediante visión artificial avanzada.',
              icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              )
            },
            {
              title: 'Monitoreo por especialistas',
              desc: 'Tus datos son revisados constantemente por fisioterapeutas certificados.',
              icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              )
            },
            {
              title: 'Gamificación',
              desc: 'Convierte tu terapia en un juego y mantén la motivación al máximo.',
              icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M6 12h4m-2-2v4M15 9v0m3 3v0" />
                </svg>
              )
            }
          ].map((point, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-white font-bold mb-3 tracking-tight">{point.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { opacity: 0; transform: translateY(-100%) translateX(-50%); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(100%) translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default Telehealth;
