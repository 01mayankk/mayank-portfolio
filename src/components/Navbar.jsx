import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { cn } from '../lib/utils';
import Button from './ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            isScrolled ? "bg-dark/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer font-heading tracking-tight">
                    Mayank<span className="text-gradient">.dev</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            activeClass="text-accent-cyan font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent-cyan"
                            className="relative text-text-muted hover:text-white cursor-pointer transition-all text-base font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-6">
                        <a href="https://github.com/01mayankk" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/01mayank/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className={cn(
                        "w-6 h-0.5 bg-text transition-all duration-300 ease-out",
                        isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-accent-cyan" : "-translate-y-1"
                    )}></span>
                    <span className={cn(
                        "w-6 h-0.5 bg-text transition-all duration-300 ease-out",
                        isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    )}></span>
                    <span className={cn(
                        "w-6 h-0.5 bg-text transition-all duration-300 ease-out",
                        isMobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-accent-cyan" : "translate-y-1"
                    )}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-dark/60 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-text-muted hover:text-accent-cyan cursor-pointer hover:tracking-wider transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-6 mt-4">
                                <a href="https://github.com/01mayankk" target="_blank" rel="noreferrer" className="text-text hover:text-accent-cyan">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/01mayank/" target="_blank" rel="noreferrer" className="text-text hover:text-accent-cyan">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
