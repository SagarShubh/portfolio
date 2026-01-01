
import React from 'react';
import { Mail, Loader, CheckCircle } from 'lucide-react';

const Contact = () => {
    // Simple mock form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! (This is a demo form)");
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-primary">
            <div className="container max-w-4xl text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase">Let's Work Together</h2>
                <p className="text-secondary mb-12 text-lg">
                    Have a project in mind? I'm always open to discussing new opportunities in branding, UX/UI, and design.
                </p>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    {/* Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="p-6 border border-white/10 rounded-lg hover:border-accent transition-colors">
                            <Mail className="w-8 h-8 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-2">Email Me</h3>
                            <a href="mailto:sagar1vaishnava@gmail.com" className="text-secondary hover:text-white transition-colors">sagar1vaishnava@gmail.com</a>
                        </div>
                        {/* Other contact details if needed */}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm uppercase tracking-wider text-secondary">Name</label>
                            <input type="text" id="name" className="bg-white/5 border border-white/10 p-4 rounded-md focus:border-accent outline-none transition-colors text-white" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm uppercase tracking-wider text-secondary">Email</label>
                            <input type="email" id="email" className="bg-white/5 border border-white/10 p-4 rounded-md focus:border-accent outline-none transition-colors text-white" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm uppercase tracking-wider text-secondary">Message</label>
                            <textarea id="message" rows="4" className="bg-white/5 border border-white/10 p-4 rounded-md focus:border-accent outline-none transition-colors text-white" required></textarea>
                        </div>
                        <button type="submit" className="bg-white text-black py-4 px-8 font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
