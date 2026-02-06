import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#050505] z-0"></div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0"></div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Red Privada Operativa • Q1 2026</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
                            El Mercado Inmobiliario es una <span className="text-white/40 font-serif italic">Selva Opaca.</span><br />
                            Archer es tu Mapa.
                        </h1>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Inteligencia de Datos (OSINT) + Certeza Jurídica Blindada.
                            Accede a la única red de canje y flipping verificada de Chile.
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button onClick={onOpenModal} className="btn-gold min-w-[240px]">
                                Solicitar Acreditación
                            </button>
                            <button className="btn-outline min-w-[240px] group">
                                Leer el Manifiesto
                                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
