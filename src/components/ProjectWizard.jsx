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
        <div className="w-full max-w-5xl mx-auto mt-10 p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            {/* Progress Bar */}
            <div className="relative mb-12 flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">Step {0 + step} — 03</span>
                <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                        <motion.div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-accent w-12' : 'bg-white/10 w-4'}`}
                        />
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
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-12 relative"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-[0.9] tracking-tight">
                            What are we <br /><span className="text-white/40">Building?</span>
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {services.map(s => (
                                <button
                                    key={s}
                                    onClick={() => handleServiceToggle(s)}
                                    className={`relative group overflow-hidden px-8 py-6 border text-xl uppercase tracking-wider transition-all duration-300 ${formData.service.includes(s)
                                        ? 'bg-white text-black border-white translate-y-[-2px] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]'
                                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white hover:text-black hover:border-white'
                                        }`}
                                >
                                    <span className="relative z-10">{s}</span>
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
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-12 relative"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-[0.9] tracking-tight">
                            Expected <br /><span className="text-white/40">Investment?</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {budgets.map(b => (
                                <button
                                    key={b}
                                    onClick={() => setFormData({ ...formData, budget: b })}
                                    className={`p-10 border text-left transition-all duration-300 group ${formData.budget === b
                                        ? 'bg-white text-black border-white shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] scale-[1.02]'
                                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/30'
                                        }`}
                                >
                                    <span className={`text-4xl font-bold block mb-3 ${formData.budget === b ? 'text-black' : 'text-white group-hover:text-white'}`}>{b}</span>
                                    <span className={`text-sm uppercase tracking-widest ${formData.budget === b ? 'text-black/60' : 'text-white/40'}`}>Estimated Budget</span>
                                </button>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                            <button onClick={prevStep} className="text-white/40 hover:text-white uppercase text-xs tracking-widest border-b border-transparent hover:border-white transition-all pb-1">Back</button>
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
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-12 relative"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-[0.9] tracking-tight">
                            Final <br /><span className="text-white/40">Details</span>
                        </h3>

                        <div className="space-y-10 max-w-4xl">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="group relative">
                                    <label className="text-xs uppercase tracking-widest text-white/50 mb-4 block group-focus-within:text-accent transition-colors">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border-b-2 border-white/10 py-6 px-6 text-2xl text-white placeholder:text-white/20 focus:bg-white/10 focus:border-accent focus:outline-none transition-all rounded-t-sm"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="group relative">
                                    <label className="text-xs uppercase tracking-widest text-white/50 mb-4 block group-focus-within:text-accent transition-colors">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border-b-2 border-white/10 py-6 px-6 text-2xl text-white placeholder:text-white/20 focus:bg-white/10 focus:border-accent focus:outline-none transition-all rounded-t-sm"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="group relative">
                                <label className="text-xs uppercase tracking-widest text-white/50 mb-4 block group-focus-within:text-accent transition-colors">Project Details</label>
                                <textarea
                                    rows="1"
                                    className="w-full bg-white/5 border-b-2 border-white/10 py-6 px-6 text-2xl text-white placeholder:text-white/20 focus:bg-white/10 focus:border-accent focus:outline-none transition-all resize-none overflow-hidden rounded-t-sm"
                                    placeholder="Tell me about your vision..."
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
                            <button onClick={prevStep} className="text-white/40 hover:text-white uppercase text-xs tracking-widest border-b border-transparent hover:border-white transition-all pb-1">Back</button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.name || !formData.email}
                                className="group relative bg-white text-black px-16 py-8 font-black uppercase tracking-widest text-lg hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.8)] hover:-translate-y-1"
                            >
                                <span className="relative z-10 w-full text-center block">Send Proposal</span>
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
