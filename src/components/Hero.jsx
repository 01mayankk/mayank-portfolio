import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import Button from './ui/Button';
import profileImage from '../assets/images/formal_image.png';

const Hero = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        "Software Engineer",
        "Algorithmic Problem Solver",
        "AI & Systems Enthusiast"
    ];

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));
                if (text.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setText(currentRole.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/50 via-dark to-dark opacity-50"></div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-cyan/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-violet/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent-cyan font-medium mb-4 tracking-wide"
                    >
                        Hi, my name is
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Mayank <span className="text-gradient">Kumar</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-text-muted mb-8 h-8 font-mono">
                        I am a <span className="text-white">{text}</span>
                        <span className="animate-pulse">|</span>
                    </div>

                    <p className="text-text-muted text-lg mb-10 max-w-lg leading-relaxed">
                        Building efficient systems, mastering core CS fundamentals, and turning algorithmic logic into scalable backend products.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="projects" smooth={true} duration={500}>
                            <Button variant="primary" icon={FaArrowRight}>
                                View Projects
                            </Button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" icon={FaFileDownload}>
                                Download Resume
                            </Button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex justify-center"
                >
                    {/* Profile Image with Enhanced Visuals */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]"
                    >
                        {/* Multiple Glow Layers */}
                        <div className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute inset-0 bg-accent-violet/10 rounded-full blur-2xl animate-pulse delay-700"></div>

                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-accent-cyan/20 rounded-full border-dashed"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-8 border border-accent-violet/10 rounded-full border-dashed"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-12 border border-white/5 rounded-full"
                        ></motion.div>

                        <div className="relative w-full h-full rounded-full p-2 border border-white/10 overflow-hidden bg-secondary/30 backdrop-blur-md shadow-2xl z-10">
                            <img
                                src={profileImage}
                                alt="Mayank Kumar"
                                className="w-full h-full object-cover rounded-full transition-transform duration-700"
                                style={{ objectPosition: 'center' }}
                            />

                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/5 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Tech Ornaments */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-accent-cyan"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-accent-cyan"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <Link to="about" smooth={true} duration={500} className="cursor-pointer flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-current rounded-full"></div>
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
