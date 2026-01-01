
import React, { useState, useMemo } from 'react';
import ProjectDetailModal from './ProjectDetailModal';
import { projectsData } from '../data/projects'; // Will be generated

const PortfolioSection = () => {
    // If data isn't generated yet, handle gracefully
    const data = projectsData || [];

    // Flatten all projects with category info for "All" view? 
    // Or just show Categories as tabs. User has 22 categories. Too many for tabs?
    // User sent screenshot of 22 folders. 
    // A dropdown or a horizontal scrollable strip is better.

    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', ...data.map(c => c.title)];

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') {
            // Flatten: return all projects from all categories
            return data.flatMap(cat => cat.projects.map(p => ({ ...p, category: cat.title })));
        }
        const cat = data.find(c => c.title === activeCategory);
        return cat ? cat.projects.map(p => ({ ...p, category: cat.title })) : [];
    }, [activeCategory, data]);

    const handleNext = () => {
        if (!selectedProject) return;
        const currentIndex = filteredProjects.findIndex(p => p === selectedProject);
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        setSelectedProject(filteredProjects[nextIndex]);
    };

    const handlePrev = () => {
        if (!selectedProject) return;
        const currentIndex = filteredProjects.findIndex(p => p === selectedProject);
        const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
        setSelectedProject(filteredProjects[prevIndex]);
    };

    return (
        <section id="work" className="py-20 min-h-screen bg-secondary">
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 uppercase">Selected Work</h2>

                {/* Categories Filter - Horizontal Scroll */}
                <div className="flex gap-4 overflow-x-auto pb-8 mb-8 no-scrollbar touch-pan-x">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-6 py-2 rounded-full border transition-all uppercase text-sm tracking-wider
                                ${activeCategory === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-secondary border-secondary/30 hover:border-white hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={`${project.id}-${idx}`}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer project-card"
                        >
                            <div className="aspect-[4/3] bg-black/50 overflow-hidden rounded-lg mb-4 relative">
                                {project.images && project.images.length > 0 ? (
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-zinc-700">No Preview</div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold uppercase group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-sm text-secondary">{project.category}</p>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-secondary">
                        <p>No projects found in this category.</p>
                        {(data.length === 0) && <p className="text-xs mt-2 opacity-50">Data still loading or generated...</p>}
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            )}
        </section>
    );
};

export default PortfolioSection;
