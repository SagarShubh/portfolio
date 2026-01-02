
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
                <h2 className="text-4xl md:text-6xl font-bold mb-20 uppercase">Selected Work</h2>

                {/* Categories Filter - Horizontal Scroll */}
                <div className="flex gap-3 overflow-x-auto pb-8 mb-12 no-scrollbar touch-pan-x items-center">
                    <span className="text-secondary text-xs uppercase tracking-widest mr-4 hidden md:block">Filter By:</span>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-6 py-3 rounded-sm border transition-all uppercase text-xs font-bold tracking-widest
                                ${activeCategory === cat
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'bg-transparent text-secondary border-white/10 hover:border-white hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid - Increased Size for Visibility */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {filteredProjects.map((project, idx) => (
                        <Link
                            key={`${project.id}-${idx}`}
                            to={`/project/${project.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer project-card block"
                        >
                            <div className="aspect-square bg-white/5 overflow-hidden rounded-sm mb-4 relative border border-white/5 group-hover:border-accent/50 transition-colors">
                                {project.images && project.images.length > 0 ? (
                                    <React.Fragment>
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Overlay Shadow */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    </React.Fragment>
                                ) : (
                                    <div className="flex items-center justify-center h-full text-zinc-700 text-xs">No Preview</div>
                                )}
                            </div>
                            <h3 className="text-base font-bold uppercase group-hover:text-accent transition-colors truncate tracking-wide">{project.title.replace(/-/g, ' ')}</h3>
                            <p className="text-xs text-secondary/60 truncate uppercase tracking-widest">{project.category}</p>
                        </Link>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-secondary">
                        <p>No projects found in this category.</p>
                        {(data.length === 0) && <p className="text-xs mt-2 opacity-50">Data still loading or generated...</p>}
                    </div>
                )}
            </div>

            {/* Removed Modal */}
        </section>
    );
};

export default PortfolioSection;
