import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaCode, FaRocket, FaGithub, FaGraduationCap } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

const Counter = ({ value, duration = 4 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        // Handle values like "800+", "1.2k+", "2027"
        const numericPart = latest.toFixed(value.includes('.') ? 1 : 0);
        return value.replace(/[0-9.]+/, numericPart);
    });
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const animation = animate(count, numericValue, { duration });
            return animation.stop;
        }
    }, [inView, value, duration, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Achievements = () => {
    const achievements = [
        {
            label: "Problems Solved",
            value: "800+",
            description: "Across LeetCode, CodeForces, and GFG",
            icon: FaCode
        },
        {
            label: "GATE Aim",
            value: "2027",
            description: "Focused preparation for top IITs",
            icon: FaGraduationCap
        },
        {
            label: "AI/ML & Fullstack",
            value: "10+",
            description: "System-level applications & models",
            icon: FaRocket
        },
        {
            label: "GitHub Commits",
            value: "1.2k+",
            description: "Active contributions on GitHub",
            icon: FaGithub
        }
    ];

    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle title="Achievements" subtitle="Milestones" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center group hover:bg-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/5"
                        >
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 bg-dark/50 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-accent-cyan/30 transition-colors">
                                    <item.icon className="text-2xl text-accent-cyan group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                                <Counter value={item.value} />
                            </h3>
                            <p className="text-lg font-medium text-accent-cyan mb-2">{item.label}</p>
                            <p className="text-sm text-text-muted">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
