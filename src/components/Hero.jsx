import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Abstract Background Element */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <Reveal>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            marginBottom: '32px'
                        }}>
                            <span style={{ width: '8px', height: '8px', background: 'var(--color-gold)', borderRadius: '50%' }}></span>
                            <span style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--color-platinum)' }}>
                                Oportunidades Q1 2026 Disponibles
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 style={{ marginBottom: '24px' }}>
                            Inversión Inmobiliaria para quienes exigen <span className="text-gold">Certeza</span> y Retorno.
                        </h1>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p style={{ fontSize: '1.25rem', marginBottom: '48px', color: 'var(--color-platinum)' }}>
                            Accede a activos <em style={{ fontFamily: 'var(--font-serif)', color: 'white' }}>off-market</em> con garantías reales.
                            Rentabilidad estructurada superior al 18%.
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary">
                                Ver Oportunidades Privadas
                                <ArrowRight size={20} />
                            </button>
                            <button className="btn btn-secondary">
                                Leer Tesis de Inversión
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
