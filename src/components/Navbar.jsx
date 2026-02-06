import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onOpenModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // If we are not on home, we just show a simplified navbar or links back to home, 
    // but the request implies we navigate TO manifesto from here.

    const isHome = location.pathname === '/';

    const handleScrollTo = (id) => {
        if (!isHome) {
            // Need to navigate to home first, but typically anchor links work best on single page.
            // For this implementation, we assume sections are only on Home.
            window.location.href = `/#${id}`;
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-rich-black/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Structure Match */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="Archer Real Estate"
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        to="/manifiesto"
                        className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
                    >
                        Manifiesto
                    </Link>

                    <button onClick={() => handleScrollTo('seguridad')} className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors">
                        Seguridad
                    </button>

                    <button onClick={() => handleScrollTo('exclusividad')} className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors">
                        Exclusividad
                    </button>

                    <button onClick={onOpenModal} className="px-6 py-3 border border-white/20 hover:border-gold hover:text-gold text-xs uppercase tracking-widest transition-all duration-300">
                        Acceso Miembros
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
                >
                    <Link to="/manifiesto" className="text-sm uppercase tracking-widest text-white/70 hover:text-gold">
                        Manifiesto
                    </Link>
                    <button onClick={() => { setIsOpen(false); handleScrollTo('seguridad'); }} className="text-left text-sm uppercase tracking-widest text-white/70 hover:text-gold">
                        Seguridad
                    </button>
                    <button onClick={() => { setIsOpen(false); handleScrollTo('exclusividad'); }} className="text-left text-sm uppercase tracking-widest text-white/70 hover:text-gold">
                        Exclusividad
                    </button>
                    <button onClick={onOpenModal} className="btn-gold w-full">Solicitar Acreditación</button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
