import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Legal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-12">Legal Information</h1>

                    <div className="space-y-16 text-secondary">
                        <section id="privacy">
                            <h2 className="text-2xl text-white font-bold uppercase mb-6 border-b border-white/10 pb-4">Privacy Policy</h2>
                            <div className="space-y-4 font-light leading-relaxed">
                                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                                <p>
                                    Your privacy is respected. This website collects minimal data required for functionality and analytics (if enabled).
                                    By using the "Contact" form, you consent to sending your provided details via email for communication purposes only.
                                    We do not sell or share your personal information with third parties.
                                </p>
                            </div>
                        </section>

                        <section id="terms">
                            <h2 className="text-2xl text-white font-bold uppercase mb-6 border-b border-white/10 pb-4">Terms of Service</h2>
                            <div className="space-y-4 font-light leading-relaxed">
                                <p>
                                    All content on this portfolio, including images, case studies, and code snippets, is the intellectual property of Sagar Vaishnava unless otherwise stated.
                                    You may not reproduce, distribute, or use these materials for commercial purposes without explicit written permission.
                                </p>
                                <p>
                                    This website is provided "as is" without any warranties. We are not liable for any damages arising from the use of this site.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10">
                        <a href="/" className="text-accent uppercase text-sm tracking-widest hover:text-white transition-colors">&larr; Return Home</a>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
};

export default Legal;
