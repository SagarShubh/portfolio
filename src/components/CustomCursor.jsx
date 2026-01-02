import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Move small dot cursor instantly
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                duration: 0,
                ease: 'none'
            });

            // Move follower with delay
            gsap.to(followerRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        // Add event listeners for hoverable elements
        const hoverables = document.querySelectorAll('a, button, input, textarea, [data-cursor="hover"]');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        window.addEventListener('mousemove', onMouseMove);

        // Clean up
        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', onMouseMove);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, [isHovering]); // Re-bind if hover state logic changes or DOM updates (simplified here)

    // Using a simpler approach for observation in a real SPA:
    // We might need a MutationObserver or event delegation if routes change content dynamically,
    // but for now, we'll stick to basic implementation and maybe refine binding.

    // Better approach for React Router: Event Delegation
    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, [data-cursor="hover"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        return () => document.removeEventListener('mouseover', handleMouseOver);
    }, []);


    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />

            {/* Follower Ring */}
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out mix-blend-difference ${isHovering ? 'scale-[2.5] bg-white text-black border-transparent opacity-20' : 'scale-100 opacity-50'}`}
            />
        </>
    );
};

export default CustomCursor;
