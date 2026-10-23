import React from 'react';
import fotoFinal from '../../../assets/Foto final.jpeg';

export default function Section5() {
    const numeroWhatsApp = "5493487214253";
    
    // Mensaje corto, directo y que arranca de una con el saludo a Luli
    const mensaje = "¡Hola Luli!👋🏼 Te confirmo que voy a tus 15. Mi nombre es: [Tu Nombre] y sobre la comida mis restricciones son:";
    
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Máscara superior muy suave para fundir la foto del teatro con elegancia
    const fadeTopMask = {
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)'
    };

    return (
        <section id="rsvp" className="relative flex flex-col items-center justify-center w-full pt-10">
            
            {/* Bloque de confirmación con mayor espacio y respiro abajo */}
            <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center px-8 mb-12">
                
                {/* Ícono de confirmación elegante */}
                <div className="mb-6 text-[#8e514b] opacity-90">
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>

                <h3 className="text-3xl font-serif mb-4 font-medium" style={{ color: '#8e514b' }}>
                    ¡Confirma tu asistencia!
                </h3>
                
                <p className="text-[#7a5048] text-base font-serif italic mb-6 leading-relaxed">
                    Para mis XV, el viernes 8 de enero de 2027. ¡Espero contar con tu presencia!
                </p>

                {/* Botón de WhatsApp unificado */}
                <a 
                    href={linkWhatsApp}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#d4a393] text-white font-serif text-sm uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#c39282]"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    <span>Confirmar por WhatsApp</span>
                </a>

                <p className="mt-6 text-sm text-[#8e514b]/80 font-sans italic">
                    Por favor, confirma antes del 27 de noviembre. ¡Gracias!
                </p>
            </div>

            {/* FOTO FINAL DEL TEATRO (Con espacio superior de respiro) */}
            <div className="w-full overflow-hidden mt-4">
                <img 
                    src={fotoFinal} 
                    alt="Luli Teatro" 
                    className="w-full h-auto min-h-[615px] sm:min-h-[700px] object-cover block opacity-95"
                    style={fadeTopMask}
                />
            </div>
        </section>
    );
}