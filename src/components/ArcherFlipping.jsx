import React from 'react';
import { Lock, Zap, EyeOff, Fingerprint } from 'lucide-react';
import { Reveal } from './Reveal';

const ArcherFlipping = ({ onOpenModal }) => {
    return (
        <section className="bg-rich-black py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5" id="flipping">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SECTION */}
                <div className="mb-16 md:text-left text-center">
                    <Reveal>
                        <h2 className="text-gold font-serif text-lg tracking-[0.2em] uppercase mb-4">
                            Capital Velocity
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Archer Speed: <span className="text-white/40">Arbitraje Táctico</span>
                        </h3>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-white/60 max-w-2xl text-lg leading-relaxed font-light">
                            Identificamos anomalías de precio en el mercado mediante OSINT.
                            Adquirimos, transformamos y liquidamos. Ciclos cortos, retornos agresivos.
                        </p>
                    </Reveal>
                </div>

                {/* THE "PRIVATE VAULT" GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* CARD 1: EXPLAINER */}
                    <Reveal delay={0.3}>
                        <div className="bg-card-black/50 border border-white/10 p-8 h-full rounded-sm hover:border-gold/30 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <Zap className="w-10 h-10 text-gold mb-6" />
                                <h4 className="text-xl text-white font-serif mb-3">Velocidad de Ejecución</h4>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    El tiempo es el enemigo de la TIR. Nuestros equipos de obra entran el día 1.
                                    Sin burocracia. Objetivo: Liquidez en menos de 180 días.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* CARD 2: BLURRED PROJECT (THE HOOK) */}
                    <Reveal delay={0.4}>
                        <div className="relative overflow-hidden bg-card-black border border-white/10 rounded-sm group h-full">
                            {/* Blurred Background Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-md grayscale transition-all duration-700 group-hover:opacity-30 group-hover:blur-sm"></div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                                <Lock className="w-12 h-12 text-white mb-4" />
                                <h4 className="text-2xl text-white font-serif mb-2">Proyecto: CLASSIFIED</h4>
                                <p className="text-gold font-mono text-sm tracking-widest mb-6">SOLO ACCESO ACREDITADO</p>

                                <div className="grid grid-cols-2 gap-4 w-full max-w-[200px] border-t border-white/10 pt-4 mb-6">
                                    <div>
                                        <p className="text-xs text-white/50 uppercase">ROI Est.</p>
                                        <p className="text-white font-bold text-lg blur-[4px] select-none">24%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 uppercase">Duración</p>
                                        <p className="text-white font-bold text-lg blur-[2px] select-none">6M</p>
                                    </div>
                                </div>

                                {/* Forensic Watermark Badge */}
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-red-900/20 border border-red-900/30 rounded text-[0.6rem] text-red-400 font-mono tracking-tight">
                                    <Fingerprint size={10} />
                                    <span>FORENSIC WATERMARK PROTECTED</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* CARD 3: METHODOLOGY */}
                    <Reveal delay={0.5}>
                        <div className="bg-card-black/50 border border-white/10 p-8 h-full rounded-sm hover:border-gold/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <EyeOff className="w-10 h-10 text-gold mb-6" />
                                <h4 className="text-xl text-white font-serif mb-3">Privacidad Absoluta</h4>
                                <p className="text-sm text-white/50 leading-relaxed mb-4">
                                    Nuestras oportunidades <i>Off-Market</i> no tocan los portales públicos.
                                </p>
                            </div>

                            <div className="border-t border-white/5 pt-4 mt-auto">
                                <p className="text-[0.7rem] text-white/30 leading-snug">
                                    * Toda documentación incluye <span className="text-gold/60">Trazabilidad Esteganográfica</span>.
                                    Cualquier filtración será perseguida legalmente por Violación de Secreto Comercial.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* CTA SECTION - THE VELVET ROPE */}
                <Reveal delay={0.6}>
                    <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p className="text-white font-serif text-lg">¿Buscas rotación de capital?</p>
                            <p className="text-white/50 text-sm">El acceso al Deal Flow de Flipping requiere entrevista previa.</p>
                        </div>
                        <button onClick={onOpenModal} className="btn-gold">
                            Solicitar Acceso al Vault
                        </button>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default ArcherFlipping;
