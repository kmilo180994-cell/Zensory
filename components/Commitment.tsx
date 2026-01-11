
import React from 'react';

const Commitment: React.FC = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Symmetrical Top Block: Benefits */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-20 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto w-full">
          <h2 className="text-sm font-black tracking-[0.5em] uppercase text-gray-500 mb-16 text-center">
            Beneficios Zensory
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Comodidad',
                desc: 'Recibe terapia de alta calidad sin salir de tu entorno seguro.',
                num: '01'
              },
              {
                title: 'Ahorro de tiempo',
                desc: 'Elimina desplazamientos y esperas innecesarias en salas de hospital.',
                num: '02'
              },
              {
                title: 'Datos objetivos',
                desc: 'Progreso medido con precisión métrica y visualización de logros.',
                num: '03'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="relative group">
                <span className="text-[8rem] font-black text-white/[0.03] absolute -top-20 -left-4 pointer-events-none group-hover:text-[#00f2ff]/5 transition-colors duration-500">
                  {benefit.num}
                </span>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Symmetrical Bottom Block: Risk Management */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-20 bg-gradient-to-b from-black to-[#020022]">
        <div className="max-w-[1000px] mx-auto w-full text-center">
          <header className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-white mb-6">
              Compromiso y <span className="text-gradient">Transparencia</span>
            </h2>
            <div className="w-20 h-1 bg-[#76ff03] mx-auto" />
          </header>

          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2rem] mb-16 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#76ff03] mb-6">Gestión de Riesgos Clínicos</h3>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed italic">
              "La seguridad del paciente es nuestra prioridad absoluta. Cada usuario es sometido a una evaluación clínica exhaustiva por nuestro comité de especialistas para determinar la viabilidad de la telerrehabilitación. Solo procedemos cuando el protocolo garantiza un entorno de recuperación seguro, controlado y altamente efectivo."
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://wa.me/573208191724?text=Hola%20Zensory,%20deseo%20hablar%20con%20un%20especialista" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full text-sm font-black tracking-[0.2em] uppercase hover:bg-[#00f2ff] hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Hablar con un Especialista
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f2ff] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
    </section>
  );
};

export default Commitment;
