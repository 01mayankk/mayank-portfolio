import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaBook } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

const Timeline = () => {
    const experiences = [
        {
            year: "2023 - 2026",
            title: "Project Experience",
            description: "Built TextIntellect (GenAI RAG Bot), NandiVision (CNN Cattle Classifier), and NeuroCargo (Logistics System). Tech: Python, React, Next.js.",
            icon: FaLaptopCode,
        },
        {
            year: "2023 - Present",
            title: "Bachelor of Technology (CSE)",
            description: "Lovely Professional University. Current CGPA: 7.31.",
            icon: FaGraduationCap,
        },
        {
            year: "2021 - 2023",
            title: "Intermediate (12th)",
            description: "R. S. M Public School. Score: 71%.",
            icon: FaBook,
        },
        {
            year: "2020 - 2021",
            title: "Matriculation (10th)",
            description: "Shanti Mission Academy. Score: 91.2%.",
            icon: FaBook,
        }
    ];

    return (
        <section id="experience" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
                <SectionTitle title="Experience" subtitle="My Journey" />

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex items-center justify-between mb-12 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-dark border-4 border-accent-cyan rounded-full z-10 flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                            >
                                <exp.icon size={14} />
                            </motion.div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="ml-12 md:ml-0 w-full md:w-5/12 bg-secondary/30 backdrop-blur-md border border-white/5 p-6 rounded-xl relative hover:border-accent-cyan/30 transition-all duration-300"
                            >
                                <span className="text-accent-cyan font-mono text-xs mb-2 block">{exp.year}</span>
                                <h3 className="text-xl font-bold mb-3 text-white">{exp.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{exp.description}</p>

                                {/* Arrow */}
                                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary/30 rotate-45 border-b border-l border-white/5 ${index % 2 === 0 ? '-right-2 border-r border-t border-b-0 border-l-0' : '-left-2'}`}></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
