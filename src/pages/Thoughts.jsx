import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const posts = [
    { id: 1, title: "The Death of Flat Design", date: "Jan 02, 2026", category: "Design Theory", excerpt: "Why depth and texture are making a massive comeback in web interfaces." },
    { id: 2, title: "React Server Components: A love letter", date: "Dec 18, 2025", category: "Engineering", excerpt: "How RSC changed my entire mental model of frontend architecture." },
    { id: 3, title: "Why I switched to Framer Motion", date: "Nov 30, 2025", category: "Animation", excerpt: "Physics-based animations feel more human. Here is why." },
    { id: 4, title: "Building accessible 3D experiences", date: "Oct 12, 2025", category: "A11y", excerpt: "WebGL is great, but not if it breaks the web for 20% of users." }
];

const Thoughts = () => {
    return (
        <PageTransition>
            <SEOHead title="Thoughts | Writing" description="Essays on design, code, and the future of the web." />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
                <Navbar />

                <main className="container mx-auto px-6 md:px-12 pt-40 pb-20">
                    <Reveal width="100%">
                        <h1 className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter mb-24">
                            Though<span className="text-white/30 italic font-serif">ts</span>
                        </h1>
                    </Reveal>

                    <div className="space-y-0">
                        {posts.map((post, i) => (
                            <Reveal key={post.id} delay={i * 0.1} width="100%">
                                <Link to="#" className="group block border-t border-white/10 py-12 hover:bg-white/5 transition-colors -mx-6 px-6">
                                    <div className="grid md:grid-cols-12 gap-6 items-baseline">
                                        <div className="md:col-span-2 text-white/40 font-mono text-xs">{post.date}</div>
                                        <div className="md:col-span-6">
                                            <h2 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                                            <p className="text-secondary max-w-xl">{post.excerpt}</p>
                                        </div>
                                        <div className="md:col-span-4 text-right">
                                            <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60 group-hover:border-accent group-hover:text-accent transition-all">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                        <div className="border-t border-white/10" />
                    </div>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default Thoughts;
