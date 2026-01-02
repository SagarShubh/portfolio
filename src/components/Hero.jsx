import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';
import InteractiveShape from './InteractiveShape';

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const textRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // Simple fade-up animation
        const tl = gsap.timeline();

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(textRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(ctaRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.6"
            );
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <InteractiveShape />

            {/* Background Gradient Blob */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 px-6">
                <h2 ref={subtitleRef} className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
                    <TextReveal delay={0.5}>Sagar Vaishnava &mdash; Visual Strategist</TextReveal>
                </h2>

                <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.9] tracking-tighter mb-10 mix-blend-difference">
                    <TextReveal delay={1}>Designing</TextReveal> <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>
                        <TextReveal delay={1.2}>The Unignorable</TextReveal>
                    </span>
                </h1>

                <p ref={textRef} className="text-secondary text-lg md:text-2xl max-w-2xl leading-relaxed mb-12 font-light">
                    I build digital experiences that don't just exist—they <span className="text-white font-normal">dominate</span>.
                    Merging strategic clarity with cinematic aesthetics.
                </p>

                <div ref={ctaRef} className="flex flex-col md:flex-row gap-6">
                    <Magnetic strength={30}>
                        <a href="#work" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm overflow-hidden rounded-sm hover:skew-x-[-10deg] transition-transform inline-block">
                            <span className="relative z-10 text-black group-hover:text-black">Select Work</span>
                            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </a>
                    </Magnetic>
                    <a href="https://www.behance.net/sagar942504106" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/5 hover:border-white transition-all rounded-sm">
                        Behance Profile
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 animate-bounce opacity-50">
                <span className="sr-only">Scroll Down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
