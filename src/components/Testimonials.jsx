import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Arjun Mehta",
        role: "Founder, Zenith AI",
        text: "Sagar didn't just design our app; he defined our entire brand language. The 3D interactions blew our investors away.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Jenkins",
        role: "CMO, BrightPath",
        text: "The webflow migration was seamless. Our conversion rate doubled within a week of launch. Absolute wizardry.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Vikram Singh",
        role: "Director, UrbanPulse",
        text: "Rare to find a designer who understands code this well. He bridged the gap between our creative and engineering teams.",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
        name: "Elena Rodriguez",
        role: "Product Lead, Aura",
        text: "The kinetic typography and motion design gave our product the premium feel we were missing. Highly recommended.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container px-6 mb-12">
                <h3 className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-2">Client Love</h3>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="w-[300px] md:w-[400px] flex-shrink-0 bg-white/5 border border-white/5 p-8 rounded-sm hover:bg-white/10 transition-colors">
                            <p className="text-lg md:text-xl text-white font-light leading-relaxed mb-6 whitespace-normal">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale opacity-70" />
                                <div>
                                    <h4 className="text-sm font-bold uppercase text-white">{t.name}</h4>
                                    <span className="text-xs text-secondary uppercase tracking-wider">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
