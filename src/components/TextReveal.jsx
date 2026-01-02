import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

const TextReveal = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [text, setText] = useState(children);
    const [isScrambling, setIsScrambling] = useState(false);

    // We will only scramble on initial load/view for impact
    useEffect(() => {
        if (!isInView || isScrambling) return;

        setIsScrambling(true);
        const originalText = children;
        let iterations = 0;

        // Wait for optional start delay
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setText(
                    originalText
                        .split("")
                        .map((char, index) => {
                            if (index < iterations) {
                                return originalText[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    setIsScrambling(false);
                }

                iterations += 1 / 3; // Speed of reveal
            }, 30);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);

    }, [children, isInView, delay]);

    return (
        <span ref={ref} className={className}>
            {text}
        </span>
    );
};

export default TextReveal;
