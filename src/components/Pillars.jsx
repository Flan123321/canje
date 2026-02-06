import React from 'react';
import { Radar, ShieldCheck, Zap } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';

const PillarCard = ({ icon: Icon, title, description }) => {
    return (
        <StaggerItem>
            <div className="glass-card group h-full flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                        <Icon className="text-white/70 group-hover:text-gold transition-colors" size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl mb-4 font-serif text-white">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-gold text-xs uppercase tracking-widest">Saber más &rarr;</span>
                </div>
            </div>
        </StaggerItem>
    );
};

const Pillars = () => {
    return (
        <section className="section py-32 bg-[#080808]" id="inteligencia">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <span className="text-gold text-xs uppercase tracking-[0.2em] block mb-4">The Black Box</span>
                        <h2 className="text-4xl md:text-5xl">Metodología Archer</h2>
                    </div>
                </Reveal>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PillarCard
                            icon={Radar}
                            title="Inteligencia OSINT"
                            description="Detectamos lo que otros ignoran. Deudas ocultas, historial real y proyección de plusvalía con Big Data."
                        />
                        <PillarCard
                            icon={ShieldCheck}
                            title="Círculo de Canje Seguro"
                            description="El primer ecosistema libre de 'L'. Solo corredores auditados. Si no pasas el filtro legal, no entras."
                        />
                        <PillarCard
                            icon={Zap}
                            title="Archer Speed (Flipping)"
                            description="Entrada y salida rápida. Identificamos activos distressed para remodelación y venta express."
                        />
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
};

export default Pillars;
