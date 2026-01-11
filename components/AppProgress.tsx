
import React from 'react';

const AppProgress: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#f8fafc] text-[#020022] py-24 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center">
      {/* Abstract Background Graphs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,800 Q250,750 500,400 T1000,100" fill="none" stroke="#00f2ff" strokeWidth="2" />
          <path d="M0,900 Q300,850 600,600 T1000,300" fill="none" stroke="#76ff03" strokeWidth="2" />
          <line x1="0" y1="0" x2="1000" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" />
          <line x1="0" y1="200" x2="1000" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" />
          <line x1="0" y1="400" x2="1000" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" />
          <line x1="0" y1="600" x2="1000" y2="600" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Content: Features */}
        <div>
          <header className="mb-12">
            <div className="inline-block px-4 py-1 rounded-full border border-black/10 bg-black/5 mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Analytics Cloud</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter mb-8 leading-[1.1]">
              Tu Progreso en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#76ff03] filter brightness-75">Datos Objetivos</span>
            </h2>
            <p className="text-lg text-gray-500 font-light max-w-lg leading-relaxed">
              Eliminamos la subjetividad de tu recuperación. Nuestra plataforma centraliza cada métrica para ofrecerte una visión científica de tu evolución.
            </p>
          </header>

          <div className="space-y-10 mb-12">
            {[
              {
                title: 'Evaluación inicial digital',
                desc: 'Mapeo completo de rangos de movimiento y fuerza muscular procesado por algoritmos avanzados.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                )
              },
              {
                title: 'Seguimiento en tiempo real',
                desc: 'Dashboard interactivo que muestra tu mejoría diaria con gráficos de tendencia claros.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                )
              },
              {
                title: 'Informes instantáneos',
                desc: 'Generación automática de reportes PDF detallados para compartir con tu médico tratante.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9V2h12v7" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                )
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#00f2ff] shadow-sm group-hover:bg-[#00f2ff] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-gray-400 max-w-md">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/573208191724?text=Hola%2C%20quiero%20que%20me%20brindes%20informacion%20sobre%20Zensory%20App%20y%20sus%20otros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-[#020022] text-white rounded-full text-xs font-black tracking-[0.2em] uppercase hover:bg-[#00f2ff] hover:scale-105 transition-all shadow-xl"
          >
            REGISTRARME EN LA APP
          </a>
        </div>

        {/* Right Content: App Mockup */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/20 to-transparent blur-[100px] rounded-full animate-pulse"></div>

          <div className="relative bg-white border border-black/5 rounded-[3rem] p-4 shadow-2xl overflow-hidden aspect-[9/16] max-w-[400px] mx-auto border-t-8 border-t-[#1e293b]">
            <div className="w-full h-full bg-gray-50 rounded-[2.5rem] p-6 flex flex-col gap-6">
              {/* Fake UI elements */}
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="w-20 h-4 bg-gray-200 rounded-full" />
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-black/5">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Estado Actual</p>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-4xl font-black">84%</h4>
                  <span className="text-xs text-[#76ff03] font-bold">+12% esta semana</span>
                </div>
                <div className="mt-4 h-32 w-full flex items-end gap-1">
                  {[40, 60, 45, 80, 55, 90, 84].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#00f2ff] to-[#76ff03] rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#020022] p-4 rounded-3xl text-white">
                  <p className="text-[8px] uppercase tracking-widest opacity-60 mb-1">Flexión</p>
                  <p className="text-xl font-bold">115°</p>
                </div>
                <div className="bg-white border border-black/5 p-4 rounded-3xl">
                  <p className="text-[8px] uppercase tracking-widest text-gray-400 mb-1">Sesiones</p>
                  <p className="text-xl font-bold">24/30</p>
                </div>
              </div>

              <div className="mt-auto bg-white p-6 rounded-3xl shadow-sm border border-black/5 text-center">
                <button className="w-full py-3 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">
                  Imprimir Informe PDF
                </button>
              </div>
            </div>
          </div>

          {/* Floating Data Badge */}
          <div className="absolute -right-4 top-1/4 bg-white shadow-xl p-4 rounded-2xl border border-black/5 animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#76ff03]"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Sincronizado</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default AppProgress;
