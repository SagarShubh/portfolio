import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ value, label, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="text-center md:text-left relative group">
            {/* Decorative Line */}
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                <span className="text-6xl md:text-8xl font-black text-white">
                    {value}+
                </span>
            </div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium">{label}</p>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { value: "5", label: "Years Experience" },
        { value: "120", label: "Projects Delivered" },
        { value: "30", label: "Global Clients" },
        { value: "15", label: "Design Awards" }
    ];

    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} {...stat} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
