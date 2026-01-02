
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
import Process from '../components/Process';
import ProjectWizard from '../components/ProjectWizard';

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

                        <div className="order-1 md:order-2 pl-0 md:pl-20">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-12 border-b border-white/10 pb-4">The Toolkit</h3>

                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs opacity-80">Product & Experience</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Figma', 'Framer', 'Prototyping', 'Design Systems', 'User Research', 'Wireframing', 'Whimsical'].map(item => (
                                            <span key={item} className="px-3 py-1.5 border border-white/10 rounded-sm text-[10px] md:text-xs uppercase tracking-wider text-secondary hover:text-black hover:bg-white hover:border-white transition-all cursor-default">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs opacity-80">Visual & Motion</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Adobe Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Spline 3D', 'Blender', 'Midjourney', 'Cinema 4D'].map(item => (
                                            <span key={item} className="px-3 py-1.5 border border-white/10 rounded-sm text-[10px] md:text-xs uppercase tracking-wider text-secondary hover:text-black hover:bg-white hover:border-white transition-all cursor-default">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs opacity-80">Creative Engineering</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Webflow', 'React', 'Three.js', 'Tailwind', 'GSAP', 'HTML/CSS', 'Git'].map(item => (
                                            <span key={item} className="px-3 py-1.5 border border-white/10 rounded-sm text-[10px] md:text-xs uppercase tracking-wider text-secondary hover:text-black hover:bg-white hover:border-white transition-all cursor-default">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="relative z-10 bg-black">
                    <Process />
                </div>

                {/* Contact Section via Wizard */}
                <section id="contact" className="py-24 md:py-40 relative bg-black z-10">
                    <div className="container max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                            <div>
                                <h2 className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">Start a Project</h2>
                                <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-8">Let's build <br /> something <span className="text-accent">legendary</span>.</h3>
                                <p className="text-secondary text-xl max-w-md font-light leading-relaxed">Ready to take the leap? Tell me about your vision, and let's craft a digital experience that dominates.</p>
                            </div>
                            <div className="hidden lg:block">
                                {/* Spacer or interactive element */}
                            </div>
                        </div>

                        <ProjectWizard />
                    </div>
                </section>
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
