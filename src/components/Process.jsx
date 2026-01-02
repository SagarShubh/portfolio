import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            desc: "I dive deep into your brand, your audience, and your goals. We skip the fluff and identify the core problem we're solving."
        },
        {
            num: "02",
            title: "Strategy",
            desc: "We build a roadmap. I define the visual direction, user journeys, and technical architecture to ensure scalability."
        },
        {
            num: "03",
            title: "Execution",
            desc: "The magic happens. I craft pixel-perfect designs and clean code, iterating based on feedback until it's sharp."
        },
        {
            num: "04",
            title: "Launch",
            desc: "We go live. I ensure smooth deployment, SEO optimization, and handover so you can run with it."
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-black relative">
            <div className="container px-6">
                <div className="mb-20">
                    <h2 className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">The Process</h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase text-white">How we <br /> Make it happen</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="group border-t border-white/10 pt-8 hover:border-accent transition-colors duration-500">
                            <span className="text-6xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500 mb-6 block">{step.num}</span>
                            <h4 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-accent transition-colors">{step.title}</h4>
                            <p className="text-secondary leading-relaxed text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
