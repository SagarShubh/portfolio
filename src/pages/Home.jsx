
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import ProjectWizard from '../components/ProjectWizard';
import PortfolioSection from '../components/PortfolioSection';
import PageTransition from '../components/PageTransition';

import Reveal from '../components/Reveal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const Home = () => {
    return (
        <PageTransition>
            <SEOHead
                title="Sagar Vaishnava | Visual Strategist"
                description="Digital portfolio of Sagar Vaishnava. Specializing in brutalist aesthetics, high-end web design, and digital brand transformation."
            />
            <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-black">
                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <Reveal width="100%">
                    <section id="about" className="py-32 container mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row gap-16 items-start">
                            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none md:w-1/3">
                                The <br /> <span className="text-white/30 italic font-serif">Story</span>
                            </h2>
                            <div className="md:w-2/3 space-y-8 text-lg md:text-2xl text-secondary font-light leading-relaxed">
                                <p>
                                    I don't just "design websites." I build <span className="text-white font-medium">digital empires</span>. My work sits at the intersection of brutalist aesthetics and high-conversion psychology.
                                </p>
                                <p>
                                    From Fortune 500 experiments to underground startups, I've seen enough bad design to know exactly what <span className="text-white font-medium">actually works</span>.
                                </p>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Stats />

                {/* Technical Arsenal */}
                <Reveal width="100%">
                    <section className="py-20 border-y border-white/5 bg-white/5">
                        <div className="container mx-auto px-6 md:px-12">
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-16">
                                The <br /> <span className="text-white/30 italic font-serif">Toolkit</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {/* Product & Strategy */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-accent mb-8">Product & Experience</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Figma', 'Framer', 'Prototyping', 'Design Systems', 'User Research', 'Wireframing', 'Whimsical'].map(tool => (
                                            <span key={tool} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white hover:text-black hover:border-white transition-all cursor-default">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual & Motion */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-accent mb-8">Visual & Motion</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Adobe Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Spline 3D', 'Blender', 'Midjourney', 'Cinema 4D'].map(tool => (
                                            <span key={tool} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white hover:text-black hover:border-white transition-all cursor-default">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Creative Engineering */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-accent mb-8">Creative Engineering</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Webflow', 'React', 'Three.js', 'Tailwind', 'GSAP', 'HTML/CSS', 'Git'].map(tool => (
                                            <span key={tool} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white hover:text-black hover:border-white transition-all cursor-default">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* Selected Work */}
                <Reveal width="100%">
                    <PortfolioSection />
                </Reveal>

                {/* Process */}
                <Reveal width="100%">
                    <Process />
                </Reveal>

                {/* Testimonials */}
                <Reveal width="100%">
                    <Testimonials />
                </Reveal>

                {/* Project Wizard (Contact) */}
                <section id="contact" className="py-32 container mx-auto px-6 md:px-12 relative z-10">
                    <Reveal width="100%">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-end">
                            <h2 className="text-[10vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter">
                                Let's Build <br /> <span className="text-white/30 italic font-serif">Legendary</span>
                            </h2>
                            <p className="text-xl text-secondary max-w-md pb-4">
                                Ready to shatter the ceiling? Fill out the wizard below and let's craft your digital legacy.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <ProjectWizard />
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <Contact />
                    </Reveal>
                </section>

                {/* Mega Footer */}
                <Footer />
            </main>
        </PageTransition>
    );
};

export default Home;
