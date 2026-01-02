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
        console.log("Form Submitted:", formData);
        alert("Thanks! I'll be in touch soon.");
        setStep(1);
        setFormData({ service: [], budget: '', name: '', email: '', details: '' });
    };

    return (
        <div className="w-full max-w-5xl mx-auto mt-10">
            {/* Progress Bar */}
            <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-secondary text-xs uppercase tracking-widest">Step {0 + step} / 03</span>
                <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-0.5 w-12 transition-all duration-500 ${i <= step ? 'bg-accent' : 'bg-white/10'}`} />
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
                            What are we <br /><span className="text-white/20">Building?</span>
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {services.map(s => (
                                <button
                                    key={s}
                                    onClick={() => handleServiceToggle(s)}
                                    className={`px-8 py-6 border text-lg md:text-xl uppercase tracking-wider transition-all duration-300 ${formData.service.includes(s)
                                            ? 'bg-white text-black border-white translate-y-[-4px] shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)]'
                                            : 'bg-transparent border-white/20 text-secondary hover:border-white hover:text-white'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <button
                                onClick={nextStep}
                                disabled={formData.service.length === 0}
                                className="group flex items-center gap-6 text-2xl font-black uppercase text-white hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                Next Step <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
                            Expected <br /><span className="text-white/20">Investment?</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {budgets.map(b => (
                                <button
                                    key={b}
                                    onClick={() => setFormData({ ...formData, budget: b })}
                                    className={`p-8 border text-left transition-all duration-300 group ${formData.budget === b
                                            ? 'bg-white text-black border-white'
                                            : 'bg-transparent border-white/20 text-secondary hover:border-white'
                                        }`}
                                >
                                    <span className={`text-3xl font-bold block mb-2 ${formData.budget === b ? 'text-black' : 'text-white group-hover:text-accent'}`}>{b}</span>
                                    <span className="text-xs uppercase tracking-widest opacity-60">Estimated Budget</span>
                                </button>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                            <button onClick={prevStep} className="text-secondary hover:text-white uppercase text-xs tracking-widest border-b border-transparent hover:border-white transition-all pb-1">Back</button>
                            <button
                                onClick={nextStep}
                                disabled={!formData.budget}
                                className="group flex items-center gap-6 text-2xl font-black uppercase text-white hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                Next Step <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
                            Final <br /><span className="text-white/20">Details</span>
                        </h3>

                        <div className="space-y-8 max-w-3xl">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2 group-focus-within:text-accent transition-colors">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2 group-focus-within:text-accent transition-colors">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label className="block text-xs uppercase tracking-widest text-secondary mb-2 group-focus-within:text-accent transition-colors">Project Details</label>
                                <textarea
                                    rows="1"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors resize-none overflow-hidden"
                                    placeholder="Tell me about your goals..."
                                    onInput={(e) => {
                                        e.target.style.height = "auto";
                                        e.target.style.height = e.target.scrollHeight + "px";
                                    }}
                                    value={formData.details}
                                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                            <button onClick={prevStep} className="text-secondary hover:text-white uppercase text-xs tracking-widest border-b border-transparent hover:border-white transition-all pb-1">Back</button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.name || !formData.email}
                                className="group relative bg-white text-black px-12 py-6 font-black uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                            >
                                <span className="relative z-10">Send Proposal</span>
                                <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectWizard;
