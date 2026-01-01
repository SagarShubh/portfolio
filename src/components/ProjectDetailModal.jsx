
import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose, onNext, onPrev }) => {
    if (!project) return null;

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-accent z-50 p-2 bg-black/50 rounded-full"
            >
                <X size={32} />
            </button>

            {/* Navigation Buttons (optional, hidden on mobile if too cramped) */}
            <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:text-accent hidden md:block">
                <ArrowLeft size={48} />
            </button>
            <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:text-accent hidden md:block">
                <ArrowRight size={48} />
            </button>

            <div className="w-full h-full overflow-y-auto px-4 py-20 md:p-20 scroll-smooth">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center uppercase">{project.title}</h2>

                    <div className="flex flex-col gap-4 md:gap-8">
                        {project.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${project.title} - ${idx + 1}`}
                                className="w-full h-auto rounded-sm shadow-2xl"
                                loading="lazy"
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center text-secondary">
                        <p>End of Project</p>
                        <div className="flex justify-center gap-4 mt-4 md:hidden">
                            <button onClick={onPrev} className="px-6 py-2 border border-white/20 rounded-full">Prev</button>
                            <button onClick={onNext} className="px-6 py-2 border border-white/20 rounded-full">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
