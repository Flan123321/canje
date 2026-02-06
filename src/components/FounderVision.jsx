import React from 'react';
import { Reveal } from './Reveal';

const FounderVision = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-charcoal)' }} id="nosotros">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                    <Reveal>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                paddingBottom: '120%',
                                background: '#1a1a1a',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Placeholder for founder image */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.1)',
                                    fontSize: '3rem',
                                    fontWeight: 700
                                }}>
                                    ARCHER
                                </div>
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                border: '1px solid var(--color-gold)',
                                padding: '30px',
                                background: 'var(--bg-rich-black)'
                            }}>
                                <span style={{ display: 'block', fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}>15+</span>
                                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Años de Experiencia</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div>
                            <h2 style={{ marginBottom: '40px' }}>La Visión detrás de Archer</h2>
                            <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
                                "La verdadera riqueza no se construye persiguiendo tendencias, sino mediante la adquisición disciplinada de activos reales con valor intrínseco."
                            </p>
                            <p style={{ marginBottom: '30px' }}>
                                En Archer, no somos intermediarios pasivos. Invertimos nuestro propio capital junto al de nuestros clientes en cada operación. Este concepto de <em>Skin in the Game</em> asegura que nuestros intereses estén perfectamente alineados: si tú no ganas, nosotros tampoco.
                            </p>
                            <p style={{ marginBottom: '50px' }}>
                                Priorizamos la certeza jurídica y la transparencia radical sobre promesas de retorno vacías.
                            </p>

                            <div>
                                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-off-white)' }}>
                                    Carlos Figueroa
                                </p>
                                <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fundador & CEO</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default FounderVision;
