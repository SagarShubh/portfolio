import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const ProjectWizard = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: [],
        budget: '',
        name: '',
        email: '',
        details: ''
    });

    const services = [
        "Brand Identity",
        "Web Design",
        "Development",
        "Strategy",
        "Full Package"
    ];

    const budgets = [
        "< $5k",
        "$5k - $10k",
        "$10k - $20k",
        "$20k+"
    ];

    const handleServiceToggle = (item) => {
        setFormData(prev => ({
            ...prev,
            service: prev.service.includes(item)
                ? prev.service.filter(i => i !== item)
                : [...prev.service, item]
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send to API
        console.log("Form Submitted:", formData);
        alert("Thanks! I'll be in touch soon.");
        setStep(1);
        setFormData({ service: [], budget: '', name: '', email: '', details: '' });
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-secondary/10 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-sm">
            <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-widest text-secondary">
                <span>Step {step} of 3</span>
                <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? 'bg-accent' : 'bg-white/10'}`} />
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold uppercase">What are we building?</h3>
                        <div className="flex flex-wrap gap-4">
                            {services.map(s => (
                                <button
                                    key={s}
                                    onClick={() => handleServiceToggle(s)}
                                    className={`px-6 py-3 border rounded-sm text-sm uppercase tracking-wider transition-all ${formData.service.includes(s)
                                            ? 'bg-white text-black border-white'
                                            : 'border-white/20 text-secondary hover:border-white/50'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <div className="pt-4">
                            <button
                                onClick={nextStep}
                                disabled={formData.service.length === 0}
                                className="group flex items-center gap-4 text-xl font-bold uppercase hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next Step <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold uppercase">What's the investment?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {budgets.map(b => (
                                <button
                                    key={b}
                                    onClick={() => setFormData({ ...formData, budget: b })}
                                    className={`p-6 border rounded-sm text-left transition-all ${formData.budget === b
                                            ? 'bg-white text-black border-white'
                                            : 'border-white/20 text-secondary hover:border-white/50'
                                        }`}
                                >
                                    <span className="text-lg font-bold">{b}</span>
                                </button>
                            ))}
                        </div>
                        <div className="pt-8 flex gap-8">
                            <button onClick={prevStep} className="text-secondary hover:text-white uppercase text-sm tracking-widest">Back</button>
                            <button
                                onClick={nextStep}
                                disabled={!formData.budget}
                                className="group flex items-center gap-4 text-xl font-bold uppercase hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next Step <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold uppercase">Final Details</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                            <textarea
                                rows="4"
                                placeholder="Tell me about the project..."
                                className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
                                value={formData.details}
                                onChange={e => setFormData({ ...formData, details: e.target.value })}
                            />
                        </div>

                        <div className="pt-8 flex gap-8">
                            <button onClick={prevStep} className="text-secondary hover:text-white uppercase text-sm tracking-widest">Back</button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.name || !formData.email}
                                className="group bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                            >
                                Send Proposal
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectWizard;
