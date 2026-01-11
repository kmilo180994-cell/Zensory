
import React from 'react';

const TrustAndLegal: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#020022] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="mb-20">
          <div className="inline-block px-4 py-1 rounded-full border border-[#76ff03]/20 bg-[#76ff03]/5 mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#76ff03]">Institucional</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-white mb-6">
            Confianza y <span className="text-gradient">Marco Legal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            Operamos bajo los más altos estándares de ética clínica y seguridad digital en Colombia, 
            garantizando una atención humana respaldada por la ley.
          </p>
        </header>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#00f2ff]/10 blur-3xl rounded-full group-hover:bg-[#00f2ff]/20 transition-colors"></div>
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#00f2ff]"></span> Misión
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light italic">
              "Transformar la experiencia de recuperación de las personas llevando rehabilitación integral de alta calidad directamente a su hogar. Combinamos la calidez humana de nuestros profesionales con tecnología de vanguardia para devolver la autonomía y esperanza a nuestros pacientes."
            </p>
          </div>

          <div className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#76ff03]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#76ff03]/10 blur-3xl rounded-full group-hover:bg-[#76ff03]/20 transition-colors"></div>
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#76ff03]"></span> Visión 2030
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light italic">
              "Ser la empresa líder en salud digital y rehabilitación domiciliaria en Colombia, reconocida por revolucionar el sector mediante el uso de inteligencia artificial. Aspiramos a ser el referente donde la tecnología y la salud convergen para crear procesos más rápidos, medibles y humanos."
            </p>
          </div>
        </div>

        {/* Legal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16 border-t border-white/5">
          {/* Habeas Data */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8 text-[#00f2ff]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h4 className="text-xs font-black uppercase tracking-[0.4em]">Protección de Datos</h4>
            </div>
            <h5 className="text-xl font-bold text-white mb-6">Habeas Data (Ley 1581)</h5>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              <p><strong className="text-gray-300">Responsabilidad:</strong> Zensory cumple con la Ley 1581 de 2012 y el Decreto 1377 de 2013.</p>
              <p><strong className="text-gray-300">Datos Sensibles:</strong> Recolectamos datos clínicos tratados con estricta reserva médica y protocolos de alta seguridad.</p>
              <p><strong className="text-gray-300">Derechos:</strong> Usted tiene el derecho constitucional de conocer, actualizar y suprimir sus datos en cualquier momento.</p>
            </div>
          </div>

          {/* Consentimiento Informado */}
          <div className="lg:col-span-2 bg-white/[0.01] p-10 rounded-3xl border border-white/5">
            <div className="flex items-center gap-4 mb-8 text-[#76ff03]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <h4 className="text-xs font-black uppercase tracking-[0.4em]">Ética Clínica</h4>
            </div>
            <h5 className="text-xl font-bold text-white mb-8">Consentimiento Informado en Zensory</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
              <div>
                <p className="mb-4"><span className="text-[#76ff03] font-bold">●</span> <strong className="text-gray-300">Integralidad:</strong> Detallamos beneficios y riesgos de cada especialidad (Fisioterapia, Respiratoria, Ocupacional, etc.).</p>
                <p><span className="text-[#76ff03] font-bold">●</span> <strong className="text-gray-300">Tecnología:</strong> Informamos explícitamente sobre el uso de App de telerrehabilitación e IA.</p>
              </div>
              <div>
                <p className="mb-4"><span className="text-[#76ff03] font-bold">●</span> <strong className="text-gray-300">Flexibilidad:</strong> Permitimos la firma de acudientes y manejamos cláusulas opcionales para fines educativos.</p>
                <p><span className="text-[#76ff03] font-bold">●</span> <strong className="text-gray-300">Revocabilidad:</strong> Usted puede revocar su consentimiento en cualquier momento sin afectar sus derechos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndLegal;
