import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-8">
                        <h2 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-white/90">
                            Let's <br /> <span className="text-white/30 italic font-serif">Talk</span>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end items-start md:items-end space-y-6">
                        <a href="mailto:hello@sagar.design" className="text-2xl md:text-4xl border-b border-white/30 pb-2 hover:text-accent hover:border-accent transition-colors">
                            hello@sagar.design
                        </a>
                        <div className="flex gap-6 text-sm uppercase tracking-widest text-white/50">
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-white/20 border-t border-white/10 pt-8">
                    <p>© {new Date().getFullYear()} Sagar V. — All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;
