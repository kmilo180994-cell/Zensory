
import React from 'react';

const EQUIPMENT = [
  {
    name: 'Manos Hidráulicas',
    desc: 'Sistemas neumáticos de alta precisión para la rehabilitación intensiva de la motricidad fina y agarre.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    name: 'Electroacupuntura con Lápiz',
    desc: 'Estimulación puntual no invasiva con tecnología de frecuencia modulada para el alivio del dolor crónico.',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  },
  {
    name: 'Electroterapia',
    desc: 'Fortalecimiento muscular y manejo de inflamación mediante pulsos eléctricos de onda controlada.',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2'
  },
  {
    name: 'Nebulización Compresora',
    desc: 'Administración pulmonar eficiente con micropartículas para una absorción inmediata y efectiva.',
    icon: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 9v4 M12 15h.01'
  }
];

const TechShowcase: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full bg-[#050505] flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 py-20">
      
      {/* Moving Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#00f2ff] opacity-[0.1]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              filter: 'blur(1px)',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-[#00f2ff]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] w-full">
        <header className="mb-16 md:mb-24 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00f2ff]/20 bg-[#00f2ff]/5 mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#00f2ff]">Innovación</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-white mb-4">
            Zensory Tech: <br />
            <span className="text-gradient">Equipamiento de Vanguardia</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {EQUIPMENT.map((item, idx) => (
            <div 
              key={idx}
              className="group flex gap-6 p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,255,0.05)]"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-[#00f2ff] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-[#00f2ff] transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default TechShowcase;
