import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image - Ocean Waves */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/hero-ocean.jpg)',
                    filter: 'brightness(0.3) blur(2px) saturate(0)'
                }}
            ></div>

            {/* Overlay for Dark Luxury Feel */}
            <div className="absolute inset-0 bg-rich-black/80 z-0 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent z-0"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0 opacity-50"></div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center">

                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
                            El mercado inmobiliario es <br />
                            <span className="text-white/40 font-serif italic">un mar traicionero.</span><br />
                            Archer es el único <span className="text-gold">timón firme.</span>
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
                            <button onClick={onOpenModal} className="btn-gold min-w-[240px] text-center">
                                Solicitar Acreditación
                            </button>
                            <Link to="/manifiesto" className="btn-outline min-w-[240px] group text-center flex items-center justify-center">
                                Leer el Decreto
                                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
