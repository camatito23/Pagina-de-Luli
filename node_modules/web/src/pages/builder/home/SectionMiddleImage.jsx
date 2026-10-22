import React from 'react';
import fotoNueva from '../../../assets/Fotos2.jpeg'; // Cambiá por el nombre de tu foto si es otro

export default function SectionMiddleImage() {
    const fadeMaskStyle = {
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
    };

    return (
        <section className="relative w-full pt-4 pb-16 flex flex-col items-center">
            <div className="w-full">
                <img 
                    src={fotoNueva} 
                    alt="Momento Luli" 
                    className="w-full h-[60vh] md:h-[90vh] object-cover block opacity-95"
                    style={fadeMaskStyle}
                />
            </div>
        </section>
    );
}