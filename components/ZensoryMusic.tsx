
import React, { useState } from 'react';

const ZensoryMusic: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#020015] px-6">

      {/* Dynamic Background Elements - Neon Audio Waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <div className="absolute inset-0 flex items-center justify-around">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="w-1 md:w-2 bg-gradient-to-t from-[#ff00ff] via-[#00f2ff] to-transparent rounded-full animate-audio-bar"
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>

        {/* Glow Spheres */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff00ff]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00f2ff]/20 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        {/* Floating Icon/Badge */}
        <div className="mb-12 inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff00ff] blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff00ff]">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter text-white mb-8 leading-[0.9]">
          Rehabilítate al ritmo <br />
          del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f2ff] drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">movimiento</span>
        </h2>

        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Fusionamos sensores de movimiento inerciales con entornos musicales inmersivos. <span className="text-white font-bold">Zensory Music</span> transforma el ejercicio tradicional aburrido en un desafío rítmico vibrante que te mantiene motivado en cada sesión.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative px-12 py-6 overflow-hidden rounded-full bg-white text-black font-black uppercase tracking-[0.3em] text-xs transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 group-hover:text-white transition-colors">Conoce la experiencia</span>
          </button>

          <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span>Play Game</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span>Feel Better</span>
          </div>
        </div>
      </div>

      {/* Grid Pattern Floor (Cyberpunk vibe) */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[linear-gradient(rgba(255,0,255,0)_0%,rgba(255,0,255,0.1)_100%)] opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          perspective: '1000px',
          transform: 'rotateX(60deg) scale(2)',
          transformOrigin: 'bottom'
        }} />
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-up">

            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 hover:bg-[#ff00ff] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md border border-white/20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Video */}
            <video
              src="/Zensorymusic.mp4"
              className="w-full h-full object-cover"
              autoPlay
              controls
              playsInline
            >
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes audio-bar {
          0%, 100% { height: 20%; transform: scaleY(1); }
          50% { height: 80%; transform: scaleY(1.2); }
        }
        .animate-audio-bar {
          animation: audio-bar 1.2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default ZensoryMusic;
