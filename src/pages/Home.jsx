
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <main>
                <PortfolioSection />

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

                        <div className="order-1 md:order-2 bg-black/20 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-sm">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-8 border-b border-white/10 pb-4">Technical Arsenal</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                {['Creative Direction', 'Brand Strategy', 'UI/UX Design', 'Visual Identity', 'Adobe Suite', 'Figma', 'Motion Design', 'Print & Packaging'].map(skill => (
                                    <div key={skill} className="flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-accent transition-colors" />
                                        <span className="uppercase text-xs font-bold tracking-wider text-secondary group-hover:text-white transition-colors">{skill}</span>
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
                    <a href="#" className="hover:text-white transition-colors">Behance</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </footer>
        </>
    );
}

export default Home;
