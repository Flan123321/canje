import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = ({ onOpenModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-rich-black/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-white">
                    ARCHER
                    <span className="text-gold text-xs ml-2 tracking-widest font-sans font-normal opacity-70 hidden sm:inline-block">INTELLIGENCE</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {['Manifiesto', 'Inteligencia', 'Validación'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
                        >
                            {item}
                        </a>
                    ))}
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
                    {['Manifiesto', 'Inteligencia', 'Validación'].map((item) => (
                        <a key={item} href="#" className="text-sm uppercase tracking-widest text-white/70 hover:text-gold">
                            {item}
                        </a>
                    ))}
                    <button onClick={onOpenModal} className="btn-gold w-full">Solicitar Acreditación</button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
