import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <h4 className="font-serif text-2xl text-white mb-6">ARCHER</h4>
                        <div className="space-y-2">
                            <a href="#" className="block text-sm text-white/40 hover:text-white transition-colors">Términos de Acreditación</a>
                            <a href="#" className="block text-sm text-white/40 hover:text-white transition-colors">Política de Privacidad de Datos</a>
                            <a href="#" className="block text-sm text-white/40 hover:text-white transition-colors">Compliance Legal</a>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Intelligence & Legal Firm</p>
                        <p className="text-white/20 text-xs">
                            © 2026 Archer Real Estate. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
