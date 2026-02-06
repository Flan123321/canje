import React from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight, Clock } from 'lucide-react';

const OpportunityCard = ({ title, location, type, roi, funded, goal, status }) => {
    const progress = (funded / goal) * 100;

    return (
        <div className="glass-panel" style={{ padding: '40px', position: 'relative', transition: 'transform 0.3s ease' }}>
            {status && (
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(197, 160, 89, 0.2)',
                    color: 'var(--color-gold)',
                    padding: '6px 12px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}>
                    <Clock size={14} />
                    {status}
                </div>
            )}

            <div style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {type}
                </span>
                <h3 style={{ fontSize: '1.75rem', marginTop: '10px', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>{location}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>ROI Estimado</span>
                    <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}>{roi}</span>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Plazo</span>
                    <span style={{ fontSize: '1.25rem', color: 'var(--color-off-white)' }}>12-18 Meses</span>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem' }}>
                    <span>Fondeo: {progress}%</span>
                    <span>Meta: {goal}M</span>
                </div>
                <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: 'var(--color-gold)' }}></div>
                </div>
            </div>

            <button style={{
                width: '100%',
                padding: '16px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Ver Tesis de Inversión
                <ArrowUpRight size={18} />
            </button>
        </div>
    );
};

const Opportunities = () => {
    return (
        <section className="section" id="proyectos">
            <div className="container">
                <Reveal>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                        <div>
                            <h2 style={{ marginBottom: '10px' }}>Oportunidades Activas</h2>
                            <p>Selección exclusiva de activos con due diligence legal completo.</p>
                        </div>
                        <button className="btn-secondary" style={{ display: 'none', md: 'block' }}>Ver Portafolio Completo</button>
                    </div>
                </Reveal>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    <Reveal delay={0.2}>
                        <OpportunityCard
                            title="Casa Providencia"
                            location="Calle Holanda, Providencia"
                            type="Renovación Premium"
                            roi="+18.2%"
                            funded={87}
                            goal={120}
                            status="Últimos Cupos"
                        />
                    </Reveal>
                    <Reveal delay={0.4}>
                        <OpportunityCard
                            title="Sunset Tower"
                            location="Av. Las Condes, Santiago"
                            type="Desarrollo Comercial"
                            roi="+21.5%"
                            funded={45}
                            goal={478}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
