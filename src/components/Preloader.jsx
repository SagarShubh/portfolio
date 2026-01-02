import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Prevent scroll
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsComplete(true), 500); // Wait a bit at 100
                    return 100;
                }
                // Randomize increment for "human" feel
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isComplete) {
            document.body.style.overflow = 'auto'; // Restore scroll
        }
    }, [isComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-[99999] bg-black flex items-center justify-center flex-col"
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className="relative overflow-hidden">
                        <motion.h1
                            className="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {Math.min(count, 100)}%
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
