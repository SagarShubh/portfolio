import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Flatten all projects into a single list for easier navigation
    const allProjects = React.useMemo(() => {
        return projectsData.reduce((acc, category) => {
            return [...acc, ...category.projects];
        }, []);
    }, []);

    const currentIndex = allProjects.findIndex(p => p.id === id);
    const project = allProjects[currentIndex];

    // Calculate Next/Prev projects
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const slides = project.images.map(src => ({ src }));

    return (
        <PageTransition className="min-h-screen bg-black text-white">
            <SEOHead
                title={project.title.replace(/-/g, ' ')}
                description={`View the case study for ${project.title.replace(/-/g, ' ')} by Sagar Vaishnava.`}
            />
            <Navbar />

            <main className="pt-40 pb-20">
                <div className="container max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <Link to="/" className="inline-flex items-center text-white/50 hover:text-accent mb-8 transition-colors uppercase text-xs tracking-widest">
                            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
                        </Link>

                        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase leading-[0.9] tracking-tighter">
                            {project.title.replace(/-/g, ' ')}
                        </h1>
                        <div className="w-20 h-1 bg-accent mx-auto" />
                    </div>

                    {/* Image Grid */}
                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="break-inside-avoid w-full group cursor-zoom-in relative overflow-hidden rounded-sm"
                                onClick={() => {
                                    setLightboxIndex(idx);
                                    setLightboxOpen(true);
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} - ${idx + 1}`}
                                    className="w-full h-auto bg-white/5 transition-transform duration-700 group-hover:scale-105"
                                    loading={idx < 4 ? "eager" : "lazy"}
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                    <span className="text-white uppercase tracking-widest text-xs border border-white px-4 py-2">View Fullscreen</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Project Navigation */}
                    <div className="mt-32 border-t border-white/10 pt-16">
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                            {prevProject ? (
                                <Link to={`/project/${prevProject.id}`} className="group text-left">
                                    <span className="text-white/40 text-xs uppercase tracking-widest block mb-2 group-hover:text-accent transition-colors">Previous Project</span>
                                    <span className="text-2xl md:text-3xl font-bold uppercase block group-hover:translate-x-[-10px] transition-transform">{prevProject.title.replace(/-/g, ' ')}</span>
                                </Link>
                            ) : <div />}

                            {nextProject ? (
                                <Link to={`/project/${nextProject.id}`} className="group text-right">
                                    <span className="text-white/40 text-xs uppercase tracking-widest block mb-2 group-hover:text-accent transition-colors">Next Project</span>
                                    <span className="text-2xl md:text-3xl font-bold uppercase block group-hover:translate-x-[10px] transition-transform">{nextProject.title.replace(/-/g, ' ')}</span>
                                </Link>
                            ) : <div />}
                        </div>
                    </div>

                    <div className="mt-32 text-center">
                        <h3 className="text-2xl uppercase font-bold mb-8">Ready to start your project?</h3>
                        <Contact />
                    </div>
                </div>
            </main>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={slides}
            />

            <footer className="py-8 text-center text-secondary text-sm border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Sagar Vaishnava. All Rights Reserved.</p>
            </footer>
        </PageTransition>
    );
};

export default ProjectPage;
