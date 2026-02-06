import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const AcreditationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[600px] h-full md:h-auto bg-[#0a0a0a] border border-white/10 p-8 z-[201] overflow-y-auto"
                    >
                        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-gold transition-colors">
                            <X size={24} />
                        </button>

                        <div className="mb-8">
                            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">Postulación de Acceso</span>
                            <h2 className="text-3xl font-serif text-white mb-4">Acreditación Archer</h2>
                            <p className="text-white/60 text-sm">
                                El acceso a la plataforma está restringido. Complete el perfil para iniciar su proceso de veto legal y financiero.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-white/40">Nombre Legal</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Nombre completo" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-white/40">RUT / ID Tributario</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="XX.XXX.XXX-X" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-white/40">Email Corporativo</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="nombre@empresa.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-white/40">Perfil de Inversión</label>
                                <select className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors">
                                    <option value="" className="bg-black">Seleccione una opción...</option>
                                    <option value="private" className="bg-black">Family Office / Inversionista Institucional</option>
                                    <option value="developer" className="bg-black">Inmobiliaria / Desarollador</option>
                                    <option value="individual" className="bg-black">Inversionista Privado (Acreditado)</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full btn-gold justify-center flex">
                                    Iniciar Proceso de Acreditación
                                </button>
                                <p className="text-center text-white/30 text-xs mt-4">
                                    Al enviar, usted autoriza la revisión de antecedentes legales y financieros básicos (Compliance).
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AcreditationModal;
