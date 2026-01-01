
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary text-primary selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />

      <main>
        <PortfolioSection />

        {/* About Section */}
        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-secondary/50">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-tight">Beyond The <br /> <span className="text-accent">Pixels</span></h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                I'm <strong>Sagar Vaishnava</strong>, but my clients call me their secret weapon.
                In a world of template designs, I craft bespoke visual identities that command attention.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                With a relentlessly high standard for aesthetics and a deep understanding of user psychology,
                I don't just "make things look good"—I build systems that drive growth.
                Startups trust me to launch. Enterprises trust me to scale.
              </p>

              <a href="https://www.behance.net/sagar942504106" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-accent text-accent pb-1 uppercase tracking-wider text-sm hover:text-white hover:border-white transition-colors">
                View Full Portfolio on Behance &rarr;
              </a>
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-xl uppercase tracking-widest text-white/50 mb-6 border-b border-white/10 pb-2">Technical Arsenal</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma (UI/UX)', 'After Effects', 'Premiere Pro', 'Core Branding', 'Visual Strategy'].map(skill => (
                  <div key={skill} className="bg-white/5 border border-white/10 p-4 rounded-sm text-center uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-8 text-center text-secondary text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Sagar Vaishnava. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4 uppercase text-xs tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
