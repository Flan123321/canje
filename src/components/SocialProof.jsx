import React from 'react';
import { Reveal } from './Reveal';

const SocialProof = () => {
    const stats = [
        { label: "Fraudes Registrados", value: "0%" },
        { label: "Tiempo Validación Legal", value: "< 24H" },
        { label: "Acceso Público", value: "CERRADO" },
    ];

    return (
        <section className="py-20 border-y border-white/5 bg-rich-black overflow-hidden" id="validacion">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <div key={i} className="py-10 md:py-0 md:px-10 text-center group cursor-default">
                            <Reveal delay={i * 0.1}>
                                <div className="text-4xl md:text-6xl font-serif text-white/90 mb-2 group-hover:text-gold transition-colors duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors">
                                    {stat.label}
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
