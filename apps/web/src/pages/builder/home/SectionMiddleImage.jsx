import React from 'react';
import fotoNueva from '../../../assets/Fotos2.jpeg'; // Cambiá por el nombre de tu foto si es otro

export default function SectionMiddleImage() {
    // Desvanecimiento suave y equilibrado (solo difumina los extremos superior e inferior)
    const fadeMaskStyle = {
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'
    };

    return (
        <section className="relative w-full py-4 flex flex-col items-center">
            <div className="w-full overflow-hidden">
                <img 
                    src={fotoNueva} 
                    alt="Momento Luli" 
                    className="w-full h-auto min-h-[450px] sm:min-h-[650px] object-cover block opacity-95"
                    style={fadeMaskStyle}
                />
            </div>
        </section>
    );
}