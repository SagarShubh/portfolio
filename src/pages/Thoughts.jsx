import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
    { id: 1, title: "The Death of Flat Design", date: "Jan 02, 2026", category: "Design", excerpt: "Why depth, texture, and skeuomorphism are making a massive comeback." },
    { id: 2, title: "React Server Components", date: "Dec 18, 2025", category: "Engineering", excerpt: "How RSC changed my entire mental model of frontend architecture." },
    { id: 3, title: "Motion as Meaning", date: "Nov 30, 2025", category: "Design", excerpt: "Physics-based animations feel more human. Stop using linear easings." },
    { id: 4, title: "Accessible 3D Web", date: "Oct 12, 2025", category: "Engineering", excerpt: "WebGL that doesn't break the web for 20% of your users." },
    { id: 5, title: "The Art of Micro-Interactions", date: "Sep 28, 2025", category: "Design", excerpt: "Small details that create emotional connection." },
    { id: 6, title: "Scaling Design Systems", date: "Aug 15, 2025", category: "Strategy", excerpt: "From chaos to order: lessons from a year of refactoring." }
];

const categories = ["All", "Design", "Engineering", "Strategy"];

const Thoughts = () => {
    const [filter, setFilter] = useState("All");
    const [hoveredPost, setHoveredPost] = useState(null);

    const filteredPosts = filter === "All"
        ? posts
        : posts.filter(post => post.category === filter);

    return (
        <PageTransition>
            <SEOHead title="Thoughts | Writing" description="Essays on design, code, and the future of the web." />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
                <Navbar />

                <main className="container mx-auto px-6 md:px-12 pt-40 pb-40">
                    <Reveal width="100%">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
                            <h1 className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter">
                                Though<span className="text-white/30 italic font-serif">ts</span>
                            </h1>

                            {/* Filter Pills */}
                            <div className="flex flex-wrap gap-4 md:mb-4">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`px-4 py-2 rounded-full border text-sm uppercase tracking-widest transition-all duration-300 ${filter === cat
                                                ? 'bg-white text-black border-white'
                                                : 'bg-transparent text-white/50 border-white/20 hover:border-white hover:text-white'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <div className="space-y-0" onMouseLeave={() => setHoveredPost(null)}>
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, i) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    key={post.id}
                                    onMouseEnter={() => setHoveredPost(post.id)}
                                    className={`relative group border-t border-white/10 transition-all duration-500 ${hoveredPost && hoveredPost !== post.id ? 'opacity-30 blur-[1px]' : 'opacity-100'
                                        }`}
                                >
                                    <a href="#" className="block py-12 md:py-16 -mx-6 px-6 hover:bg-white/5 transition-colors">
                                        <div className="grid md:grid-cols-12 gap-6 items-baseline relative z-10">

                                            {/* Date & Category */}
                                            <div className="md:col-span-3 flex flex-col gap-2">
                                                <span className="font-mono text-accent text-xs">{post.date}</span>
                                                <span className="text-xs uppercase tracking-widest text-white/40">{post.category}</span>
                                            </div>

                                            {/* Title & Excerpt */}
                                            <div className="md:col-span-9 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                                                <div>
                                                    <h2 className="text-4xl md:text-6xl font-bold mb-4 group-hover:text-white transition-colors">
                                                        {post.title}
                                                    </h2>
                                                    <p className="text-secondary max-w-xl text-lg font-light group-hover:text-white/80 transition-colors">
                                                        {post.excerpt}
                                                    </p>
                                                </div>

                                                {/* Arrow */}
                                                <div className="hidden md:block opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                                    <span className="text-4xl text-accent">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Bottom Border */}
                    <div className="border-t border-white/10" />
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default Thoughts;
