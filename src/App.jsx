import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';

import { HelmetProvider } from 'react-helmet-async';

import Legal from './pages/Legal';
import NotFound from './pages/NotFound';


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
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <CustomCursor />
        <ScrollToTop />
        {/* Cinematic Noise Overlay Global */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
