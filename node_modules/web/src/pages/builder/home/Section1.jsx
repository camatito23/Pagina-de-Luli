import React, { useEffect, useState } from 'react';
import fotoPortada from '../../../assets/Foto portada.jpeg';
import luliLogo from '../../../assets/LuliLogo.png';

const TARGET_DATE = new Date(2027, 0, 8, 21, 30, 0);

function getTimeLeft() {
    const diff = Math.max(TARGET_DATE.getTime() - Date.now(), 0);
    return {
        days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60,
    };
}

function CountdownCard({ value, label }) {
    return (
        <div className="flex flex-col items-center justify-center w-14 md:w-16 mx-2 bg-transparent">
            <span className="text-3xl md:text-4xl font-serif text-[#8e514b] leading-none mb-1">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#7a5048] font-sans uppercase">
                {label}
            </span>
        </div>
    );
}

export default function Section1() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative flex flex-col items-center justify-start pb-10 w-full">
            <div className="relative w-full flex flex-col items-center text-center">
                
                <div className="w-full">
                    <img 
                        src={fotoPortada} 
                        alt="Luli Portada" 
                        className="w-full h-auto min-h-[450px] sm:min-h-[650px] object-cover block opacity-95"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                        }}
                    />
                </div>

                {/* CAMBIO AQUÍ: Usamos -mt-32 para que todo suba más sobre la foto y quede compacto */}
                <div className="w-full px-4 flex flex-col items-center -mt-14 relative z-10">
                    
                    <p className="text-xl md:text-3xl -mt-0 font-serif tracking-widest text-[#7a5048] mb-6">2027</p>
                    <p className="text-sm md:text-base font-sans tracking-[0.2em] text-[#8e514b] mb-6 uppercase font-medium">
                        Viernes 8 de Enero
                    </p>

                    <p className="text-3xl md:text-4xl font-serif text-[#8e514b] mb-8">
                        Mis 15 Años
                    </p>

                    <p className="text-lg font-serif text-[#8e514b] mb-8 italic">Faltan...</p>
                    
                    <div className="flex flex-wrap justify-center mb-8 w-full max-w-sm mx-auto">
                        <CountdownCard value={timeLeft.days} label="DÍAS" />
                        <CountdownCard value={timeLeft.hours} label="HORAS" />
                        <CountdownCard value={timeLeft.minutes} label="MIN" />
                        <CountdownCard value={timeLeft.seconds} label="SEG" />
                    </div>
                </div>
            </div>
        </section>
    );
}