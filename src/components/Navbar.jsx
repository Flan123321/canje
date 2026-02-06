import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: scrolled ? '20px 0' : '40px 0',
                transition: 'all 0.4s ease',
                background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    ARCHER
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    {['Portafolio', 'Tesis', 'La Firma'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ fontSize: '0.9rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn-secondary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
                        Acceso Clientes
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white' }}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <style>{`
                @media(max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
