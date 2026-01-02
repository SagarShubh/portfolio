import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const About = () => {
    const timeline = [
        { year: '2024 - Present', role: 'Senior Visual Designer', company: 'Freelance', desc: 'Crafting high-end digital experiences for global brands.' },
        { year: '2021 - 2023', role: 'Product Designer', company: 'TechStartup Inc', desc: 'Led design system architecture and mobile app overhaul.' },
        { year: '2019 - 2021', role: 'UI/UX Developer', company: 'Creative Agency', desc: 'Bridged the gap between design and code for award-winning sites.' },
    ];

    return (
        <PageTransition>
            <SEOHead title="About | The Story" description="My journey from code to creative direction." />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
                <Navbar />

                <main className="container mx-auto px-6 md:px-12 pt-40 pb-20">
                    {/* Header */}
                    <Reveal width="100%">
                        <h1 className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter mb-12">
                            The <span className="text-white/30 italic font-serif">Story</span>
                        </h1>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-16 mb-32">
                        <Reveal delay={0.1}>
                            <div className="text-xl md:text-2xl text-secondary font-light leading-relaxed space-y-8">
                                <p>
                                    I started my journey with a simple belief: <strong className="text-white">Design is intelligence made visible.</strong>
                                </p>
                                <p>
                                    Over the last 5 years, I've obsessed over every pixel, interaction, and line of code. I don't just build websites; I build digital environments that evoke emotion.
                                </p>
                                <p>
                                    My approach is rooted in "Creative Engineering" — the sweet spot where artistic vision meets technical robustness.
                                </p>

                                <div className="pt-8">
                                    <a
                                        href="/resume.pdf"
                                        download
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent transition-colors rounded-sm"
                                    >
                                        Download Resume <span className="text-xl">↓</span>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="aspect-[3/4] bg-white/5 relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Timeline */}
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-16 border-t border-white/10 pt-20">
                            Timeline
                        </h2>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="grid md:grid-cols-4 gap-6 border-b border-white/5 pb-10 group hover:bg-white/5 transition-colors p-4 rounded-sm">
                                    <div className="md:col-span-1 text-accent font-mono text-sm">{item.year}</div>
                                    <div className="md:col-span-1 text-xl font-bold">{item.role}</div>
                                    <div className="md:col-span-1 text-white/50 uppercase tracking-widest text-xs">{item.company}</div>
                                    <div className="md:col-span-1 text-secondary text-sm leading-relaxed">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default About;
