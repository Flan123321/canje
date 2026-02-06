import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Download } from 'lucide-react';

const LeadMagnet = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription layout
        console.log('Subscribe:', email);
    };

    return (
        <section className="section">
            <div className="container">
                <div className="glass-panel" style={{ padding: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <Reveal>
                            <span style={{ display: 'inline-block', marginBottom: '20px', fontSize: '0.85rem', letterSpacing: '0.1em', color: 'var(--color-gold)', textTransform: 'uppercase', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '8px 16px', borderRadius: '50px' }}>
                                Recurso Exclusivo
                            </span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Insider Report: Dónde invertir en 2026</h2>
                            <p style={{ margin: '0 auto 40px auto' }}>
                                Un análisis profundo de las comunas con mayor proyección de plusvalía y los cambios regulatorios que impactarán el mercado.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    placeholder="Su correo electrónico profesional"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{
                                        flex: 1,
                                        padding: '16px 24px',
                                        background: 'rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'white',
                                        fontSize: '0.95rem',
                                        minWidth: '250px'
                                    }}
                                />
                                <button type="submit" className="btn btn-primary" style={{ flexGrow: 0 }}>
                                    Descargar Reporte
                                    <Download size={18} />
                                </button>
                            </form>
                            <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.6 }}>
                                100% Privado. Sin spam. Darse de baja en cualquier momento.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
