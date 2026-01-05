import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { articles } from '../data/articles';
import { ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = articles.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (!post) {
            navigate('/thoughts');
        }
    }, [post, navigate]);

    if (!post) return null;

    return (
        <PageTransition>
            <SEOHead title={`${post.title} | Thoughts`} description={post.content.substring(0, 150)} />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
                <Navbar />

                <main className="container mx-auto px-6 md:px-12 pt-40 pb-20">
                    <Reveal width="100%">
                        <button onClick={() => navigate('/thoughts')} className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Thoughts
                        </button>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <div className="flex flex-col gap-6 mb-16">
                            <div className="flex items-center gap-4 text-accent font-mono text-sm">
                                <span>{post.date}</span>
                                <span className="text-white/20">/</span>
                                <span className="uppercase tracking-widest text-white/60">{post.category}</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black leading-tight max-w-4xl">
                                {post.title}
                            </h1>
                        </div>
                    </Reveal>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <Reveal delay={0.2}>
                                <article
                                    className="prose prose-xl prose-invert prose-headings:font-bold prose-headings:text-white prose-p:text-secondary prose-p:font-light prose-strong:text-white prose-strong:font-bold prose-li:text-secondary"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </Reveal>
                        </div>

                        {/* Sidebar / Table of Contents placeholder */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-40 border-l border-white/10 pl-8">
                                <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Reading Time</p>
                                <p className="text-xl font-mono text-accent">{post.readTime}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Navigation */}
                    <div className="border-t border-white/10 mt-32 pt-20 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">More Thoughts</h3>
                        <button onClick={() => navigate('/thoughts')} className="px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm rounded-sm">
                            View All
                        </button>
                    </div>

                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default BlogPost;
