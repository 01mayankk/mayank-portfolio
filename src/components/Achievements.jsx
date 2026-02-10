import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const Achievements = () => {
    const achievements = [
        { label: "Problems Solved", value: "700+", description: "Across LeetCode, CodeForces, and GFG" },
        { label: "GATE Aim", value: "2027", description: "Focused preparation for top IITs" },
        { label: "AI/ML & Fullstack Projects", value: "10+", description: "System-level applications & deploying models" },
        { label: "Commits", value: "1.2k+", description: "Active contributions on GitHub" }
    ];

    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle title="Achievements" subtitle="Milestones" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                                {item.value}
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
