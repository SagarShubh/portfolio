import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const About = () => {
    const experience = [
        {
            year: '2024 - Present',
            role: 'Senior Visual Designer',
            company: 'Freelance',
            desc: 'Partnering with startups and agencies to craft high-impact digital identities. Specializing in WebGL interactions and design systems.'
        },
        {
            year: '2021 - 2023',
            role: 'Product Designer',
            company: 'TechStartup Inc',
            desc: 'Led the redesign of the core SaaS platform, improving user retention by 40%. Managed a team of 3 junior designers.'
        },
        {
            year: '2019 - 2021',
            role: 'UI/UX Developer',
            company: 'Creative Agency',
            desc: 'Bridged the gap between design and engineering. Built award-winning campaign sites for efficient, scalable codebases.'
        },
    ];

    return (
        <PageTransition>
            <SEOHead title="About | The Story" description="My journey from code to creative direction." />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
                <Navbar />

                <main className="container mx-auto px-6 md:px-12 pt-40 pb-20">
                    {/* Header */}
                    <Reveal width="100%">
                        <h1 className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter mb-20 md:mb-32">
                            The <span className="text-white/30 italic font-serif">Story</span>
                        </h1>
                    </Reveal>

                    <div className="grid lg:grid-cols-12 gap-16 items-start mb-40">
                        {/* Image Column */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <Reveal delay={0.2}>
                                <div className="aspect-[3/4] relative overflow-hidden rounded-sm group">
                                    <div className="absolute inset-0 bg-accent/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <img
                                        src="/profile.jpg"
                                        alt="Sagar Vaishnava"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    {/* Decorative Borders */}
                                    <div className="absolute top-4 right-4 bottom-4 left-4 border border-white/20 z-20 pointer-events-none" />
                                </div>
                            </Reveal>
                        </div>

                        {/* Text Column */}
                        <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-10 lg:pt-20">
                            <Reveal delay={0.1}>
                                <div className="prose prose-lg prose-invert text-secondary font-light leading-relaxed space-y-8">
                                    <p className="text-2xl md:text-3xl font-normal text-white leading-tight">
                                        I am a designer who <span className="text-accent">thinks in code</span> and a developer who <span className="text-accent">dreams in motion</span>.
                                    </p>
                                    <p>
                                        My journey started with a simple curiosity: <em>how do digital things work?</em> That curiosity quickly turned into an obsession with creating interfaces that feel less like software and more like living organisms.
                                    </p>
                                    <p>
                                        I believe the best digital experiences are the ones you don't notice—they just work, intuitively and beautifully. Whether I'm crafting a design system or optimizing WebGL shaders, my goal is always the same: to create work that is **unignorable**.
                                    </p>

                                    <div className="pt-8 flex flex-col sm:flex-row gap-6">
                                        <a
                                            href="/resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-sm"
                                        >
                                            <span className="relative z-10">Download CV</span>
                                            <span className="group-hover:translate-y-1 transition-transform text-xl">↓</span>
                                        </a>
                                        <a href="mailto:hello@sagar.design" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm">
                                            Get in Touch
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Philosophy / Skills Breakdown */}
                    <div className="grid md:grid-cols-3 gap-8 mb-40 border-t border-white/10 pt-20">
                        <Reveal delay={0.1}>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white">Design</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    UI/UX, Design Systems, Creative Direction, Brand Identity, Motion Design, Prototyping (Figma).
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white">Engineering</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    React, Next.js, WebGL (Three.js), GSAP, TailwindCSS, Node.js, Frontend Architecture.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white">Strategy</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    Product Strategy, User Research, Analytics, SEO, Conversion Optimization, Technical Leadership.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Timeline */}
                    <Reveal width="100%">
                        <div className="flex items-center justify-between mb-16 border-t border-white/10 pt-20">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase">
                                Experience
                            </h2>
                            <span className="hidden md:block text-white/30 font-mono text-sm">(2019 — Present)</span>
                        </div>

                        <div className="space-y-0">
                            {experience.map((item, index) => (
                                <div key={index} className="group grid md:grid-cols-12 gap-6 border-t border-white/10 py-12 hover:bg-white/5 transition-colors -mx-6 px-6">
                                    <div className="md:col-span-3 text-accent font-mono text-sm pt-1">{item.year}</div>
                                    <div className="md:col-span-4">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.role}</h3>
                                        <div className="text-white/50 uppercase tracking-widest text-xs">{item.company}</div>
                                    </div>
                                    <div className="md:col-span-5 text-secondary text-lg font-light leading-relaxed">
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                            <div className="border-t border-white/10" />
                        </div>
                    </Reveal>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default About;
