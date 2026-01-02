
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { projectsData } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const ProjectPage = () => {
    const { id } = useParams();

    // Flatten projects to find the matching one
    // We navigate by project ID mostly
    const project = React.useMemo(() => {
        for (const category of projectsData) {
            const found = category.projects.find(p => p.id === id);
            if (found) return found;
        }
        return null;
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);



    if (!project) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <PageTransition className="min-h-screen bg-primary text-white">
            <Navbar />

            <main className="pt-48 pb-20">
                <div className="container max-w-5xl mx-auto px-4">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-accent mb-8 transition-colors uppercase text-xs tracking-widest z-10 relative">
                        <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold mb-12 uppercase leading-tight text-center">
                        {project.title.replace(/-/g, ' ')}
                    </h1>

                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                        {project.images.map((img, idx) => (
                            <div key={idx} className="break-inside-avoid w-full">
                                <img
                                    src={img}
                                    alt={`${project.title} - ${idx + 1}`}
                                    className="w-full h-auto rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    loading={idx < 4 ? "eager" : "lazy"}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center border-t border-white/10 pt-12">
                        <h3 className="text-2xl uppercase font-bold mb-8">Ready to start your project?</h3>
                        <Contact />
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="mt-16 text-secondary hover:text-white uppercase text-xs tracking-widest transition-colors"
                        >
                            Back to Top &uarr;
                        </button>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-secondary text-sm border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Sagar Vaishnava. All Rights Reserved.</p>
            </footer>
        </PageTransition>
    );
};

export default ProjectPage;
