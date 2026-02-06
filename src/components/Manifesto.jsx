import React from 'react';
import { Reveal } from './Reveal';

const Manifesto = () => {
    return (
        <section className="section py-32 bg-rich-black relative" id="manifiesto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Editorial Image Side */}
                    <Reveal>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative aspect-[3/4] bg-[#111] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-white/10">
                                {/* Placeholder for Founder Image - High Contrast BW */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-serif font-bold">
                                    A
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-8 left-8 border-l-2 border-gold pl-6">
                                    <p className="font-serif text-2xl text-white italic">"No vendemos casas. Vendemos certeza."</p>
                                    <p className="text-gold text-xs uppercase tracking-widest mt-2">Flavio, Fundador</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Copy Side */}
                    <div>
                        <Reveal delay={0.2}>
                            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
                                <span className="block text-gold text-sm font-sans uppercase tracking-[0.3em] mb-4">La Disrupción</span>
                                No somos una inmobiliaria. <br />
                                <span className="opacity-50">Somos el fin de la burocracia.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="space-y-8 text-lg text-white/60 font-light">
                                <p>
                                    Durante décadas, el mercado ha funcionado con reglas obsoletas y estafas ocultas. Las "Inmobiliarias Boutique" son solo oficinas bonitas con los mismos vicios de siempre.
                                </p>
                                <p className="text-white border-l border-white/20 pl-6">
                                    Archer nació para romper el ciclo. Usamos <strong className="text-gold font-normal">Inteligencia Militar (OSINT)</strong>, no intuición. Blindamos cada operación legalmente antes de siquiera publicarla.
                                </p>
                                <p>
                                    Si buscas café y simpatía, ve a la competencia. Si buscas rentabilidad, velocidad y datos duros, bienvenido a Archer.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Manifesto;
