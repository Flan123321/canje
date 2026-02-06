import React from 'react';
import { Reveal } from './Reveal';

const AuthorityBar = () => {
    const stats = [
        { label: "Activos Gestionados", value: "+$2.4B" },
        { label: "TIR Promedio Histórico", value: "18.5%" },
        { label: "Incidencias Legales", value: "0" },
        { label: "Proyectos Ejecutados", value: "127" },
    ];

    return (
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                    {stats.map((stat, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--color-off-white)' }}>{stat.value}</h3>
                                <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuthorityBar;
