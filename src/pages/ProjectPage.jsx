import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';
import Navbar from '../components/Navbar';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Flatten logic
    const allProjects = projectsData.flatMap(category => category.projects.map(p => ({ ...p, category: category.id })));

    // Find next/prev logic
    // Using string comparison for IDs if they are strings
    const currentIndex = allProjects.findIndex(p => p.id === id);
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;

    useEffect(() => {
        const found = allProjects.find((p) => p.id === id);
        setProject(found);
        window.scrollTo(0, 0);
    }, [id]);

    const isEditorial = project && (project.category.includes('Brand') || project.category.includes('Identity'));

    const handlePrev = () => {
        if (prevProject) {
            navigate(`/project/${prevProject.id}`);
        }
    };

    const handleNext = () => {
        if (nextProject) {
            navigate(`/project/${nextProject.id}`);
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <PageTransition>
            <SEOHead title={project.title} />
            <div className="bg-black min-h-screen text-white pb-20 selection:bg-accent selection:text-black">
                <Navbar />

                {/* Hero Section */}
                <div className="relative h-[70vh] w-full overflow-hidden">
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                        <Reveal>
                            <span className="text-accent uppercase tracking-[0.5em] text-sm md:text-base mb-4 block text-left">{project.category}</span>
                            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8 text-left">{project.title}</h1>
                        </Reveal>
                    </div>
                </div>

                <div className="container mx-auto px-6 md:px-12 py-20">
                    {/* Conditional Layout */}
                    {isEditorial ? (
                        <div className="space-y-32">
                            <Reveal width="100%">
                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="text-2xl font-light leading-relaxed text-secondary sticky top-32">
                                        <h2 className="text-white text-4xl font-serif italic mb-8">The Philosophy</h2>
                                        <p>
                                            For {project.title}, we stripped away the non-essential. The goal was to create an identity that felt timeless yet aggressively modern.
                                        </p>
                                        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                            <div>
                                                <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Role</h3>
                                                <p className="text-white">Art Direction</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Year</h3>
                                                <p className="text-white">2024</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        {project.images.slice(1).map((img, idx) => (
                                            <div key={idx} className="bg-white/5 p-4 rounded-sm" onClick={() => { setIndex(idx + 1); setOpen(true); }}>
                                                <img src={img} alt="Detail" className="w-full h-auto object-cover cursor-zoom-in hover:opacity-80 transition-opacity" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-4 space-y-12">
                                <Reveal>
                                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 sticky top-32">
                                        <h3 className="text-xl font-bold uppercase mb-6">Brief</h3>
                                        <p className="text-secondary leading-relaxed mb-8">
                                            A deep dive into the UX/UI challenges solved during the development of {project.title}.
                                        </p>
                                        <div className="space-y-4 mb-8">
                                            <div>
                                                <h4 className="text-xs uppercase text-white/50 tracking-widest mb-1">Client</h4>
                                                <p>Confidential</p>
                                            </div>
                                            <div>
                                                <h4 className="text-xs uppercase text-white/50 tracking-widest mb-1">Year</h4>
                                                <p>2025</p>
                                            </div>
                                        </div>
                                        <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
                                            Live Project ↗
                                        </button>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="md:col-span-8 space-y-12">
                                {project.images.slice(1).map((img, idx) => (
                                    <Reveal key={idx} width="100%">
                                        <div
                                            className="group relative aspect-video overflow-hidden rounded-xl bg-white/5 border border-white/10 cursor-pointer"
                                            onClick={() => { setIndex(idx + 1); setOpen(true); }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Screenshot ${idx + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="text-white uppercase tracking-widest text-sm">Expand View</span>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Next Project CTA */}
                    <div className="py-32 border-t border-white/10 mt-20 text-center">
                        <h3 className="text-white/50 uppercase tracking-[0.2em] mb-8 text-sm">Ready to build something?</h3>
                        <a href="/#contact" className="inline-block text-4xl md:text-8xl font-black uppercase text-white hover:text-accent transition-colors">
                            Let's Talk
                        </a>
                    </div>
                </div>

                {/* Footer Nav */}
                <div className="container mx-auto px-6 md:px-12 border-t border-white/10 pt-12 flex justify-between">
                    <button onClick={handlePrev} className="text-secondary hover:text-white transition-colors uppercase tracking-widest text-sm disabled:opacity-30" disabled={!prevProject}>← Prev</button>
                    <button onClick={handleNext} className="text-secondary hover:text-white transition-colors uppercase tracking-widest text-sm disabled:opacity-30" disabled={!nextProject}>Next →</button>
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={project.images.map(src => ({ src }))}
                />
            </div>
        </PageTransition>
    );
};

export default ProjectPage;
