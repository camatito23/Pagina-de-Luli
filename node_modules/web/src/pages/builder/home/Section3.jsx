import React from 'react';

// IMPORTA AQUÍ TU IMAGEN: Asegúrate de que la ruta y el nombre sean correctos
import iconoVestido from '../../../assets/IconoVestido.png'; 

const DETAILS = [
    {
        id: 'fecha',
        icon: 'calendar',
        title: 'Fecha y horario',
        text: 'Viernes 8 de enero de 2027. La fiesta será de 21:00 a 05:00 hs.',
    },
    {
        id: 'ubicacion',
        icon: 'pin',
        title: 'Ubicación',
        text: "Salón de Eventos Jano's, Campana. Te esperamos para celebrar.",
    },
    {
        id: 'dress',
        title: 'Código de vestimenta',
        text: 'Elegante formal. Vestido largo o traje. (No se permite color verde ni rosa).',
    },
];

function DetailIcon({ name }) {
    const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', className: 'text-[#8e514b] opacity-90' };
    
    if (name === 'calendar') return <svg viewBox="0 0 24 24" width="28" height="28" {...common}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
    if (name === 'pin') return <svg viewBox="0 0 24 24" width="28" height="28" {...common}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    
    return null;
}

export default function Section3() {
    return (
        <section id="detalles" className="relative pt-1 pb-12 px-4 flex flex-col items-center w-full">
            <div className="relative z-10 w-full flex flex-col items-center text-center">
                
                <h2 className="text-5xl !text-[#8e514b] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>
                    Detalles de la noche
                </h2>
                
                <p className="text-[#7a5048] max-w-xs mb-10 text-base font-serif italic leading-relaxed">
                    Para que no te pierdas ningún detalle de esta noche inolvidable.
                </p>

                <div className="flex flex-col gap-8 w-full max-w-sm mx-auto mb-12">
                    {DETAILS.map((d) => (
                        <article key={d.id} className="flex flex-col items-center">
                            
                            <span className="mb-4">
                                {d.id === 'dress' ? (
                                    <span className="w-8 h-12 block text-[#8e514b]"> 
                                        <img 
                                            src={iconoVestido} 
                                            alt="Ícono Dress Code" 
                                            className="w-8 h-12 object-contain" 
                                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(21%) saturate(958%) hue-rotate(327%) brightness(92%) contrast(88%)' }}
                                        />
                                    </span>
                                ) : (
                                    <DetailIcon name={d.icon} />
                                )}
                            </span>
                            
                            <h3 className="text-xl font-serif !text-[#8e514b] mb-1 font-medium">
                                {d.title}
                            </h3>
                            
                            <p className="text-[#7a5048] text-sm leading-relaxed font-sans max-w-[280px] mx-auto">
                                {d.text}
                            </p>
                            
                            {/* Botón de Ubicación actualizado con el mismo color exacto (#d4a393) */}
                            {d.id === 'ubicacion' && (
                                <a 
                                    href="https://maps.app.goo.gl/P6ivHJvXdnDjxGGN8" 
                                    target="_blank" 
                                    rel="nofollow noreferrer" 
                                    className="mt-4 inline-block px-8 py-3 rounded-full bg-[#d4a393] text-[#fdf6f3] font-serif text-sm tracking-widest shadow-md hover:bg-[#c39282] transition-colors border border-[#d4a393]/40"
                                >
                                    Ver mapa de ubicación
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}