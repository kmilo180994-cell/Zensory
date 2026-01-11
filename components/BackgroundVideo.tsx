
import React from 'react';

interface BackgroundVideoProps {
    children: React.ReactNode;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* El Video: Siempre al fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                style={{ position: 'fixed', zIndex: -1 }} // Force fixed
            >
                <source src="/Header.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
            </video>
            {/* Overlay opcional para legibilidad */}
            <div className="fixed inset-0 bg-black/20 -z-[5]" />

            {/* El Contenido: Encima del video */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default BackgroundVideo;
