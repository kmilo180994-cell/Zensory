
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReelSection from './components/ReelSection';
import Footer from './components/Footer';
import GoalSection from './components/GoalSection';
import Specialties from './components/Specialties';
import Telehealth from './components/Telehealth';
import Commitment from './components/Commitment';
import TechShowcase from './components/TechShowcase';
import ZensoryMusic from './components/ZensoryMusic';
import AppProgress from './components/AppProgress';
import TrustAndLegal from './components/TrustAndLegal';
import BackgroundVideo from './components/BackgroundVideo';
import './index.css';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = useCallback(() => {
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (height > 0) {
      const scrolledValue = Math.min(100, Math.max(0, (winScroll / height) * 100));
      setScrolled(scrolledValue);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <BackgroundVideo>
      <div className="relative min-h-screen bg-transparent">

        {/* Scroll indicator */}
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00f2ff] to-[#76ff03] z-[100] transition-transform duration-150 ease-out origin-left w-full"
          style={{ transform: `scaleX(${scrolled / 100})` }}
        />

        <div id="ui" className="relative z-10 w-full bg-transparent">
          <Header />

          <div id="page-container" className="relative w-full bg-transparent">
            <div id="page-container-inner" className="relative w-full bg-transparent">
              <div id="home" className="page w-full bg-transparent">
                <div id="inicio">
                  <Hero progress={scrolled} />
                </div>

                <div id="especialidades">
                  <Specialties />
                </div>

                <div id="tech">
                  <TechShowcase />
                  <Telehealth />
                  <ZensoryMusic />
                </div>

                <div id="beneficios">
                  <AppProgress />
                  <TrustAndLegal />
                  <Commitment />
                </div>

                <div id="reel">
                  <ReelSection />
                </div>

                {/* WorkGrid removed as requested */}
                <GoalSection />
              </div>
            </div>

            <div id="page-extra-sections" className="relative w-full bg-transparent">
              <div id="contacto">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default App;
