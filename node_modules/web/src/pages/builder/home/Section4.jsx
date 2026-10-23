import React from 'react';
import foto1 from '../../../assets/Fotos1.jpeg';

export default function Section4() {
    // Difuminado muy suave (de 25% a 75% es sólido, el resto se mezcla)
    const fadeMaskStyle = {
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
    };

    return (
        <section id="galeria" className="relative pt-4 pb-16 flex flex-col items-center w-full">
            <div className="relative w-full flex flex-col items-center text-center">

                <div className="w-full">
                    <img 
                        src={foto1} 
                        alt="Sesión Luli" 
                        className="w-full h-auto min-h-[450px] sm:min-h-[650px] object-cover block opacity-95"
                        style={fadeMaskStyle}
                    />
                </div>

                <div className="relative z-10 w-full max-w-sm mx-auto px-6 flex flex-col items-center -mt-1">
                    {/* Ícono de Regalo */}
                    <div className="mb-4 opacity-90" style={{ color: '#8e514b' }}>
                        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="8" width="18" height="4" rx="1" />
                            <path d="M12 8v13" />
                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                        </svg>
                    </div>

                    {/* Título Regalos igualado exactamente a los subtítulos de Fecha y horario */}
                    <h3 className="text-xl font-serif !text-[#8e514b] mb-1 font-medium">Regalos</h3>                     
                    
                    <p className="text-[#7a5048] text-base font-serif italic mb-4 max-w-xs leading-relaxed">
                        El mejor regalo para mi es tu presencia.  Pero si queres hacerme un obsequio, habrá una urna en el salón o podes transferirme al siguiente alias:
                    </p>

                    <div className="w-full border-t border-b border-[#8e514b]/20 py-5 mb-8">
                        <div className="flex flex-col gap-3 text-[#8e514b] font-sans">
                            <div>
                                <span className="block text-xs uppercase tracking-widest mb-3 text-[#7a5048]">Alias</span>
                                <strong className="text-lg tracking-wide">lulivulich</strong>
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-widest mb-3 text-[#7a5048] mt-3">CBU</span>
                                <strong className="text-base tracking-wide break-all">0000003100099693711366</strong>
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-widest mb-3 text-[#7a5048] mt-3">NOMBRE Y APELLIDO</span>
                                <strong className="text-base tracking-wide break-all">Lucila Vulich</strong>
                            </div>
                        </div>
                    </div>

                    {/* Botón de Realizar Transferencia */}
                    <a 
                        href="https://mpago.la/2vdrDb7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-[#dcad99] text-white font-serif text-sm uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#cb9b87]"
                    >
                        <span>Realizar transferencia</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}