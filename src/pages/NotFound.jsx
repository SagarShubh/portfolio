import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
    return (
        <PageTransition className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
            {/* Background Noise */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 leading-none select-none">404</h1>

            <div className="absolute z-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white">Lost in the Void</h2>
                <p className="text-secondary mb-8 text-lg font-light">The page you're looking for has dissolved into pixels.</p>

                <Link to="/" className="inline-block border border-white/20 px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all rounded-sm">
                    Return Home
                </Link>
            </div>
        </PageTransition>
    );
};

export default NotFound;
