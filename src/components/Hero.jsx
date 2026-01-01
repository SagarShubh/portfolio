
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

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
            );
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-primary px-4">
            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container text-center z-10 relative">
                <h2 ref={subtitleRef} className="text-secondary text-base md:text-xl uppercase tracking-[0.4em] mb-6">
                    Multidisciplinary Designer
                </h2>
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 text-white">
                    Designing The<br />
                    <span className="text-stroke">Unignorable</span>
                </h1>

                <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl leading-relaxed mt-8 font-light">
                    I help ambitious brands dominate their market through strategic identity,
                    high-fidelity UX/UI, and visual storytelling that leaves a mark.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    <a href="#work" className="bg-white text-black px-8 py-4 uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all duration-300">
                        View Selected Work
                    </a>
                    <a href="https://www.behance.net/sagar942504106" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-8 py-4 uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-300">
                        Visit Behance
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 animate-pulse text-white/20">
                <ArrowDown size={32} />
            </div>
        </section>
    );
};

export default Hero;
