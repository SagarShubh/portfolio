import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSound } from '../hooks/useSound';
import { Menu, X } from 'lucide-react';
import '../index.css';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { pathname, hash } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Sound Hooks
    const { playHover, playClick } = useSound();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Links
    const links = [
        { name: 'Work', path: '/#work' },
        { name: 'About', path: '/about' },
        { name: 'Thoughts', path: '/thoughts' },
        { name: 'Contact', path: '/#contact' },
    ];

    // Helper function to determine if a link is active
    const isActive = (path) => {
        if (path.startsWith('/#')) {
            return pathname === '/' && hash === path.substring(1);
        }
        return pathname === path;
    };

    const handleNavClick = (href) => {
        setMobileMenuOpen(false); // Close mobile menu on click
        if (href.startsWith('/#')) {
            if (pathname !== '/') {
                // If on a different page, navigate to home and then scroll
                window.location.href = `/${href}`; // This will cause a full page reload and scroll - simplest way
            } else {
                // If on the home page, just scroll
                const element = document.querySelector(href.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-black tracking-tighter mix-blend-difference z-50 hover:opacity-80 transition-opacity" onClick={playClick}>
                    SAGAR<span className="text-accent">.</span>V
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <Magnetic key={link.name}>
                            {link.path.startsWith('/#') ? (
                                <a
                                    href={link.path}
                                    className={`relative px-4 py-2 text-sm uppercase tracking-widest transition-colors ${isActive(link.path) ? 'text-white' : 'text-secondary hover:text-white'}`}
                                    onMouseEnter={playHover}
                                    onClick={() => {
                                        playClick();
                                        handleNavClick(link.path);
                                    }}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-x-0 -bottom-1 h-[1px] bg-accent"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm uppercase tracking-widest transition-colors ${isActive(link.path) ? 'text-white' : 'text-secondary hover:text-white'}`}
                                    onMouseEnter={playHover}
                                    onClick={playClick}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-x-0 -bottom-1 h-[1px] bg-accent"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            )}
                        </Magnetic>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white z-50" onClick={() => { playClick(); setMobileMenuOpen(!mobileMenuOpen); }}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-full'}`}>
                {links.map((link) => (
                    link.path.startsWith('/#') ? (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => {
                                playClick();
                                if (pathname === '/') {
                                    e.preventDefault();
                                    handleNavClick(link.path);
                                } else {
                                    setMobileMenuOpen(false);
                                }
                            }}
                            className="text-4xl font-black uppercase hover:text-accent tracking-tighter"
                        >
                            {link.name}
                        </a>
                    ) : (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => { playClick(); setMobileMenuOpen(false); }}
                            className="text-4xl font-black uppercase hover:text-accent tracking-tighter"
                        >
                            {link.name}
                        </Link>
                    )
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
