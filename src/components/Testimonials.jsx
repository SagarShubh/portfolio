import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Sagar didn't just design a website; he crafted a digital identity that doubled our leads in 3 months.",
        author: "Alex Rivera",
        role: "CEO, FinTech Global",
        company: "FG"
    },
    {
        quote: "The attention to detail is borderline obsessive. Every pixel, every transition... it's just pure art.",
        author: "Sarah Jenkins",
        role: "Creative Director",
        company: "Studio 9"
    },
    {
        quote: "Working with Sagar was the best investment we made this year. He truly understands modern luxury.",
        author: "Marcus Chen",
        role: "Founder",
        company: "Aura Estates"
    },
    {
        quote: "Rarely do you find a designer who understands business strategy this well. A true partner.",
        author: "Emily Watson",
        role: "CMO",
        company: "Velvet Inc."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
            <div className="container px-6 mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                    Client <span className="text-accent">Voices</span>
                </h2>
                <div className="w-20 h-1 bg-accent/50" />
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Scrolling Track (duplicated for infinite loop) */}
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
                        <div key={i} className="w-[400px] md:w-[500px] bg-white/5 border border-white/10 p-10 rounded-sm hover:border-accent/30 transition-colors whitespace-normal flex flex-col justify-between shrink-0">
                            <div>
                                <svg className="w-8 h-8 text-accent/20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.082 15.66 14.73 17.519 14.73C18.675 14.73 19.467 15.397 20.015 16.273C20.669 17.317 20.407 19.336 20.407 19.336H24C24 16.634 22.824 13.921 17.538 13.921C14.773 13.921 12.871 15.225 11.758 17.228C11.17 14.47 12.783 10.978 17.061 8.875L15.986 6C10.528 8.163 7.854 12.564 9.06 18.232L14.017 21ZM5.074 21L5.074 18C5.074 16.082 6.717 14.73 8.576 14.73C9.732 14.73 10.524 15.397 11.072 16.273C11.726 17.317 11.464 19.336 11.464 19.336H15.057C15.057 16.634 13.882 13.921 8.595 13.921C5.83 13.921 3.928 15.225 2.815 17.228C2.227 14.47 3.84 10.978 8.118 8.875L7.043 6C1.585 8.163 -1.089 12.564 0.117 18.232L5.074 21Z" /></svg>
                                <p className="text-lg md:text-xl text-secondary font-light leading-relaxed mb-8">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center font-bold">
                                    {t.company}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium uppercase text-sm tracking-wider">{t.author}</h4>
                                    <p className="text-accent text-xs uppercase tracking-widest">{t.role}</p>
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
