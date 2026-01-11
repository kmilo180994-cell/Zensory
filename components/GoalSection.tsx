import React from 'react';

const GoalSection: React.FC = () => {
  return (
    <div id="home-goal" className="section relative py-40 px-6 md:px-12 bg-[#020022] overflow-hidden">

      {/* Context Area (Title + Text) */}
      <div id="home-goal-context" className="relative z-10 w-full mb-32">
        <div id="home-goal-context-inner" className="max-w-[1200px] mx-auto text-center">

          <div id="home-goal-title" className="text-5xl md:text-8xl font-black font-heading mb-20 leading-[0.9] tracking-tighter text-white">
            Conectamos ideales con <br />
            experiencias <span className="text-gradient">únicas</span>
          </div>

          <div id="home-goal-texts" className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left text-gray-400">
            <div className="home-goal-texts-paragraph text-xl leading-relaxed font-light">
              En ZENSORY, no seguimos tendencias solo porque sí. Creemos en un enfoque diferente: uno centrado en ti, tu audiencia y el arte de crear experiencias memorables y personalizadas.
            </div>
            <div className="home-goal-texts-paragraph text-xl leading-relaxed font-light">
              Nuestro compromiso va más allá de las modas pasajeras; se trata de diseñar trayectorias digitales a medida que resuenen de manera única y dejen un impacto duradero en cada interacción.
            </div>
          </div>
        </div>
      </div>

      {/* Tunnel Title (Decoration) */}
      <div id="home-goal-tunnel-title" className="text-center mb-20 opacity-0 md:opacity-100">
        <div className="home-goal-tunnel-title-line text-xs uppercase tracking-[0.5em] text-[#00f2ff] font-bold">Step into a new era</div>
        <div className="home-goal-tunnel-title-line text-xs uppercase tracking-[0.5em] text-[#76ff03] font-bold">of digital health</div>
      </div>

      {/* Visual Tunnel Elements (Placeholders) */}
      <div id="home-goal-image-in-outer" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-20">
        <div id="home-goal-image-in-inner" className="w-full h-full bg-gradient-to-r from-[#00f2ff] to-[#76ff03] rounded-full blur-[100px]"></div>
      </div>

      <div id="home-goal-image-out-outer">
        <div id="home-goal-image-out-inner"></div>
      </div>

    </div>
  );
};

export default GoalSection;
