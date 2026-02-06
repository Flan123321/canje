import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scroll, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManifestoPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-[#E0D8C0] font-serif selection:bg-gold selection:text-black overflow-x-hidden relative">

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>

            {/* Header / Navigation */}
            <nav className="fixed top-0 left-0 p-8 z-50">
                <Link to="/" className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors text-xs uppercase tracking-[0.2em] group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al Inicio
                </Link>
            </nav>

            <motion.div
                className="relative z-10 max-w-3xl mx-auto px-6 py-32 md:py-40 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Ancient Header */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="inline-flex items-center justify-center p-4 border border-gold/20 rounded-full mb-8">
                        <Scroll className="text-gold w-6 h-6" strokeWidth={1} />
                    </div>
                    <h1 className="text-4xl md:text-6xl text-gold mb-4 tracking-tight">El Códice Archer</h1>
                    <div className="h-[1px] w-24 bg-gold/30 mx-auto my-6"></div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/30">Est. 2026 • Decreto Fundacional</p>
                </motion.div>

                {/* The Decree Content */}
                <div className="space-y-12 text-lg md:text-xl leading-relaxed text-white/80 font-light text-justify md:text-center">

                    <motion.p variants={itemVariants}>
                        <span className="text-gold text-2xl font-bold float-left mr-2 mt-[-6px]">I.</span>
                        Rechazamos la opacidad como norma. En un mercado diseñado para ocultar vicios, nosotros vendemos <strong className="text-white font-normal underline decoration-gold/30 underline-offset-4">Certeza Radical</strong>. No hay letra chica en este club.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        <span className="text-gold text-2xl font-bold float-left mr-2 mt-[-6px]">II.</span>
                        La "Inmobiliaria Tradicional" está muerta. No necesitamos oficinas de mármol ni corbatas de seda para justificar comisiones abusivas. Operamos con datos, velocidad y <em className="italic text-white">Skin in the Game</em>.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        <span className="text-gold text-2xl font-bold float-left mr-2 mt-[-6px]">III.</span>
                        El tiempo es el único activo que no se recupera. Nuestras operaciones de Flipping y Canje están diseñadas para la <strong className="text-white font-normal">Velocidad de Capital</strong>. Si el dinero duerme, muere.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        <span className="text-gold text-2xl font-bold float-left mr-2 mt-[-6px]">IV.</span>
                        El acceso es un privilegio, no un derecho. Protegemos nuestra red de oportunistas y curiosos. Solo quienes comparten nuestra ética y solvencia cruzan el umbral.
                    </motion.p>

                </div>

                {/* Signature / Footer of the Manifesto */}
                <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center">
                    <div className="flex items-center gap-4 text-gold/80 mb-6">
                        <Feather size={24} />
                        <span className="font-handwriting text-3xl font-normal" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Fundadores de Archer</span>
                    </div>

                    {/* Wax Seal Simulation */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B0000] to-[#500000] shadow-[0_4px_20px_rgba(139,0,0,0.4)] flex items-center justify-center border-4 border-[#600000] hover:scale-105 transition-transform duration-500 cursor-pointer group relative">
                        <span className="text-[#ffbaba] font-serif font-bold text-xl opacity-80 group-hover:opacity-100">A</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 mt-4">Sello de Conformidad - Q1 2026</p>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default ManifestoPage;
