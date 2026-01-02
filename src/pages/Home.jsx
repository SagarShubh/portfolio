
import React from 'react';
import { Palette, Target, Layout, Fingerprint, Layers, PenTool, Film, Package } from 'lucide-react';
import Navbar from '../components/Navbar';

const SkillIcon = ({ name }) => {
    const icons = {
        Palette: <Palette size={20} />,
        Target: <Target size={20} />,
        Layout: <Layout size={20} />,
        Fingerprint: <Fingerprint size={20} />,
        Layers: <Layers size={20} />,
        PenTool: <PenTool size={20} />,
        Film: <Film size={20} />,
        Package: <Package size={20} />
    };
    return icons[name] || null;
};
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

import PageTransition from '../components/PageTransition';

import SEOHead from '../components/SEOHead';

function Home() {
    return (
        <PageTransition>
            <SEOHead />
            <Navbar />
            <Hero />


            <main>
                <Stats />
                <PortfolioSection />
                <Testimonials />

                {/* About Section */}
                <section id="about" className="py-24 md:py-40 bg-secondary/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="container grid md:grid-cols-2 gap-20 items-start">
                        <div className="order-2 md:order-1 relative">
                            <h2 className="text-5xl md:text-7xl font-bold mb-10 uppercase leading-[0.9]">
                                Beyond <br /> <span className="text-accent">The Pixels</span>
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl text-secondary font-light leading-relaxed">
                                <p>
                                    I'm <strong>Sagar Vaishnava</strong>. My philosophy is simple: Average is invisible.
                                </p>
                                <p>
                                    In a saturated digital landscape, I act as a strategic partner to brands that refuse to blend in.
                                    I combine <span className="text-white font-normal">psychology-driven design</span> with high-end aesthetics to build systems that scale.
                                </p>
                                <p>
                                    Whether it's a startup launch or an enterprise rebrand, I don't just deliver files—I deliver impact.
                                </p>
                            </div>

                            <div className="mt-12">
                                <a href="https://www.behance.net/sagar942504106" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-white/30 text-white pb-1 uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-colors group">
                                    Explore Full Visual Archive <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-8 border-b border-white/10 pb-4">Technical Arsenal</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'Creative Direction', icon: 'Palette' },
                                    { name: 'Brand Strategy', icon: 'Target' },
                                    { name: 'UI/UX Design', icon: 'Layout' },
                                    { name: 'Visual Identity', icon: 'Fingerprint' },
                                    { name: 'Adobe Suite', icon: 'Layers' },
                                    { name: 'Figma', icon: 'PenTool' },
                                    { name: 'Motion Design', icon: 'Film' },
                                    { name: 'Print & Packaging', icon: 'Package' }
                                ].map((skill, idx) => (
                                    <div key={idx} className="group bg-white/5 hover:bg-white/10 border border-white/5 rounded-sm p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-accent opacity-70 group-hover:opacity-100 transition-opacity">
                                                {/* Requires dynamic icon loading or pre-defined Import */}
                                                {/* For now we use a generic placeholder or dynamic lookup if we import them */}
                                                <SkillIcon name={skill.icon} />
                                            </div>
                                            <span className="text-[10px] text-white/30 font-mono">0{idx + 1}</span>
                                        </div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-secondary group-hover:text-white transition-colors">{skill.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            <footer className="py-8 text-center text-secondary text-sm border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Sagar Vaishnava. All Rights Reserved.</p>
                <div className="flex justify-center gap-6 mt-4 uppercase text-xs tracking-widest">
                    <a href="https://www.behance.net/sagar942504106" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="/legal" className="hover:text-white transition-colors">Legal</a>
                </div>
            </footer>
        </PageTransition>
    );
}

export default Home;
