import React from 'react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 0 40px 0', background: '#030303' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '20px' }}>
                            ARCHER
                        </div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '30px' }}>
                            Firma de inversión inmobiliaria especializada en activos de renovación y desarrollo estratégico.
                        </p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {/* Social Icons Placeholder */}
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LI</div>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IG</div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', opacity: 0.7 }}>Navegación</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Portafolio', 'Tesis de Inversión', 'La Firma', 'Acceso Clientes'].map(item => (
                                <li key={item} style={{ marginBottom: '16px' }}>
                                    <a href="#" style={{ fontSize: '0.95rem', opacity: 0.8, hover: { opacity: 1, color: 'var(--color-gold)' } }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', opacity: 0.7 }}>Contacto</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '16px' }}>
                                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5 }}>Oficinas</span>
                                Av. El Golf 40, Las Condes<br />Santiago, Chile
                            </li>
                            <li style={{ marginBottom: '16px' }}>
                                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5 }}>Teléfono</span>
                                <a href="tel:+56222334455" style={{ fontSize: '0.95rem' }}>+56 2 2233 4455</a>
                            </li>
                            <li>
                                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5 }}>Email</span>
                                <a href="mailto:privado@archer-re.cl" style={{ fontSize: '0.95rem' }}>privado@archer-re.cl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', fontSize: '0.8rem', opacity: 0.5 }}>
                    <div>
                        © 2026 Archer Real Estate. Todos los derechos reservados.
                    </div>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                        <a href="#">Aviso Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
