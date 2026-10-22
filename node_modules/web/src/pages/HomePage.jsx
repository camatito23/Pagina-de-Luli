import React from 'react';

const HomePage = () => {
    return (
        <main className="relative overflow-hidden bg-[#fff8f2] min-h-screen">
            
            {/* BARRA DE NAVEGACIÓN SUPERIOR */}
            <nav className="flex justify-between items-center p-6 absolute top-0 w-full z-20">
                 <div className="font-['Great_Vibes'] text-3xl text-[#c98b7e] drop-shadow-sm">
                    Luli<span className="text-sm font-sans tracking-widest text-[#8e514b] ml-1">xv</span>
                 </div>
                 <div className="text-[#8e514b] border-b border-[#c98b7e] pb-1 text-sm tracking-wider font-semibold">
                    Inicio
                 </div>
            </nav>

            {/* FLORES NUEVAS EN LAS ESQUINAS (Tus archivos de la carpeta public) */}
            <img src="/flor-sup-izq.png" alt="" className="absolute top-0 left-0 w-[200px] md:w-[320px] z-10 pointer-events-none opacity-90" />
            <img src="/flor-sup-der.png" alt="" className="absolute top-0 right-0 w-[200px] md:w-[320px] z-10 pointer-events-none opacity-90" />
            
            {/* SECCIÓN 1: BIENVENIDA Y CUENTA REGRESIVA */}
            <section className="luli-hero pt-32 pb-16 relative z-10">
               <div className="luli-hero__inner text-center">
                   
                   <p className="luli-hero__kicker text-sm tracking-[0.3em] font-semibold text-[#8e514b]">
                       TE ESPERO PARA CELEBRAR
                   </p>
                   
                   <div className="luli-hero__rule my-3">
                       <div className="luli-hero__rule-line"></div>
                       <div className="luli-hero__rule-diamond"></div>
                       <div className="luli-hero__rule-line"></div>
                   </div>
                   
                   <h1 className="luli-hero__title luli-hero__title-main mt-4 text-7xl md:text-8xl">
                       Luli
                   </h1>
                   
                   <h2 className="luli-hero__subtitle mt-4 text-xl tracking-[0.4em] text-[#8e514b]">
                       MIS 15 AÑOS
                   </h2>
                   
                   <div className="luli-hero__heart mx-auto mt-6"></div>
                   
                   <p className="luli-hero__lead mt-6 max-w-2xl mx-auto px-4 text-[#9a6a64] leading-relaxed">
                       Hay momentos especiales que solo son completos cuando los compartimos con la gente que más queremos. Festejemos juntos esta noche inolvidable.
                   </p>

                   <div className="luli-hero__date-pill mt-10 mb-6 bg-[#8f9a6e] text-[#f7f4ea] px-6 py-2 rounded-full font-bold tracking-widest text-sm shadow-md inline-block">
                       8 DE ENERO DE 2027
                   </div>
                   
                   <p className="countdown-tagline text-2xl font-['Great_Vibes'] text-[#c98b7e] mt-2 mb-6">
                       Faltan para mi gran noche <span className="countdown-tagline-heart inline-block ml-1"></span>
                   </p>

                   <div className="countdown-grid grid grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto px-4">
                        <div className="countdown-card flex flex-col items-center justify-center bg-white/90 p-3 rounded-xl shadow-sm border border-[#b4874d]/20">
                            <span className="countdown-number text-3xl md:text-5xl font-medium text-[#5f3f3c]">136</span>
                            <span className="countdown-label text-xs tracking-widest text-[#c97f72] mt-1 font-bold">DÍAS</span>
                        </div>
                        <div className="countdown-card flex flex-col items-center justify-center bg-white/90 p-3 rounded-xl shadow-sm border border-[#b4874d]/20">
                            <span className="countdown-number text-3xl md:text-5xl font-medium text-[#5f3f3c]">02</span>
                            <span className="countdown-label text-xs tracking-widest text-[#c97f72] mt-1 font-bold">HORAS</span>
                        </div>
                        <div className="countdown-card flex flex-col items-center justify-center bg-white/90 p-3 rounded-xl shadow-sm border border-[#b4874d]/20">
                            <span className="countdown-number text-3xl md:text-5xl font-medium text-[#5f3f3c]">54</span>
                            <span className="countdown-label text-xs tracking-widest text-[#c97f72] mt-1 font-bold">MIN</span>
                        </div>
                        <div className="countdown-card flex flex-col items-center justify-center bg-white/90 p-3 rounded-xl shadow-sm border border-[#b4874d]/20">
                            <span className="countdown-number text-3xl md:text-5xl font-medium text-[#5f3f3c]">05</span>
                            <span className="countdown-label text-xs tracking-widest text-[#c97f72] mt-1 font-bold">SEG</span>
                        </div>
                   </div>

                   <a href="#" className="luli-hero__cta mt-10 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#e8b4b8] to-[#c97f72] text-[#3c2a2d] font-bold tracking-wide shadow-lg hover:translate-y-[-2px] transition-transform">
                       Confirmar por WhatsApp
                   </a>
               </div>
            </section>

            {/* SECCIÓN 2: DETALLES DE LA FIESTA */}
            <section className="luli-details relative z-10 py-16 px-4">
                 <div className="luli-details__inner max-w-5xl mx-auto text-center">
                     
                     <div className="luli-details__rule mb-4 flex justify-center text-[#b4874d]">
                         <div className="luli-details__rule-diamond w-2 h-2 rotate-45 bg-current"></div>
                     </div>
                     
                     <h2 className="luli-details__title text-4xl md:text-5xl text-[#8e514b] mb-4">Todo lo que necesitas saber</h2>
                     <p className="luli-details__lead max-w-2xl mx-auto text-[#9a6a64] mb-12">
                         Para que no te pierdas ningún detalle de esta noche inolvidable, aquí te dejamos la información más importante.
                     </p>

                     <div className="luli-details__grid grid grid-cols-1 md:grid-cols-3 gap-6">
                         {/* Tarjeta 1 */}
                         <div className="luli-details__card bg-white/90 p-8 rounded-2xl shadow-sm border border-[#b4874d]/20 flex flex-col items-center">
                             <div className="luli-details__icon w-12 h-12 mb-4 bg-gradient-to-br from-[#f0c9c2] to-[#e8b4b8] rounded-xl flex items-center justify-center text-[#5f3f3c] shadow-sm">
                                 📅
                             </div>
                             <h3 className="luli-details__card-title text-xl text-[#8e514b] mb-3">Fecha y Horario</h3>
                             <p className="luli-details__card-text text-[#9a6a64] text-sm leading-relaxed">
                                 Viernes, 8 de Enero de 2027. La celebración comenzará a las 21:00 hs.
                             </p>
                         </div>
                         
                         {/* Tarjeta 2 */}
                         <div className="luli-details__card bg-white/90 p-8 rounded-2xl shadow-sm border border-[#b4874d]/20 flex flex-col items-center">
                             <div className="luli-details__icon w-12 h-12 mb-4 bg-gradient-to-br from-[#f0c9c2] to-[#e8b4b8] rounded-xl flex items-center justify-center text-[#5f3f3c] shadow-sm">
                                 📍
                             </div>
                             <h3 className="luli-details__card-title text-xl text-[#8e514b] mb-3">Ubicación del Salón</h3>
                             <p className="luli-details__card-text text-[#9a6a64] text-sm leading-relaxed">
                                 Salón de Eventos Jano's, Campana. Te esperamos para celebrar.
                             </p>
                         </div>
                         
                         {/* Tarjeta 3 */}
                         <div className="luli-details__card bg-white/90 p-8 rounded-2xl shadow-sm border border-[#b4874d]/20 flex flex-col items-center">
                             <div className="luli-details__icon w-12 h-12 mb-4 bg-gradient-to-br from-[#f0c9c2] to-[#e8b4b8] rounded-xl flex items-center justify-center text-[#5f3f3c] shadow-sm">
                                 👗
                             </div>
                             <h3 className="luli-details__card-title text-xl text-[#8e514b] mb-3">Dress Code</h3>
                             <p className="luli-details__card-text text-[#9a6a64] text-sm leading-relaxed">
                                 Para esta noche especial, el código de vestimenta es Elegante Formal. ¡Vístete para brillar!
                             </p>
                         </div>
                     </div>

                     <div className="text-center mt-12 mb-24">
                        <a href="#" className="luli-details__cta inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#e8b4b8] to-[#c97f72] text-[#3c2a2d] font-bold tracking-wide shadow-lg hover:translate-y-[-2px] transition-transform">
                            Ver en Google Maps
                        </a>
                     </div>
                 </div>
            </section>

            {/* FLORES INFERIORES */}
            <img src="/flor-inf-izq.png" alt="" className="absolute bottom-0 left-0 w-[200px] md:w-[320px] z-10 pointer-events-none opacity-90" />
            <img src="/flor-inf-der.png" alt="" className="absolute bottom-0 right-0 w-[200px] md:w-[320px] z-10 pointer-events-none opacity-90" />
            
        </main>
    );
}

export default HomePage;