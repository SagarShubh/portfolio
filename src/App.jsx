import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import About from './pages/About';
import Thoughts from './pages/Thoughts';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';

import { HelmetProvider } from 'react-helmet-async';

import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return (
    <HelmetProvider>
      <div className="App bg-black text-white min-h-screen cursor-none">
        <Preloader />
        <CustomCursor />
        <GrainOverlay />

        <Router>
          <ScrollToTop />
          <AnimatedRoutes />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
